import CTACard from '../components/CTACard'
import StepCard from '../components/StepCard'
import StatCard from '../components/StatCard'
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
        <Navbar/>
        <main className="relative min-h-10xl overflow-hidden bg-[#FFFDFB]">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF1E8_0%,transparent_55%)]" />

            {/* Hero */}
            <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 text-center">

                {/* Heading */}
                <h1 className="z-20 mt-5 text-6xl font-black leading-[0.9] md:text-7xl lg:text-[5.5rem]">
                    <span className="block text-[#0A1E5E]">
                        Report.
                    </span>

                    <span className="block text-[#0A1E5E]">
                        Protect.
                    </span>

                    <span className="block text-[#FF5A1F]">
                        Empower.
                    </span>
                </h1>

                {/* Description */}
                <p className="z-20 mt-6 max-w-2xl text-lg text-slate-600">
                    <span className="font-bold text-slate-900">
                        SakhiAI
                    </span>{" "}
                    is your trusted companion for filing complaints,<br/>
                    getting guidance, and staying safe anytime, anywhere.
                </p>

                {/* Buttons */}
                <div className="z-20 mt-5 flex flex-col gap-8 sm:flex-row">

                    <button onClick={() => navigate("/complaint")} className="flex items-center gap-4 rounded-2xl border border-orange-400 px-7 py-2 shadow-lg hover:shadow-xl  bg-[#f2d3c8]/80">
                        <span className="text-3xl bg-blend-color-burn">📋</span>
                        <span className="font-bold text-lg ">
                            File a Complaint
                        </span>
                        <ArrowRight className="h-15 w-10 pl-2 text-orange-500" />
                    </button>

                    <button className="flex items-center gap-4 rounded-2xl border border-blue-300 bg-blue-100/80 px-7 py-2 shadow-lg hover:shadow-xl">
                        <span className="text-3xl">🤖</span>
                        <span className="font-bold text-[#0A1E5E] text-lg">
                            AI Safety Assistant
                        </span>
                        <ArrowRight className="h-15 w-10 pl-2 text-blue-500" />
                    </button>

                </div>

                {/* Illustration */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/5 w-full max-w-7xl ">
                    <img
                        src="/bg.png"
                        alt="Women Empowerment"
                        className="w-full object-contain opacity-90"
                    />
                </div>

            </section>
        </main>
        </>
    );
};

export default HomePage;
