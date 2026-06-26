import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { UserCircle2 } from 'lucide-react'
import { ArrowRight } from "lucide-react";

const Identity = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#FEF7F2] text-slate-900">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-3xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700">
                <span className="rounded-2xl bg-white p-3 text-lg text-sky-700 shadow-sm"><UserCircle2 /></span>
                Report with Your Identity
              </div>
              <h1 className="mt-6 text-4xl font-black text-slate-950 sm:text-5xl">
                Help us help you faster.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Provide your name and contact details so authorities can update you about the complaint status.
              </p>
            </div>
            <div className="rounded-[2rem] bg-sky-50 overflow-hidden">
              <img className="w-full h-full object-cover" src="/girl.png" alt="Report with identity" />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Next steps</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            You can now continue with a detailed report form where your identity will be available only to authorised responders.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold">What happens next?</h3>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Provide your details for better assistance.</li>
                <li>Receive updates on case progress.</li>
                <li>Authorities can contact you if needed.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold">Your privacy</h3>
              <p className="mt-2 text-slate-600">
                Your personal details are handled securely and shared only with authorised teams working your complaint.
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={() => navigate('/complaint')}
              className="rounded-3xl bg-slate-600 px-4 py-2 text-lg font-semibold text-white transition hover:bg-slate-950 w-40"
            >
              Back
            </button>
            <button
              onClick={() => navigate('/identityreporting')}
              className="rounded-3xl flex items-center justify-center bg-sky-600 px-4 py-2 text-lg font-semibold text-white transition hover:bg-slate-950 w-40"
            >
              I Accept
              <ArrowRight className="h-10 w-8 pl-2 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Identity
