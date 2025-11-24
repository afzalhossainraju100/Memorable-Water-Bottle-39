import React from "react";
import "./cart.css";

const Cart = ({ cart = [], onRemove }) => {
  // Aggregate quantities by id so duplicates are displayed as quantity
  const itemsById = cart.reduce((acc, b) => {
    if (!b) return acc;
    const id = b.id;
    if (!acc[id]) acc[id] = { ...b, qty: 0 };
    acc[id].qty += 1;
    return acc;
  }, {});

  const items = Object.values(itemsById);
  const total = items.reduce((sum, it) => sum + (it.price || 0) * it.qty, 0);

  return (
    <aside className="cart-panel" aria-label="Shopping cart">
      <div className="cart-header">
        <h4 className="cart-title">Your Cart</h4>
        <div className="cart-count">
          {cart.length} item{cart.length !== 1 ? "s" : ""}
        </div>
      </div>

      <div className="cart-content">
        {items.length === 0 ? (
          <div className="cart-empty">Your cart is empty</div>
        ) : (
          items.map((b) => (
            <div className="cart-item" key={b.id}>
              <img className="cart-thumb" src={b.img} alt={b.name} />
              <div className="cart-info">
                <div className="cart-name">{b.name}</div>
                <div className="cart-meta">
                  <span className="cart-price">
                    ${(b.price || 0).toFixed(2)}
                  </span>
                  <span className="cart-qty">x{b.qty}</span>
                </div>
              </div>

              <div className="cart-actions">
                <div className="cart-item-subtotal">
                  ${((b.price || 0) * b.qty).toFixed(2)}
                </div>
                <button
                  type="button"
                  className="cart-remove-btn"
                  aria-label={`Remove ${b.name}`}
                  title={`Remove ${b.name}`}
                  onClick={() => onRemove && onRemove(b.id)}
                >
                  ×
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <div className="cart-total-label">Total</div>
        <div className="cart-total-value">${total.toFixed(2)}</div>
      </div>
    </aside>
  );
};

export default Cart;
