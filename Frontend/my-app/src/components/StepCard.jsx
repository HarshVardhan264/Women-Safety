const StepCard = ({ num, title, desc }) => {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm ">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
        {num}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 ">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 ">{desc}</p>
    </div>
  )
}

export default StepCard
