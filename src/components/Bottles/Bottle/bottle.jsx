import React from 'react';
import "./bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  console.log(bottle);
  const { img, name, price, stock } = bottle;
  return (
    <div className="card">
      <img className="bottle-image" src={img} alt={name} />
      <div className="bottle-name-price">
        <h4>{name}</h4>
        <p className="price">${price}</p>
      </div>
      <p className="stock">{stock} remaining</p>
      <button onClick={() => handleAddToCart(bottle)} className="button-buy">
        Buy Now
      </button>
    </div>
  );
};

export default Bottle;