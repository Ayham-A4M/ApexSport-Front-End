const SmallImage = ({picture,setPictureNow}) => {
    return (
        <div className="border-slate-800 max-[650px]:w-[50px] max-[650px]:h-[50px]  border-[1px] w-[100px] h-[100px] rounded-[8px]" onClick={()=>{setPictureNow(picture);
        }}>
            <img src={picture} alt="" className="aspect-square max-h-[100px]" />
        </div>
    )
}
export default SmallImage