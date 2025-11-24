import { use, useState } from "react";
import Bottle from "./Bottle/bottle";
import "./bottles.css";
import {
  addToStoredCart,
  removeFromStoredCart,
  getStoredCart,
} from "./localstorage";
import Cart from "./Cart/cart";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);

  // Initialize cart from localStorage (stored IDs) by mapping IDs to bottle
  // objects. We initialize during render because `use(bottlesPromise)` will
  // suspend until bottles are available (when used inside a Suspense
  // boundary), so `bottles` should be available here.
  const [cart, setCart] = useState(() => {
    try {
      const storedIds = getStoredCart();
      if (!storedIds || !bottles || bottles.length === 0) return [];
      return storedIds
        .map((id) => bottles.find((b) => b.id === id))
        .filter(Boolean);
    } catch {
      return [];
    }
  });

  const handleAddToCart = (bottle) => {
    // console.log("bottle added", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToStoredCart(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    // remove first occurrence of the bottle with matching id
    const index = cart.findIndex((b) => b.id === id);
    if (index > -1) {
      const newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
      setCart(newCart);
      removeFromStoredCart(id);
    }
  };

  //   console.log(bottles);

  return (
    <div>
      <h3>Bottles:{bottles.length}</h3>
      <p>AddToCart: {cart.length}</p>
      <Cart cart={cart} onRemove={handleRemoveFromCart}></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
