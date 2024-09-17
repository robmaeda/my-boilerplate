"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as z from "zod";

interface FormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const schema = z
    .object({
        username: z
            .string()
            .min(5, "Username must be at least 5 characters long"),
        email: z.string().email("Invalid email address"),
        password: z
            .string()
            .regex(/[^A-Za-z0-9]/, "Password must include at least one symbol")
            .regex(/[0-9]/, "Password must include at least one number")
            .regex(
                /[a-z]/,
                "Password must include at least one lowercase letter",
            )
            .regex(
                /[A-Z]/,
                "Password must include at least one uppercase letter",
            ),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

type SchemaType = z.infer<typeof schema>;

const SignupForm = () => {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<Partial<SchemaType>>({});
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            schema.parse(formData);
            const response = await fetch("/api/signup", {
                method: "POST",
                body: JSON.stringify(formData),
            });
            if (response) {
                const loginResponse = await signIn("credentials", {
                    email: formData.email,
                    password: formData.password,
                    redirect: false,
                });
                setErrors({});
                if (!loginResponse?.error) {
                    router.push("/home");
                }
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = error.errors.reduce(
                    (all: Partial<SchemaType>, current) => {
                        all[current.path[0] as keyof SchemaType] =
                            current.message;
                        return all;
                    },
                    {},
                );
                setErrors(fieldErrors);
            }
        }
    };

    return (
        <form
            className="flex flex-col items-center rounded-md border border-black/30 bg-white p-10 shadow-md"
            onSubmit={onSubmit}
        >
            <div className="w-3/4 text-lg">SIGN UP</div>
            <div className="mt-4 flex w-3/4 flex-col">
                <label htmlFor="username">Username</label>
                <input
                    className="input input-bordered mt-1"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && (
                    <p className="mt-0.5 text-sm text-red-600">
                        {errors.username}
                    </p>
                )}
            </div>
            <div className="mt-4 flex w-3/4 flex-col">
                <label htmlFor="email">Email</label>
                <input
                    className="input input-bordered mt-1"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && (
                    <p className="mt-0.5 text-sm text-red-600">
                        {errors.email}
                    </p>
                )}
            </div>
            <div className="mt-4 flex w-3/4 flex-col">
                <label htmlFor="password">Password</label>
                <input
                    className="input input-bordered mt-1"
                    id="password"
                    name="password"
                    value={formData.password}
                    type="password"
                    onChange={handleChange}
                />
                {errors.password && (
                    <p className="mt-0.5 text-sm text-red-600">
                        {errors.password}
                    </p>
                )}
            </div>
            <div className="mt-4 flex w-3/4 flex-col">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    className="input input-bordered mt-1"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    type="password"
                    onChange={handleChange}
                />
                {errors.confirmPassword && (
                    <p className="mt-0.5 text-sm text-red-600">
                        {errors.confirmPassword}
                    </p>
                )}
            </div>
            <button
                className="btn btn-primary mx-auto mt-6 flex w-64"
                type="submit"
            >
                Sign Up
            </button>
            <hr className="my-6 w-full border-gray-300" />
            <button className="btn w-64" onClick={() => signIn("google")}>
                Sign Up with Google
            </button>
            <div className="mb-8 mt-6 text-gray-600">
                Already a user?{" "}
                <Link className="underline" href="/login">
                    LOGIN
                </Link>
            </div>
        </form>
    );
};

export default SignupForm;
