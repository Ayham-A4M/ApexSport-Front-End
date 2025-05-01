const handleChangeInputFileValue = (e,setImagesUrl) => {

    const files = Array.from(e.target.files);

    const imagesUrls = files.map((file) => (
        URL.createObjectURL(file)
        // here we create url object files to access to picture from the website because it blocked the access to local and load directly
    ))

    setImagesUrl(imagesUrls);
}
export default handleChangeInputFileValue