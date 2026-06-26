import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ComplaintIncident from '../components/ComplaintIncident'
import AdditionalDetails from '../components/AdditionalDetails'
import PreviewSubmit from '../components/PreviewSubmit'

const IdentityReport = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    state: '',
    district: '',
    policeStation: '',
    address: '',
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
    if (step < 4) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      navigate('/identity')
    }
  }

  return (
    <div className="min-h-screen bg-[#FEF7F2] text-slate-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-3xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700">
                <span className="rounded-2xl bg-white p-3 text-lg text-sky-700 shadow-sm">👤</span>
                File a Complaint with Your Identity
              </div>
              <h1 className="mt-6 text-4xl font-black text-slate-950 sm:text-5xl">
                Personal details first, then incident information.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Start with your contact information, then continue to complaint details and evidence.
              </p>
            </div>
            <div className="rounded-[2rem] bg-sky-50 overflow-hidden">
              <img className="w-full h-full object-cover" src="/girl.png" alt="Report with identity" />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-sm">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              'Personal Details',
              'Complaint & Incident Details',
              'Additional Details',
              'Preview & Submit',
            ].map((label, index) => (
              <div key={label} className="space-y-3">
                <div className={`rounded-3xl px-4 py-3 text-sm font-semibold ${step === index + 1 ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {index + 1}. {label}
                </div>
                {step === index + 1 && <div className="h-2 rounded-full bg-sky-100" />}
              </div>
            ))}
          </div>

          <div className="mt-8">
            {step === 1 && <PersonalDetails formData={formData} onChange={handleChange} />}
            {step === 2 && <ComplaintIncident formData={formData} onChange={handleChange} step={2} totalSteps={4} />}
            {step === 3 && <AdditionalDetails formData={formData} onChange={handleChange} step={3} totalSteps={4} />}
            {step === 4 && <PreviewSubmit formData={formData} identityMode stepNumber={4} totalSteps={4} />}
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
              onClick={step === 4 ? () => alert('Complaint submitted!') : handleNext}
              className="rounded-3xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              {step === 4 ? 'Submit Complaint' : 'Save & Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const PersonalDetails = ({ formData, onChange }) => {
  return (
    <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Personal Details</h2>
          <p className="mt-2 text-sm text-slate-600">Provide your contact information to receive updates.</p>
        </div>
        <div className="rounded-2xl bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">Step 1 of 4</div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <label className="space-y-2 mb-10 text-base text-slate-700">
          <span className="font-medium ">Full Name</span>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={onChange}
            placeholder="Enter your full name"
            className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          />
        </label>

        <label className="space-y-2 text-base text-slate-700">
          <span className="font-medium mb-5 ">Mobile Number</span>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={onChange}
            placeholder="Enter 10 digit mobile number"
            className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          />
        </label>

        <label className="space-y-2 text-base text-slate-700">
          <span className="font-medium mb-5 ">Email ID</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Enter your email"
            className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          />
        </label>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <label className="space-y-2 text-base text-slate-700">
          <span className="font-medium ">State</span>
          <select
            name="state"
            value={formData.state}
            onChange={onChange}
            className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select state</option>
            <option value="delhi">Delhi</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="karnataka">Karnataka</option>
          </select>
        </label>

        <label className="space-y-2 text-base text-slate-700">
          <span className="font-medium">District</span>
          <select
            name="district"
            value={formData.district}
            onChange={onChange}
            className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select district</option>
            <option value="north_delhi">North Delhi</option>
            <option value="south_delhi">South Delhi</option>
          </select>
        </label>

        <label className="space-y-2 text-base text-slate-700">
          <span className="font-medium">Police Station (Optional)</span>
          <select
            name="policeStation"
            value={formData.policeStation}
            onChange={onChange}
            className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select police station</option>
            <option value="cyber_cell">Cyber Cell, Delhi</option>
            <option value="central_ps">Central Police Station</option>
          </select>
        </label>
      </div>

      <label className="space-y-2 text-base text-slate-700">
        <span className="font-medium">Address (Optional)</span>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={onChange}
          placeholder="Enter your address"
          className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
        />
      </label>
    </div>
  )
}

export default IdentityReport
