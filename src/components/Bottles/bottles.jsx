import { use, useState} from "react";
import Bottle from "./Bottle/bottle";
import "./bottles.css";

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);
  const bottles = use(bottlesPromise);

  const handleAddToCart = (bottle) => {
    // console.log("bottle added", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  }

//   console.log(bottles);

  return (
    <div>
      <h3>Bottles:{bottles.length}</h3>
      <p>AddToCart: {cart.length}</p>
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
