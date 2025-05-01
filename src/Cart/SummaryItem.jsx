function SummaryItem({name,value}) {
  return (
    <div className="flex justify-between items-center text-slate-200 border-b-2 border-slate-200 py-[10px]">
        <span>{name}</span>
        <span>{value}</span>
    </div>
  )
}

export default SummaryItem