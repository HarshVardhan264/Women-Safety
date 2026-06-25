import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { NotebookPen  } from "lucide-react";

const ComplaintPage = () => {
  return (
    <div className="min-h-screen bg-[#FEF7F2] text-slate-900">
      <Navbar />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-8">
        <section className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/50 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-6 py-2 text-sm font-semibold text-orange-700 ring-1 ring-orange-100">
                <span><NotebookPen  className="h-10 w-8  text-orange-500" /></span>
                File a Complaint
              </div>
              <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                Your safety matters. We’re here to listen and help.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                This portal helps you report cybercrime complaints with safety, privacy, and clear guidance every step of the way.
              </p>
            </div>

            <div className="rounded-[2rem]  bg-orange-50 overflow-hidden ">
              
                <img className=' w-full h-full object-cover' src="/girl.png" alt="" />
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Terms and Conditions</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              This portal is an initiative of Government of India to facilitate victims/complainants to report cyber crime complaints online.
            </p>
            <p>
              This portal caters to complaints pertaining to cyber crimes only with special focus on cyber crimes against women and children.
            </p>
            <p>
              Complaints reported on this portal are dealt by law enforcement agencies/police based on the information available in the complaints.
            </p>
            <p>
              It is imperative to provide correct and accurate details while filing complaint for prompt action.
            </p>
            <p>
              Please contact local police in case of an emergency or for reporting crimes other than cyber crimes.
            </p>
            <p className="font-semibold text-slate-900">
              National police helpline number is 112. National women helpline number is 181 and Cyber Crime Helpline is 1930.
            </p>
          </div>
          <div className="mt-8 flex items-start gap-4 rounded-3xl border border-orange-100 bg-orange-50/80 p-6">
            <input id="agree" type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-300 text-orange-500 focus:ring-orange-400" />
            <label htmlFor="agree" className="text-sm leading-7 text-slate-700">
              I have read and agree to the above terms and conditions.
            </label>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-orange-200 bg-orange-50 p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-3xl text-orange-600 shadow-sm">
                👤
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-950">Report Anonymously</h3>
                <p className="text-sm text-slate-600">Your identity will remain hidden.</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• Your identity will remain hidden</li>
              <li>• No personal details required</li>
              <li>• Track your complaint using a unique ID</li>
            </ul>
            <button className="mt-6 w-full rounded-3xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
              Continue Anonymously →
            </button>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-3xl text-sky-600 shadow-sm">
                🧑‍💼
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-950">Report with Your Identity</h3>
                <p className="text-sm text-slate-600">Provide your details for better assistance.</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• Provide your details for better assistance</li>
              <li>• Receive updates on your complaint</li>
              <li>• Authorities can contact you if needed</li>
            </ul>
            <button className="mt-6 w-full rounded-3xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
              Continue with My Details →
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ComplaintPage
