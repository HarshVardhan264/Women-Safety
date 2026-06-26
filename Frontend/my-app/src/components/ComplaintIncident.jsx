const ComplaintIncident = ({ formData, onChange, step = 1, totalSteps = 3 }) => {
  return (
    <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Complaint & Incident Details</h2>
          <p className="mt-2 text-sm text-slate-600">Tell us what happened so we can help you properly.</p>
        </div>
        <div className="rounded-2xl bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
          Step {step} of {totalSteps}
        </div>
      </div>

      <div className="grid gap-6">
        <label className="space-y-2 text-base text-slate-700">
          <span className="font-medium">Category of Complaint *</span>
          <select
            name="category"
            value={formData.category}
            onChange={onChange}
            className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          >
            <option value="">Select category</option>
            <option value="harassment">Cyber Harassment</option>
            <option value="stalking">Cyber Stalking</option>
            <option value="fake-profile">Fake Profile</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="space-y-2 text-base text-slate-700">
          <span className="font-medium">Complaint / Incident Details *</span>
          <textarea
            name="incidentDetails"
            value={formData.incidentDetails}
            onChange={onChange}
            rows={5}
            placeholder="Please describe what happened in detail."
            className="w-full mt-2 rounded-3xl border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          />
        </label>

        <div className="grid gap-4 md:grid-cols-[1fr_auto_auto_auto]">
          <label className="space-y-2 text-base text-slate-700">
            <span className="font-medium">Date & Time of Incident *</span>
            <input
              type="date"
              name="incidentDate"
              value={formData.incidentDate}
              onChange={onChange}
              className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />
          </label>
          <label className="space-y-2 text-base text-slate-700">
            <span className="font-medium">Hour</span>
            <input
              type="number"
              name="incidentHour"
              value={formData.incidentHour}
              onChange={onChange}
              placeholder="HH"
              className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />
          </label>
          <label className="space-y-2 text-base text-slate-700">
            <span className="font-medium">Minutes</span>
            <input
              type="number"
              name="incidentMinute"
              value={formData.incidentMinute}
              onChange={onChange}
              placeholder="MM"
              className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />
          </label>
          <label className="space-y-2 text-base text-slate-700">
            <span className="font-medium">AM/PM</span>
            <select
              name="incidentAmPm"
              value={formData.incidentAmPm}
              onChange={onChange}
              className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </label>
        </div>

        <label className="space-y-2 text-base text-slate-700">
          <span className="font-medium">Where did the incident occur? *</span>
          <select
            name="incidentLocation"
            value={formData.incidentLocation}
            onChange={onChange}
            className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          >
            <option value="">Select place</option>
            <option value="social_media">Social Media</option>
            <option value="email">Email</option>
            <option value="messaging_app">Messaging App</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="space-y-2 text-base text-slate-700">
          <span className="font-medium">Reason for delay in reporting (if any)</span>
          <input
            type="text"
            name="delayReason"
            value={formData.delayReason}
            onChange={onChange}
            placeholder="Enter reason"
            className="w-full mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          />
        </label>

        <label className="space-y-2 text-base text-slate-700">
          <span className="font-medium">Please provide any additional information about the incident *</span>
          <textarea
            name="additionalIncidentInfo"
            value={formData.additionalIncidentInfo}
            onChange={onChange}
            rows={4}
            placeholder="Write here..."
            className="w-full mt-2 rounded-3xl border border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          />
          <div className="text-right text-xs text-slate-400">Maximum 1500 characters allowed</div>
        </label>
      </div>
    </div>
  )
}

export default ComplaintIncident
