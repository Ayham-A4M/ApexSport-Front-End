import srcImage from "../functions/srcImage"
const OtherImages=({image,setImageNow})=>{
    return (
      <div className='w-[60px] h-[60px] border-[1px] cursor-pointer  flex justify-center items-center rounded-tl-[15px] rounded-br-[15px] rounded-[4px] border-slate-300' onClick={()=>{setImageNow(image)}}>
          <div className='w-fit h-fit p-[5px] border-[1px] border-black rounded-[2px]'>
              <img src={image} alt="productImage" />
          </div>
      </div>
    )
  }
  export default OtherImages