const StatCard = ({ value, label }) => {
  return (
    <div className="rounded-3xl bg-slate-50 p-6 text-center ">
      <p className="text-4xl font-black text-orange-500">{value}</p>
      <p className="mt-3 text-sm text-slate-600 ">{label}</p>
    </div>
  )
}

export default StatCard
