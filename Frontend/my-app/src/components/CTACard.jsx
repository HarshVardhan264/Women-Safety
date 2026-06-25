const CTACard = ({ icon, label }) => {
  return (
    <div className="flex cursor-pointer items-center gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50 ">
      <span className="text-2xl">{icon}</span>
      <span>{label}</span>
      <span className="ml-auto text-orange-500">→</span>
    </div>
  )
}

export default CTACard
