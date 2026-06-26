const PreviewSubmit = ({ formData, identityMode = false, stepNumber = 3, totalSteps = 3 }) => {
  return (
    <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Preview Your Complaint</h2>
          <p className="mt-2 text-sm text-slate-600">Review the details before submitting.</p>
        </div>
        <div className="rounded-2xl bg-violet-50 px-4 py-2 text-base font-semibold text-violet-700">
          Step {stepNumber} of {totalSteps}
        </div>
      </div>

      <div className={`grid gap-6 lg:grid-cols-3 ${identityMode ? 'lg:grid-cols-3' : 'lg:grid-cols-3'}`}>
        {identityMode && (
          <div className="space-y-4 rounded-[1.75rem] border border-sky-100 bg-sky-50 p-6">
            <h3 className="text-base font-semibold text-sky-700">Personal Details</h3>
            <div className="space-y-2 text-base text-slate-700">
              <p><span className="font-semibold">Name:</span> {formData.fullName || 'N/A'}</p>
              <p><span className="font-semibold">Mobile:</span> {formData.mobile || 'N/A'}</p>
              <p><span className="font-semibold">Email:</span> {formData.email || 'N/A'}</p>
              <p><span className="font-semibold">Address:</span> {formData.address || 'N/A'}</p>
              <p><span className="font-semibold">District:</span> {formData.district || 'N/A'}</p>
            </div>
          </div>
        )}

        <div className="space-y-4 rounded-[1.75rem] border border-violet-100 bg-violet-50 p-6">
          <h3 className="text-base font-semibold text-violet-700">Complaint & Incident Details</h3>
          <div className="space-y-2 text-base text-slate-700">
            <p><span className="font-semibold">Category:</span> {formData.category || 'N/A'}</p>
            <p><span className="font-semibold">Complaint:</span> {formData.incidentDetails || 'N/A'}</p>
            <p><span className="font-semibold">Date/Time:</span> {formData.incidentDate || 'N/A'} {formData.incidentHour}:{formData.incidentMinute} {formData.incidentAmPm}</p>
            <p><span className="font-semibold">Location:</span> {formData.incidentLocation || 'N/A'}</p>
            <p><span className="font-semibold">Additional Info:</span> {formData.additionalIncidentInfo || 'N/A'}</p>
          </div>
        </div>

        <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-base font-semibold text-slate-950">Suspect Details</h3>
          <div className="space-y-2 text-base text-slate-700">
            <p><span className="font-semibold">Suspect Name:</span> {formData.suspectName || 'N/A'}</p>
            <p><span className="font-semibold">Incident occurred:</span> {formData.environmentLocation || 'N/A'}</p>
            <p><span className="font-semibold">Witness present:</span> {formData.witnessPresent || 'N/A'}</p>
            <p><span className="font-semibold">Known witness:</span> {formData.witnessDetails || 'N/A'}</p>
          </div>
        </div>
      </div>

      <div className={`rounded-[2rem] border p-6 text-base text-slate-700 ${identityMode ? 'border-sky-100 bg-sky-50' : 'border-orange-100 bg-orange-50'}`}>
        {identityMode
          ? 'Your identity details are handled securely and shared only with authorised responders.'
          : 'Your identity will remain hidden. The information you provide is safe and confidential.'}
      </div>
    </div>
  )
}

export default PreviewSubmit
