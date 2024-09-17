"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface LoginData {
    email: string;
    password: string;
}

const LoginForm = () => {
    const [loginData, setLoginData] = useState<LoginData>({
        email: "",
        password: "",
    });
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await signIn("credentials", {
            email: loginData.email,
            password: loginData.password,
            redirect: false,
        });

        if (!response?.error) {
            router.push("/home");
        }
    };

    return (
        <form
            className="flex flex-col items-center rounded-md border border-black/30 bg-white p-10 shadow-md"
            onSubmit={onSubmit}
        >
            <div className="w-3/4 text-lg">LOGIN</div>
            <div className="mt-4 flex w-3/4 flex-col">
                <label htmlFor="email">Email</label>
                <input
                    className="input input-bordered mt-1"
                    id="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mt-4 flex w-3/4 flex-col">
                <label htmlFor="password">Password</label>
                <input
                    className="input input-bordered mt-1"
                    id="password"
                    name="password"
                    value={loginData.password}
                    type="password"
                    onChange={handleChange}
                />
            </div>
            <button
                className="btn btn-primary mx-auto mt-6 flex w-64"
                type="submit"
            >
                Sign In
            </button>
            <hr className="my-6 w-full border-gray-300" />
            <button className="btn w-64" onClick={() => signIn("google")}>
                Sign In with Google
            </button>
            <div className="mb-8 mt-6 text-gray-600">
                Don&apos;t have an account yet?{" "}
                <Link className="underline" href="/signup">
                    SIGN UP
                </Link>
            </div>
        </form>
    );
};

export default LoginForm;
