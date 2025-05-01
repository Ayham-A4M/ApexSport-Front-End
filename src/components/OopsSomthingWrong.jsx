import server_down from '../assets/server-down.svg'

const OopsSomthingWrong = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] w-full">
        <span className="text-[35px] text-[--main-blue] font-normal text-center">Ooops,something went wrong</span>
        <div className=' w-[250px] aspect-square'>
                <img src={server_down} alt="serverDown" className='w-full object-cover'/>
        </div>
    </div>
  )
}

export default OopsSomthingWrong