export const handleDeleteItem = (id,cartNow,setCartNow) => {
    let arr = cartNow.filter((e) => (e.id != id));
    console.log(arr);
    localStorage.setItem('cart', JSON.stringify(arr));
    setCartNow(arr);
    return true;
}