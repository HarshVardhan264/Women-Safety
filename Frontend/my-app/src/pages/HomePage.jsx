import {
    ArrowRight,
    Shield,
    MessageCircle,
    FileText,
    Heart,
    CheckCircle,
    Lock,
    Minus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import StepCard from "../components/StepCard";
import TelegramIcon from "../components/Telegram";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <main className="relative overflow-hidden bg-white">
                {/* Hero Section - UNCHANGED */}
                <section className="relative min-h-screen bg-[#FFFDFB] overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF1E8_0%,transparent_55%)]" />

                    {/* Hero Content */}
                    <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 text-center">
                        {/* Heading */}
                        <h1 className="z-20 mt-5 text-6xl font-black leading-[0.9] md:text-7xl lg:text-[5.5rem]">
                            <span className="block text-[#0A1E5E]">Report.</span>
                            <span className="block text-[#0A1E5E]">Protect.</span>
                            <span className="block text-[#FF5A1F]">Empower.</span>
                        </h1>

                        {/* Description */}
                        <p className="z-20 mt-6 max-w-2xl text-lg text-slate-600">
                            <span className="font-bold text-slate-900">SakhiAI</span> is your
                            trusted companion for filing complaints,
                            <br />
                            getting guidance, and staying safe anytime, anywhere.
                        </p>

                        {/* Buttons */}
                        <div className="z-20 mt-5 flex flex-col gap-8 sm:flex-row">
                            <button
                                onClick={() => navigate("/complaint")}
                                className="flex items-center gap-4 rounded-2xl border border-orange-400 px-7 py-2 shadow-lg hover:shadow-xl bg-[#f2d3c8]/80"
                            >
                                <span className="text-3xl">📋</span>
                                <span className="font-bold text-lg ">File a Complaint</span>
                                <ArrowRight className="h-15 w-10 pl-2 text-orange-500" />
                            </button>

                            <button
                                onClick={() => navigate("/chatbot")}
                                className="flex items-center gap-4 rounded-2xl border border-blue-300 bg-blue-100/80 px-7 py-2 shadow-lg hover:shadow-xl"
                            >
                                <span className="text-3xl">🤖</span>
                                <span className="font-bold text-[#0A1E5E] text-lg">
                                    AI Safety Assistant
                                </span>
                                <ArrowRight className="h-15 w-10 pl-2 text-blue-500" />
                            </button>
                        </div>

                        {/* Illustration */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/5 w-full max-w-7xl">
                            <img
                                src="/bg.png"
                                alt="Women Empowerment"
                                className="w-full object-contain opacity-90"
                            />
                        </div>
                    </div>
                </section>

                {/* Bot Features Section */}
                <section className="relative py-16 px-6 bg-gradient-to-b from-purple-300/50 to-purple-50 mx-30 m-10 rounded-2xl ">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Left - Bot Image Placeholder */}
                            <div className="flex justify-center lg:justify-start items-start">
                                <div className="relative w-100 h-70  flex items-center justify-center">
                                    <div className="text-7xl mb-2 rounded-3xl">
                                        <img
                                            src="/Bot.png"
                                            alt=""
                                            className="w-full object-contain opacity-90 overflow-hidden rounded-5xl"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right - Content */}
                            <div className="space-y-6">
                                {/* Heading */}
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                        We designed a bot for{" "}
                                        <span className="text-purple-600">your safety.</span>
                                    </h2>
                                    <p className="mt-3 text-lg text-slate-600 leading-relaxed">
                                        Our AI Safety Assistant is always here to listen, guide and
                                        support you. Report incidents, get instant help and access
                                        important resources{" "}
                                        <span className="text-pink-600">
                                            {" "}
                                            — because your safety is our priority.
                                        </span>
                                    </p>
                                </div>

                                {/* Feature Cards - 4 in a row */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                    {/* Report Anonymously */}
                                    <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/70 hover:bg-white transition-all">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                                            <Shield className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <p className="text-base font-semibold text-slate-900 leading-tight">
                                            Report Anonymously
                                        </p>
                                    </div>

                                    {/* Get Instant Guidance */}
                                    <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/70 hover:bg-white transition-all">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                                            <MessageCircle className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <p className="text-base font-semibold text-slate-900 leading-tight">
                                            Get Instant Guidance
                                        </p>
                                    </div>

                                    {/* 24x7 Confidential Support */}
                                    <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/70 hover:bg-white transition-all">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                                            <Lock className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <p className="text-base font-semibold text-slate-900 leading-tight">
                                            24x7 Confidential Support
                                        </p>
                                    </div>

                                    {/* You Are Not Alone */}
                                    <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/70 hover:bg-white transition-all">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                                            <Heart className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <p className="text-base font-semibold text-slate-900 leading-tight">
                                            You Are Not Alone
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Telegram Bot CTA */}
                <section className="relative py-15 px-6 bg-gradient-to-b from-purple-50 to-white mx-30 rounded-2xl ">
                    <div className="mx-auto max-w-6xl">
                        <div className="rounded-3xl bg-gradient-to-b from-purple-100/60 to-pink-100/40 backdrop-blur-base border border-purple-200/50 p-8 relative overflow-hidden">
                            {/* Decorative sparkles */}
                            <div className="absolute top-6 left-12 text-2xl opacity-30">
                                ✨
                            </div>
                            <div className="absolute bottom-8 right-12 text-2xl opacity-30">
                                ✨
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 items-center px-10">
                                <div className="w-80">
                                    <h3 className="text-lg md:text-3xl font-bold text-slate-900 mb-4 ">
                                        Click to connect with{" "} <br/>
                                        <span className="text-purple-600">Telegram Bot</span>
                                    </h3>
                                    <p className="text-xl text-slate-700">
                                        Get instant support and guidance in your Telegram app.
                                    </p>
                                </div>

                                <div className="flex justify-center lg:justify-end">
                                    <button className="inline-flex items-center gap-3 px-6 py-4 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-center justify-center w-15 h-15 bg-white rounded-full">
                                            <TelegramIcon size={40} color="blue" />
                                        </div>

                                        <span className="text-xl">Connect with Telegram Bot</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-20 px-6 bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500 mx-30 m-10 rounded-3xl">
                    <div className="mx-auto max-w-6xl space-y-12">
                        <div className="text-center space-y-4">
                            <p className="text-base uppercase flex justify-center items-center tracking-widest font-semibold text-white/80">
                                <Minus />The Process <Minus />
                            </p>
                            <h3 className="text-4xl md:text-5xl font-black text-white">
                                How Our <span className="text-purple-100">Bot Works</span>
                            </h3>
                        </div>

                        {/* Step Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                            <StepCard
                                num="1"
                                title="Start a conversation"
                                desc="Connect with our Telegram Bot."
                            />
                            <StepCard
                                num="2"
                                title="Share your concern"
                                desc="Tell us what happened or ask for help."
                            />
                            <StepCard
                                num="3"
                                title="Get instant support"
                                desc="Receive guidance, resources & next steps."
                            />
                            <StepCard
                                num="4"
                                title="Stay safe & informed"
                                desc="We're with you, always."
                            />
                        </div>
                    </div>
                </section>

                {/* NGO Partners Section - HORIZONTAL SCROLL CAROUSEL */}
                <section className="relative py-24 px-6 bg-gradient-to-b from-white via-orange-50/50 to-white mx-30 m-10 rounded-2xl ">
                    <div className="mx-auto max-w-7xl w-full">
                        {/* Header */}
                        <div className="text-center space-y-3 mb-16">
                            <p className="text-sm uppercase tracking-widest font-semibold text-orange-600">
                                Supported by
                            </p>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900">
                                Connect with{" "}
                                <span className="text-[#FF5A1F]">Women Safety NGOs</span>
                            </h3>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Partner organizations dedicated to women's safety and
                                empowerment
                            </p>
                        </div>

                        {/* Horizontal Scroll Container */}
                        <div className="relative">
                            {/* Left Gradient Fade */}
                            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

                            {/* Right Gradient Fade */}
                            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                            {/* Scroll Container */}
                            <div
                                className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
                                style={{
                                    scrollBehavior: "smooth",
                                    msOverflowStyle: "none",
                                    scrollbarWidth: "thin",
                                }}
                            >
                                {/* Jagori Card */}
                                <div className="flex-shrink-0 w-80 h-96 group cursor-pointer snap-center">
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{
                                                backgroundImage:
                                                    'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop")',
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                        </div>

                                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                            <div className="mb-4">
                                                <div className="inline-block px-3 py-1 rounded-full bg-orange-500/80 backdrop-blur-sm mb-3">
                                                    <p className="text-xs uppercase tracking-widest font-bold text-white">
                                                        NGO Partner
                                                    </p>
                                                </div>
                                                <h4 className="text-3xl font-black mb-2">Jagori</h4>
                                                <p className="text-sm text-white/90 leading-relaxed">
                                                    Women's safety and empowerment support
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Safecity Card */}
                                <div className="flex-shrink-0 w-80 h-96 group cursor-pointer snap-center">
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{
                                                backgroundImage:
                                                    'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=800&fit=crop")',
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                        </div>

                                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                            <div className="mb-4">
                                                <div className="inline-block px-3 py-1 rounded-full bg-orange-500/80 backdrop-blur-sm mb-3">
                                                    <p className="text-xs uppercase tracking-widest font-bold text-white">
                                                        NGO Partner
                                                    </p>
                                                </div>
                                                <h4 className="text-3xl font-black mb-2">Safecity</h4>
                                                <p className="text-sm text-white/90 leading-relaxed">
                                                    Safety mapping and awareness
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SNEHA Card */}
                                <div className="flex-shrink-0 w-80 h-96 group cursor-pointer snap-center">
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{
                                                backgroundImage:
                                                    'url("https://images.unsplash.com/photo-1543269865-cbdf26effbad?w=600&h=800&fit=crop")',
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                        </div>

                                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                            <div className="mb-4">
                                                <div className="inline-block px-3 py-1 rounded-full bg-orange-500/80 backdrop-blur-sm mb-3">
                                                    <p className="text-xs uppercase tracking-widest font-bold text-white">
                                                        NGO Partner
                                                    </p>
                                                </div>
                                                <h4 className="text-3xl font-black mb-2">SNEHA</h4>
                                                <p className="text-sm text-white/90 leading-relaxed">
                                                    Crisis intervention and support
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Nirbhaya Card */}
                                <div className="flex-shrink-0 w-80 h-96 group cursor-pointer snap-center">
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{
                                                backgroundImage:
                                                    'url("https://images.unsplash.com/photo-1552664730-1d95fbc8b3ff?w=600&h=800&fit=crop")',
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                        </div>

                                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                            <div className="mb-4">
                                                <div className="inline-block px-3 py-1 rounded-full bg-orange-500/80 backdrop-blur-sm mb-3">
                                                    <p className="text-xs uppercase tracking-widest font-bold text-white">
                                                        NGO Partner
                                                    </p>
                                                </div>
                                                <h4 className="text-3xl font-black mb-2">Nirbhaya</h4>
                                                <p className="text-sm text-white/90 leading-relaxed">
                                                    Legal empowerment and aid
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Maitri Card */}
                                <div className="flex-shrink-0 w-80 h-96 group cursor-pointer snap-center">
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{
                                                backgroundImage:
                                                    'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=800&fit=crop")',
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                        </div>

                                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                            <div className="mb-4">
                                                <div className="inline-block px-3 py-1 rounded-full bg-orange-500/80 backdrop-blur-sm mb-3">
                                                    <p className="text-xs uppercase tracking-widest font-bold text-white">
                                                        NGO Partner
                                                    </p>
                                                </div>
                                                <h4 className="text-3xl font-black mb-2">Maitri</h4>
                                                <p className="text-sm text-white/90 leading-relaxed">
                                                    Counselling and crisis care
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scroll Hint */}
                            <div className="flex justify-center mt-8">
                                <p className="text-base text-slate-500 font-semibold">
                                    ← Scroll to explore →
                                </p>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
            div::-webkit-scrollbar {
              height: 4px;
            }
            div::-webkit-scrollbar-track {
              background: transparent;
            }
            div::-webkit-scrollbar-thumb {
              background: #ff5a1f;
              border-radius: 10px;
            }
            div::-webkit-scrollbar-thumb:hover {
              background: #e84b0f;
            }
          `}</style>
                </section>

                {/* Final CTA Section */}
                <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-pink-50 mx-30 m-10 rounded-3xl ">
                    <div className="mx-auto max-w-6xl">
                        <div className="rounded-3xl bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 border border-purple-200 overflow-hidden">
                            <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16">
                                {/* Left Content */}
                                <div className="space-y-6">
                                    <p className="text-sm uppercase tracking-widest font-semibold text-purple-600">
                                        You deserve to be safe.
                                    </p>
                                    <h3 className="text-4xl md:text-5xl font-black text-slate-900">
                                        We're here for you,{" "}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                                            always.
                                        </span>
                                    </h3>
                                    <p className="text-lg text-slate-600">
                                        Save our bot and take the first step towards a safer you.
                                        Start the chat, get confidential help, and keep moving
                                        forward with confidence.
                                    </p>

                                    <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mt-4">
                                        <span>💬</span>
                                        Start Chat Now
                                    </button>
                                </div>

                                {/* Right Phone Mockup */}
                                <div className="flex justify-center items-center relative mx-30 m-10 rounded-3xl">
                                    <div className="relative w-60 h-96 bg-black rounded-3xl border-8 border-black shadow-2xl flex items-center justify-center overflow-hidden">
                                        {/* Phone Screen */}
                                        <div className="absolute inset-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-2xl flex flex-col items-center justify-center p-6">
                                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                                                <span className="text-4xl">🤖</span>
                                            </div>
                                            <p className="text-white font-bold text-center mb-2">
                                                Sakhi AI Bot
                                            </p>
                                            <p className="text-white/80 text-xs text-center mb-6">
                                                Always here to support you
                                            </p>
                                            <button className="px-6 py-2 rounded-full bg-purple-600 text-white font-semibold text-sm hover:bg-purple-700 transition-all">
                                                Start Chat
                                            </button>
                                        </div>

                                        {/* Notch */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute -bottom-8 right-12 text-4xl opacity-40">
                                        💕
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="py-12 px-6 bg-white">
                    <div className="mx-auto max-w-6xl text-center space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900">
                            Ready to take the first step?
                        </h3>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Connect with Sakhi AI today and join thousands of women who are
                            taking control of their safety.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => navigate("/chatbot")}
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-all"
                            >
                                Chat with Sakhi AI
                            </button>
                            <button
                                onClick={() => navigate("/complaint")}
                                className="px-8 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition-all"
                            >
                                File a Complaint
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;
