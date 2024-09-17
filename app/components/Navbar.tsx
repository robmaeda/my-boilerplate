"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="navbar sticky bg-base-100 p-5">
            <div>TITLE GOES HERE</div>
            <div className="dropdown dropdown-end dropdown-hover ml-auto">
                <div
                    tabIndex={0}
                    role="button"
                    className="avatar btn btn-circle"
                >
                    <div className="w-10 rounded-full bg-blue-500"></div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 shadow"
                >
                    <li>-Username-</li>
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                    <li>
                        <Link href="/settings">Settings</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <button onClick={() => signOut({ callbackUrl: "/" })}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
