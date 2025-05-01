
const ImageSlide = ({imageSrc}) => {
    return (
        <div className="image">
            <img src={imageSrc} className="w-full  aspect-[16/9]  min-[991px]:aspect-[9/3]  object-fill " />
        </div>
    )
}

export default ImageSlide
