
export const InputAddress = ({ placeholder, setAddressState, errorsFields }) => {
  return (
    <div className="flex flex-col gap-[5px] w-[48%] ">
      <input type="text" placeholder={placeholder} className="py-[3px] w-full border-black placeholder:text-slate-600 placeholder:font-semibold   pl-[10px]  outline-none border-2 rounded-[4px] " onChange={(e) => setAddressState(e.target.value)} />
      {
        errorsFields[placeholder] ? <p className="text-[11px] text-red-600 ">{errorsFields[placeholder]}</p> : false
      }
    </div>
  )
}
