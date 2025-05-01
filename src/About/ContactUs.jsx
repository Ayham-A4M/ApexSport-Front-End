const ContactUs = () => {
    const regexPhone=/\d/
    return (
        
        <div>
            <form action="" className="contact-form w-full flex flex-col gap-[40px]">
                <div className="flex w-full  gap-[50px] max-[650px]:flex-col max-[650px]:items-center">
                    <input required type="text" placeholder="First Name" className="outline-none w-[48%] max-[650px]:w-[98%] border-[2px] border-[--main-blue] rounded-[6px] py-[10px] pl-[10px]" />
                    <input required type="text" placeholder="Last Name" className="outline-none w-[48%] max-[650px]:w-[98%] border-[2px] border-[--main-blue] rounded-[6px] py-[10px] pl-[10px]" />
                </div>
                <div className="flex w-full gap-[50px] max-[650px]:flex-col  max-[650px]:items-center">
                    <input required type="email" placeholder="Email" className="outline-none w-[48%] max-[650px]:w-[98%] border-[2px] border-[--main-blue] rounded-[6px] py-[10px] pl-[10px]" />
                    <input  required type="tel" placeholder="Phone Number: 123-123-1234 " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="outline-none w-[48%] max-[650px]:w-[98%] border-[2px] border-[--main-blue] rounded-[6px] py-[10px] pl-[10px]" />
                </div>
                <div className="w-full">
                    <textarea required placeholder="Message" className="outline-none bg-[rgb(239, 239, 239)] w-full h-[350px] border-[2px] border-[--main-blue] rounded-[6px] py-[10px] pl-[10px]"></textarea>
                </div>
                <div className="w-full">
                    <button className=" w-full py-[15px] font-bold text-[20px] duration-300 bg-[--main-blue] text-white border-[2px] border-white rounded-[6px] hover:bg-white hover:border-[--main-blue] hover:text-black">Send</button>
                </div>
            </form>
        </div>
    )
}
export default ContactUs    