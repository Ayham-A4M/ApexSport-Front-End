const prepareJsonProductInformation=(data)=>{
    const jsonStringify = JSON.stringify({
        productName: data.productName,
        price: data.price,
        catagory: data.catagory,
        brand: data.brand,
        description: data.description,
        weight: data.weight,
        inStock: data.inStock,
        minInCart: data.minInCart,
        custome:data.customize,
        discountPercentage: data.discountPercentage,
        createdAt: `${new Date()}`,
    });
    return jsonStringify;
}
export default prepareJsonProductInformation