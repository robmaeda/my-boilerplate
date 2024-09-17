import Link from "next/link";
import React from "react";

const NotSignedIn = () => {
    return (
        <>
            <div>You must be logged in to view this page.</div>
            <Link href="/login">Go to login page</Link>
        </>
    );
};

export default NotSignedIn;
