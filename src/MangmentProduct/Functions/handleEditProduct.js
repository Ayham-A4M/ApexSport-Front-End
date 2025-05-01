import axios from "axios"
import imageCompression from "browser-image-compression";
import toast from "react-hot-toast";
import useGetEnviroment from "../../hooks/useGetEnviroment";
import prepareJsonProductInformation from "./prepareJsonProductInformation";
const { url } = useGetEnviroment();
const handleEditProduct = async (data, setSendingReq, imagesUrl, productId) => {

    const imageOptions = {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
        useWebWorker: true,
        fileType: 'image/webp',
    } // options for images uploading

    const forSend = new FormData();
  

    if (imagesUrl && imagesUrl.length > 0) {
        // if imagesUrl has value thats mean the admin is choose the images from device that mean we should edit it to upload to backend

        for (let i = 0; i < data.images.length; i++) {
            const compressedFile = await imageCompression(data.images[i], imageOptions);
            const file = new File([compressedFile], compressedFile.name, { type: compressedFile.type, lastModified: Date.now() }); //convert it to file 
            forSend.append('images', file);
        }

    }

    forSend.append('productData', prepareJsonProductInformation(data));
    forSend.append('productId', productId);

    // sending request :: 
    try {
        // end of prepare data to send it
        const res = await axios.post(`${url}/api/editProduct`, forSend, { withCredentials: true });
        if (res.status < 300) {
            toast.success(res.data.msg);
            
        }
    } catch (err) {
        toast.error(err.response.data.message)

    } finally {
        setSendingReq(false);
        
    }
    // ending sending request
}

export default handleEditProduct