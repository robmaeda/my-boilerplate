import Link from "next/link";

const LandingNavbar = () => {
    return (
        <div className="navbar bg-base-300 px-5 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                    >
                        <li>
                            <a href="/#how-it-works">How it Works</a>
                        </li>
                        <li>
                            <a href="/#reviews">Reviews</a>
                        </li>
                        <li>
                            <a href="/#faq">FAQ</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Chef Base</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="/#how-it-works">How it Works</a>
                    </li>
                    <li>
                        <a href="/#reviews">Reviews</a>
                    </li>
                    <li>
                        <a href="/#faq">FAQ</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn" href="/login">
                    Sign in
                </Link>
                <Link className="btn btn-primary ml-2" href="/signup">
                    Sign up
                </Link>
            </div>
        </div>
    );
};

export default LandingNavbar;
