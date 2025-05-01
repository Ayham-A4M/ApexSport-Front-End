import { useState, useEffect } from "react";
import handleChangeInputFileValue from "./Functions/handleChangeInputFileValue";
import handleCreateNewProduct from "./Functions/handleCreateNewProduct";
import { BiSolidAddToQueue } from "react-icons/bi";
import Loader from "../components/Loader";
import axios from "axios";
import useGetEnviroment from "../hooks/useGetEnviroment";
import srcImage from "../functions/srcImage";
import handleEditProduct from "./Functions/handleEditProduct";
import CustomizePopUp from "./CustomizePopUp";
import { IoMdCloseCircle } from "react-icons/io";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'


function NewEditMangment({ productId }) {
    const schema = yup.object().shape({
        images: yup.array().required('Minimum one images allowed').max(5, 'Maximum of 5 images allowed'), // Optional: limit number of files
        productName: yup.string().required().max(20),
        brand: yup.string().required().max(25),
        price: yup.number().required('price field is required').min(1).max(9999),
        catagory: yup.string().required().max(20),
        weight: yup.number().required('weight field is required'),
        inStock: yup.number().required('inStock field is required').max(300),
        discountPercentage: yup.string().required().max(4),
        minInCart: yup.number().required('minimum in cart field is required').max(10),
        description: yup.string().required().max(1000),
    });
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = (data) => {
        const forHandle = { ...data, customize };
        console.log('for handle', forHandle);
        setSendingReq(true);
        productId ? handleEditProduct(forHandle, setSendingReq, imagesUrl, productId) : handleCreateNewProduct(forHandle, setSendingReq, setEmptyFields)
    }
    const [emptyFields, setEmptyFields] = useState(false);
    const [customizePopUp, setCustomizePopUp] = useState(false); // for the small popup that admin use it for customizing the product
    const [imagesUrl, setImagesUrl] = useState(null); //for display the images in brwoser
    const [customize, setCustomize] = useState([]); //storage customizing thats admin put 
    const [dataObject, setDataObject] = useState({
        images: [],     
    }) //data object use in storage data if admin click on edit and each value put like default value
    const { url } = useGetEnviroment();
    const [sendingReq, setSendingReq] = useState(false);
    const resetFields = () => {
        setDataObject({
            images: [],
         
        });
        setImagesUrl(null);
    }
    const handleDeleteCustom = (index) => {
        let newCustomize = [...customize];
        newCustomize = newCustomize.filter((ele, i) => i !== index);
        setCustomize(newCustomize);
    }

    useEffect(() => {
        if (emptyFields) {
            resetFields();
            setEmptyFields(false);
        }
    }, [emptyFields])

    useEffect(() => {
        const getProductInformation = async () => {
            const response = await axios.get(`${url}/api/product/?id=${productId}`);
            if (response.status < 300) {
                const ele = response.data;
                console.log(response.data.Images);
                setValue('images', ele.Images)
                setValue('productName', ele.ProductName)
                setValue('brand', ele.Brand)
                setValue('price', parseFloat(ele.Price).toFixed(3))
                setValue('catagory', ele.Catagory)
                setValue('weight', ele.Weight)
                setValue('inStock', ele.InStock)
                setValue('discountPercentage', ele.DiscountPercentage)
                setValue('minInCart', ele.MinInCart)
                setValue('description', ele.Description)

                setDataObject(
                    {
                        images: ele.Images,

                    }

                )
                setCustomize(ele.Custome);
                console.log('customize : ', ele.Custome);
            }
        }

        if (productId)
            getProductInformation();
    }, []); //this used if there id in browser path
    console.log(errors)



    return (

        <form action="" onSubmit={handleSubmit(onSubmit)} className="contact-form w-full flex flex-col gap-[40px]">

            <div className="flex w-full  gap-[50px] max-[650px]:flex-col max-[650px]:items-center">
                <div className="w-[48%] max-[650px]:w-[98%] flex flex-col gap-1">
                    <input {...register('productName')} type="text" placeholder="Product Name" className=" inputStyle" />
                    {errors.productName && <span className="text-red-500 text-[13px] font-light">{errors.productName.message}</span>}
                </div>
                <div className="w-[48%] max-[650px]:w-[98%] flex flex-col gap-1">
                    <input {...register('brand')} type="text" placeholder="Brand" className="inputStyle" />
                    {errors.brand && <span className="text-red-500 text-[13px] font-light">{errors.brand.message}</span>}
                </div>

            </div>
            <div className="flex w-full   gap-[50px] max-[650px]:flex-col  max-[650px]:items-center">
                <div className="w-[48%] max-[650px]:w-[98%] flex flex-col gap-1">
                    <input {...register('price')}  type="number" step="any" placeholder="Price In Dollar $" className="inputStyle" />
                    {errors.price && <span className="text-red-500 text-[13px] font-light">{errors.price.message}</span>}
                </div>
                <div className="w-[300px] max-[650px]:w-[98%] flex flex-col gap-1">
                    <select {...register('catagory')} defaultValue={'clothes'} className="inputStyle  cursor-pointer"  >
                        <optgroup>
                            <option value="clothes">clothes</option>
                            <option value="shoes">shoes</option>
                            <option value="equipment">equipment</option>
                            <option value="recovery">recovery</option>
                            <option value="sport bags">sport bags</option>
                            <option value="fitness watches">fitness watches</option>
                        </optgroup>
                    </select>
                    {errors.catagory && <span className="text-red-500 text-[13px] font-light">{errors.catagory.message}</span>}

                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex gap-[40px]  items-center">

                    <label htmlFor="images" className="px-[25px] cursor-pointer py-[8px] bg-[--main-blue]  text-slate-100 rounded-[4px]">Choose Images</label>
                    {
                        (imagesUrl && dataObject.images) &&
                        <div className="flex flex-row gap-[30px]">
                            {
                                imagesUrl.map((image, index) => (

                                    <div key={index} className="w-fit border-[2px] border-slate-200 rounded-[4px]">
                                        <img src={image} alt="" className="w-[100px] h-[100px] rounded-[4px]" />
                                    </div>
                                ))
                            }
                        </div>
                    }
                    {
                        (!imagesUrl && dataObject.images) &&
                        <div className="flex flex-row gap-[30px]">
                            {
                                dataObject.images.map((image, index) => (

                                    <div key={index} className="w-fit border-[2px] border-slate-200 rounded-[4px]">
                                        <img src={srcImage(image)} alt="" className="w-[100px] h-[100px] rounded-[4px]" />
                                    </div>
                                ))
                            }
                        </div>
                    }
                    <input type="file" id="images" multiple placeholder="Images" className="outline-none w-[48%] hidden max-[650px]:w-[98%] border-[4px] border-[--main-blue] rounded-[6px] py-[10px] pl-[10px]" onChange={(e) => {
                        handleChangeInputFileValue(e, setImagesUrl);
                        const files = Array.from(e.target.files);
                        setValue('images', files);
                    }} />
                </div>
                {errors.images && <span className="text-red-500 text-[13px] font-light">{errors.images.message}</span>}



            </div>
            <div className="flex w-full gap-[50px] max-[650px]:flex-col  max-[650px]:items-center">
                <div className="w-[30%] max-[650px]:w-[50%] flex flex-col gap-1">
                    <input  {...register('weight')} type="number" placeholder="Weight" min={1} className="inputStyle" />
                    {errors.weight && <span className="text-red-500 text-[13px] font-light">{errors.weight.message}</span>}

                </div>
                <div className="w-[30%] max-[650px]:w-[50%] flex flex-col gap-1">
                    <input  {...register('inStock')} type="number" min={1} placeholder="In Stock" className="inputStyle" />
                    {errors.inStock && <span className="text-red-500 text-[13px] font-light">{errors.inStock.message}</span>}

                </div>
                <div className="w-[30%] max-[650px]:w-[50%] flex flex-col gap-1">
                    <input  {...register('minInCart')} type="number" placeholder="Min In Cart" min={1} max={50} className=" inputStyle" />
                    {errors.minInCart && <span className="text-red-500 text-[13px] font-light">{errors.minInCart.message}</span>}

                </div>
                <div className="w-[30%] max-[650px]:w-[50%] flex flex-col gap-1">
                    <input  {...register('discountPercentage')} type="text" placeholder="Percentage Discount" min={0} max={100} className=" inputStyle" />
                    {errors.discountPercentage && <span className="text-red-500 text-[13px] font-light">{errors.discountPercentage.message}</span>}

                </div>

            </div>
            <div className="flex flex-col gap-[20px]">
                <span className="text-[17px] text-[--main-blue]">Customize (Option)</span>
                <div className=" w-full gap-[15px] flex items-center  max-[700px]:justify-center flex-wrap">
                    <span>Adding new Custome : </span>
                    <BiSolidAddToQueue className="text-[--main-blue] text-[30px] cursor-pointer hover:text-[#2c9b8c] duration-300" onClick={() => { setCustomizePopUp(true) }} />
                </div>
                {
                    customizePopUp &&
                    <CustomizePopUp setCustomize={setCustomize} setCustomizePopUp={setCustomizePopUp} />
                }
                <div className="customize flex flex-col gap-2">
                    {
                        customize.length > 0 &&
                        customize.map((ele, i) => (
                            <div className="w-fit flex items-center gap-[15px]" key={i} >
                                <div className=" flex items-center py-[5px] px-[10px] gap-[10px] w-[90%] max-w-[500px] overflow-clip flex-wrap border-[--main-blue] border-[2px] rounded-[4px]">
                                    <span className="text-[18px] font-medium text-[--main-blue]">{ele.customeName}: </span>
                                    {
                                        ele.options.length > 0 &&
                                        ele.options.map((e, index) => (
                                            <span className="text-slate-800 text-[16px]" key={index}>&#8226; {e.value}</span>
                                        ))

                                    }
                                </div>
                                <IoMdCloseCircle className="text-red-600 text-[20px] cursor-pointer" onClick={() => { handleDeleteCustom(i) }} />
                            </div>

                        ))
                    }
                </div>

            </div>

            <div className="w-full flex flex-col gap-[15px]">
                <textarea {...register('description')} defaultValue={dataObject.description} placeholder="Description" className="inputStyle w-full h-[280px]"></textarea>
                {errors.description && <span className="text-red-500 text-[13px] font-light">{errors.description.message}</span>}

            </div>
            <div className="w-full">
                <button disabled={sendingReq} type="submit" className=" w-full  flex justify-center py-[15px] font-bold text-[20px] duration-300 bg-[--main-blue] text-white border-[2px] border-white rounded-[6px] hover:bg-white hover:border-[--main-blue] hover:text-black"
                >{sendingReq ? <Loader /> : `${productId ? 'Edit' : 'Create'}`}</button>
            </div>

        </form>
    )
}

export default NewEditMangment