import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ComplaintIncident from '../components/ComplaintIncident'
import AdditionalDetails from '../components/AdditionalDetails'
import PreviewSubmit from '../components/PreviewSubmit'
import Navbar from '../components/Navbar'

const Anonymous = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    category: '',
    incidentDetails: '',
    incidentDate: '',
    incidentHour: '',
    incidentMinute: '',
    incidentAmPm: 'AM',
    incidentLocation: '',
    delayReason: '',
    additionalIncidentInfo: '',
    suspectName: '',
    environmentLocation: '',
    witnessPresent: '',
    witnessDetails: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      navigate('/complaint')
    }
  }

  return (
    <div className="min-h-screen bg-[#FEF7F2] text-slate-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-3xl bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-700">
                <span className="rounded-2xl bg-white p-3 text-lg text-violet-700 shadow-sm">📋</span>
                File an Anonymous Complaint
              </div>
              <h1 className="mt-6 text-4xl font-black text-slate-950 sm:text-5xl">
                Your identity will remain hidden.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Share only what you feel comfortable with. We are here to listen and help.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-[2rem]  bg-orange-50 overflow-hidden ">
              
                <img className=' w-full h-full object-cover' src="/girl.png" alt="" />
            </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            {['Complaint & Incident Details', 'Additional Details', 'Preview & Submit'].map((label, index) => (
              <div key={label} className="space-y-3">
                <div className={`rounded-3xl px-4 py-3 text-sm font-semibold ${step === index + 1 ? 'bg-violet-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {index + 1}. {label}
                </div>
                {step === index + 1 && (
                  <div className="h-2 rounded-full bg-violet-100" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            {step === 1 && <ComplaintIncident formData={formData} onChange={handleChange} />}
            {step === 2 && <AdditionalDetails formData={formData} onChange={handleChange} />}
            {step === 3 && <PreviewSubmit formData={formData} />}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="rounded-3xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              ← Back
            </button>

            <button
              type="button"
              onClick={step === 3 ? () => navigate('/completion') : handleNext}
              className="rounded-3xl bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-800"
            >
              {step === 3 ? 'Submit Complaint' : 'Save & Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Anonymous
