import OtherImages from "./OtherImages"
import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuid } from 'uuid'
import srcImage from "../functions/srcImage";
const ImageSection = ({ images }) => {
    const [imageNow, setImageNow] = useState(srcImage(images[0]));
    useEffect(()=>{
        setImageNow(srcImage(images[0]))
    },[images])
    return (
        <div className="imagesSection w-[40%]">
            <div className='flex  flex-row gap-[10px] max-[650px]:flex-col max-[650px]:gap-[15px] items-center justify-center h-[100%]'>
                <div className="mainImage w-full min-w-[95%] flex justify-center ">
                    <div className="w-fit">
                        <img src={imageNow} className='w-full rounded-[3px] max-w-[350px] aspect-square' alt="mainImage" />
                    </div>
                </div>
                <div className='otherImages flex flex-col max-[650px]:justify-center max-[650px]:flex-row gap-[30px] w-full flex-wrap justify-center'>
                    {
                        images.map((image) => (
                            <OtherImages image={srcImage(image)} setImageNow={setImageNow} key={uuid()} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default ImageSection