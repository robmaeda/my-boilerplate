import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../lib/authOptions";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

const Login = async () => {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/home");
    }

    return (
        <section className="flex size-full items-center justify-center">
            <div className="w-[800px]">
                <LoginForm />
            </div>
        </section>
    );
};

export default Login;
