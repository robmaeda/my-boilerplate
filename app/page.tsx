import Link from "next/link";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LandingNavbar from "./components/LandingNavbar";

const Landing = () => {
    return (
        <>
            <LandingNavbar />
            <main className="min-h-screen">
                <div className="hero min-h-screen">
                    <div className="hero-content text-center">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl font-bold xl:text-7xl">
                                STRONG STATEMENT HERE
                            </h1>
                            <p className="py-8 text-xl">
                                ADDITIONAL INFORMATION HERE
                            </p>
                            <Link className="btn btn-primary" href="/signup">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
                <section id="how-it-works" className="mx-28">
                    <div className="text-3xl font-bold">How it works</div>
                    <div className="mt-4 text-lg">
                        ADD TEXT HERE FOR HOW IT WORKS
                    </div>
                    <div className="mt-8 text-lg">MORE HERE</div>
                </section>
                <section id="reviews" className="mx-28 my-48">
                    <div className="text-3xl font-bold">Reviews</div>
                    <div className="mt-4 text-lg">
                        NAME is still in beta testing. If you enjoy using the
                        application and recieve value from it, we&apos;d greatly
                        appreciate a review!
                    </div>
                </section>
                <FAQ />
            </main>
            <Footer />
        </>
    );
};

export default Landing;
