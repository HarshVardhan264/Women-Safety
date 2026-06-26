const AdditionalDetails = ({ formData, onChange, step = 2, totalSteps = 3 }) => {
  return (
    <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Additional Details</h2>
          <p className="mt-2 text-sm text-slate-600">Share extra context and suspect information if you know it.</p>
        </div>
        <div className="rounded-2xl bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
          Step {step} of {totalSteps}
        </div>
      </div>

      <div className="grid gap-7 md:grid-cols-2">  
        <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 ">
          <h3 className="text-lg font-semibold text-violet-700">Incident Environment</h3>
          <label className="space-y-2 text-base text-slate-700 mb-5 ">
            <span className="mb-2">Where did the incident occur? *</span>
            <select
              name="environmentLocation"
              value={formData.environmentLocation}
              onChange={onChange}
              className="w-full mt-3 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            >
              <option value="">Select place</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </label>
          <label className="space-y-2 text-base text-slate-700 mt-5 ">
            <span className="mb-2">Was anyone else present? (Optional)</span>
            <select
              name="witnessPresent"
              value={formData.witnessPresent}
              onChange={onChange}
              className="w-full mt-3 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <label className="space-y-2 text-base text-slate-700 mt-5 ">
            <span>Suspect Name (if you know)</span>
            <input
              type="text"
              name="suspectName"
              value={formData.suspectName}
              onChange={onChange}
              placeholder="Enter suspect name"
              className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />
          </label>
          <label className="space-y-2 text-base text-slate-700">
            <span>Any known witness? (Optional)</span>
            <input
              type="text"
              name="witnessDetails"
              value={formData.witnessDetails}
              onChange={onChange}
              placeholder="Enter details (if any)"
              className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />
          </label>
        </div>

        <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-violet-700">Additional Information</h3>
          <p className="text-base text-slate-600">Upload any evidence you have. Max 10 MB per file.</p>
          <div className="rounded-3xl border border-dashed border-violet-200 bg-violet-50 p-6 text-center text-sm text-slate-600">
            <div className="mb-4">Drag & drop files here</div>
            <button className="rounded-full bg-violet-700 px-5 py-2 text-base font-semibold text-white transition hover:bg-violet-800">
              Choose Files
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionalDetails
