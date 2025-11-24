const getCartFromLs = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItemToCardLS = (id) => {
  const cart = getCartFromLs();
  const newCart = [...cart, id];

  saveCartToLS(newCart);
};

const removeItemFromCartLS = (id) => {
  const cart = getCartFromLs();
  const index = cart.indexOf(id);
  if (index > -1) {
    const newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    saveCartToLS(newCart);
  }
};

export {
  getCartFromLs as getStoredCart,
  addItemToCardLS as addToStoredCart,
  removeItemFromCartLS as removeFromStoredCart,
};
