import {
  FileText,
  Heart,
  MapPin,
  ShieldCheck,
  Shield,
  Users,
  Bell,
  Bot,
  CheckCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";

const features = [
  {
    title: "File a Complaint",
    desc: "Easily file your complaint and track the status in real-time.",
    icon: FileText,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    title: "AI Safety Assistant",
    desc: "Get instant guidance, safety tips, and answers to your concerns.",
    icon: Bot,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Nearby Safety",
    desc: "Find nearby police stations, hospitals, and help centers in one tap.",
    icon: MapPin,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "NGO Support",
    desc: "Connect with trusted NGOs working for women's safety and empowerment.",
    icon: Users,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-500",
  },
  {
    title: "SOS Alert",
    desc: "Send emergency alerts to your trusted contacts with one tap.",
    icon: Bell,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  {
    title: "Know Your Rights",
    desc: "Learn about your legal rights and the support available for you.",
    icon: CheckCircle,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];

const stats = [
  { value: "10K+", label: "Complaints Resolved", icon: Users,       iconColor: "text-violet-500" },
  { value: "5K+",  label: "Women Helped",        icon: ShieldCheck,  iconColor: "text-violet-500" },
  { value: "2K+",  label: "NGOs Connected",      icon: Users,        iconColor: "text-violet-500" },
  { value: "50K+", label: "Lives Impacted",      icon: Heart,        iconColor: "text-rose-400"   },
];

const benefits = [
  {
    title: "Safe & Secure",
    desc: "Your privacy and safety are our top priority.",
    icon: Shield,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    quote: "text-violet-200",
  },
  {
    title: "Always With You",
    desc: "Support and guidance anytime, anywhere.",
    icon: Heart,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-400",
    quote: "text-rose-200",
  },
  {
    title: "Trusted by Many",
    desc: "Thousands of women trust us for their safety.",
    icon: Users,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    quote: "text-orange-200",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#fdf9f6] text-slate-900 overflow-x-hidden">

        {/* ─────────────────────────────────────────
            HERO
        ───────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#fdf9f6] min-h-[520px]">
          {/* subtle orange radial at top */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[480px]"
            style={{
              background:
                "radial-gradient(ellipse 65% 50% at 60% 0%, rgba(255,100,30,0.10), transparent)",
            }}
          />

          {/* left leaf */}
          <div className="pointer-events-none absolute left-0 top-28 w-16 opacity-35 select-none">
            <svg viewBox="0 0 60 110" fill="none">
              <path d="M8 105 Q-8 55 25 15 Q42-2 50 8 Q32 38 16 75 Q12 88 8 105Z" fill="#86efac" />
              <path d="M8 105 Q28 65 46 25" stroke="#4ade80" strokeWidth="1" fill="none" />
            </svg>
          </div>

          {/* right leaf */}
          <div className="pointer-events-none absolute right-0 top-36 w-14 opacity-25 select-none">
            <svg viewBox="0 0 60 110" fill="none">
              <path d="M52 105 Q68 55 35 15 Q18-2 10 8 Q28 38 44 75 Q48 88 52 105Z" fill="#86efac" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-7xl px-8 pt-14 grid grid-cols-2 gap-0 items-end">

            {/* LEFT — text block */}
            <div className="pb-10 space-y-5 z-10">
              <p className="text-[14px] font-extrabold uppercase tracking-[0.32em] text-violet-600">
                About Us
              </p>
              <h1 className="text-[54px] font-black leading-[1.04] tracking-tight text-slate-950">
                We're here
                to make<br />
                <span className="text-orange-500">every woman</span><br />
                <span className="text-orange-500">safe</span> and strong.
              </h1>
              <p className="text-[18.5px] leading-[1.9] text-slate-500 max-w-[320px]">
                Sakhi AI is your trusted companion for safety, support,
                and empowerment. We use technology and empathy
                to build a safer world for every woman.
              </p>
              <Heart className="h-4 w-4 text-rose-300 fill-rose-300" />
            </div>

            {/* RIGHT — image area, flush bottom, no border/card */}
            <div className="relative flex justify-center items-end">
              {/* floating pink heart above image */}
              <Heart className="absolute top-4 left-1/2 -translate-x-1/2 h-5 w-5 text-rose-300 fill-rose-300 z-10" />

              {/* IMAGE — replace the inner div with <img src="/girl.png" … /> */}
              <div className="w-full h-[440px] rounded-t-3xl overflow-hidden bg-gradient-to-b from-rose-50 via-pink-50 to-orange-50 flex items-center justify-center">
                {/* ↓ swap this div for your actual image */}
                {/* <img src="/girl.png" alt="Sakhi AI" className="w-full h-full object-cover object-top" /> */}
                <div className="">
                  <img src="/girl.png" alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            FEATURES
        ───────────────────────────────────────── */}
        <section className="bg-white px-8 py-16">
          <div className=" max-w-7xl grid grid-cols-[220px_1fr] gap-10 items-start mx-40 m-10">

            {/* LEFT — label + heading + desc */}
            <div className="space-y-3 pt-2 flex-shrink-0 pl-4">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.4em] text-orange-500">
                Our Features
              </p>
              <h2 className="text-[38px] font-black leading-[1.08] text-slate-950">
                All the<br />
                <span className="text-orange-500">Support</span><br />
                You Need
              </h2>
              <p className="text-[16.5px] leading-[1.85] text-slate-500 pt-1 ">
                Powerful tools and resources
                designed to protect, support,<br />
                and empower women<br />
                anytime, anywhere.
              </p>
            </div>

            {/* RIGHT — 3-col × 2-row feature grid */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {/* circle icon */}
                    <div
                      className={`mb-4 flex items-center justify-center w-[46px] h-[46px] rounded-full ${f.iconBg}`}
                    >
                      <Icon className={`h-5 w-5 ${f.iconColor}`} strokeWidth={2} />
                    </div>
                    <h3 className="text-[22.5px] font-bold text-slate-900 mb-1.5">{f.title}</h3>
                    <p className="text-[14px] leading-[1.75] text-slate-500">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            OUR STORY  — image LEFT, text RIGHT
        ───────────────────────────────────────── */}
        <section className="bg-[#fdf9f6] px-8 py-16">
          <div className="mx-auto max-w-7xl grid grid-cols-2 gap-14 items-center">

            {/* LEFT — group image placeholder */}
            <div className="relative">
              <Heart className="absolute -top-2 left-6 h-5 w-5 text-rose-300 fill-rose-300 z-10" />
              {/* green leaf decorations */}
              <div className="absolute top-8 right-0 opacity-50 pointer-events-none">
                <svg width="30" height="44" viewBox="0 0 30 44" fill="none">
                  <path d="M4 42 Q-4 22 12 6 Q20-2 24 4 Q16 18 8 32 Q6 37 4 42Z" fill="#86efac" />
                </svg>
              </div>
              <div className="absolute bottom-6 right-6 opacity-40 pointer-events-none">
                <svg width="26" height="38" viewBox="0 0 30 44" fill="none">
                  <path d="M26 42 Q34 22 18 6 Q10-2 6 4 Q14 18 22 32 Q24 37 26 42Z" fill="#86efac" />
                </svg>
              </div>

              {/* IMAGE — replace inner div with <img src="/girls-group.png" … /> */}
              <div className="w-full h-[380px] rounded-3xl overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 flex items-center justify-center">
                {/* <img src="/girls-group.png" alt="Women group" className="w-full h-full object-contain" /> */}
                <div className="flex flex-col items-center gap-2 text-slate-300">
                  <img src="/bg.png" alt="" />
                </div>
              </div>
            </div>

            {/* RIGHT — text */}
            <div className="space-y-5">
              <p className="text-[13px] font-extrabold uppercase tracking-[0.4em] text-orange-500">
                Our Story
              </p>
              <h2 className="text-[38px] font-black leading-[1.1] tracking-tight text-slate-950">
                Empowering Women,<br />
                Building a{" "}
                <span className="text-orange-500">Safer Future</span>
              </h2>
              <p className="text-[17.5px] leading-[1.9] text-slate-600">
                Sakhi AI was born from a simple belief — every woman
                deserves to feel safe, respected, and empowered.
                We combine technology with compassion to break barriers,
                create awareness, and ensure help is always just a tap away.
              </p>
              <p className="text-[16.5px] leading-[1.9] text-slate-600">
                Together, we can build a society where every woman
                can live, learn, and lead fearlessly.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            STATS BAR
        ───────────────────────────────────────── */}
        <section className="bg-[#fdf9f6] px-8 pb-12">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="grid grid-cols-4 divide-x divide-slate-100">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="flex items-center gap-4 px-10 py-7">
                      <div
                        className={`flex-shrink-0 w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center ${s.iconColor}`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-[22px] font-black text-slate-950 leading-tight">{s.value}</p>
                        <p className="text-[11.5px] text-slate-500 leading-tight mt-0.5">{s.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            WHY CHOOSE SAKHI AI
        ───────────────────────────────────────── */}
        <section className="bg-white px-8 pt-8 pb-24">
          <div className="mx-auto max-w-7xl">

            {/* heading */}
            <div className="text-center mb-12">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.42em] text-violet-600 mb-3">
                Happy Users
              </p>
              <h2 className="text-[44px] font-black tracking-tight text-slate-950">
                Why Choose <span className="text-orange-500">Sakhi AI</span>
              </h2>
            </div>

            {/* 3 equal benefit cards in ONE row */}
            <div className="grid grid-cols-3 gap-6">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="relative rounded-3xl border border-slate-100 bg-white pt-10 pb-14 px-10 text-center overflow-hidden shadow-sm"
                  >
                    {/* decorative quote mark bottom-left */}
                    <span
                      className={`pointer-events-none select-none absolute bottom-4 left-5 text-6xl font-black leading-none ${b.quote}`}
                    >
                      ❝
                    </span>

                    <div
                      className={`mx-auto mb-5 w-14 h-14 flex items-center justify-center rounded-2xl ${b.iconBg} ${b.iconColor}`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-[20px] font-bold text-slate-950 mb-3">{b.title}</h3>
                    <p className="text-[15px] leading-[1.75] text-slate-500">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default About;
