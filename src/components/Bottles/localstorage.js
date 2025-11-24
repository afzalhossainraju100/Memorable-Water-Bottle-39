const getCartFromLs = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLS= cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToCardLS = id =>{
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id]; 

    saveCartToLS(newCart);
}

export {getCartFromLs as getStoredCart, addItemToCardLS as addToStoredCart};