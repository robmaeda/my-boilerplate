import React from "react";

const Footer = () => {
    return (
        <footer className="footer bg-base-200 px-64 py-10 text-base-content">
            <aside>
                <p>
                    ENTER NAME OF APP/SITE HERE
                    <br />
                    Copyright © 2024 - All rights reserved
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Links</h6>
                <a className="link-hover link" href="">
                    Support
                </a>
                <a className="link-hover link" href="">
                    Pricing
                </a>
                <a className="link-hover link" href="">
                    Twitter
                </a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link-hover link" href="">
                    Terms of Service
                </a>
                <a className="link-hover link" href="">
                    Privacy Policy
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
