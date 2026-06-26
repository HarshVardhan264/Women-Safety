import Navbar from '../components/Navbar'
import { CheckCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Completion = () => {
    const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#FEF7F2] text-slate-900">
      <Navbar />
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl items-center justify-center px-6 py-12">
        <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-lg shadow-slate-200/40">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-3xl font-black text-slate-950 sm:text-4xl">Your Complaint has been Submitted Successfully!</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Thank you for reporting. Your complaint has been recorded and will be reviewed by our team.
          </p>
          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-slate-200 bg-slate-50 p-6 text-left text-slate-800">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Your Complaint ID</p>
            <p className="mt-3 text-3xl font-extrabold text-slate-950">WS-003</p>
            <p className="mt-2 text-sm text-slate-600">Please note down your Complaint ID to track the status of your complaint.</p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => navigate('/track')}
              className="rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-950"
            >
              Track Complaint Status
            </button>
            <button
              onClick={() => navigate('/')}
              className="rounded-3xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Go to Home
            </button>
          </div>
          <p className="mt-8 text-sm text-slate-500">Your information is safe and secure with us.</p>
        </div>
      </div>
    </div>
  )
}

export default Completion
