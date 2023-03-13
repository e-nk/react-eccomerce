import React from 'react';

function Cart(props) {
  const { cartItems } = props;

  const total = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Cart</h5>
        {cartItems.length === 0 && <p>Your cart is empty.</p>}
        {cartItems.length > 0 && (
          <>
            <ul className="list-group mb-3">
              {cartItems.map(item => (
                <li key={item.id} className="list-group-item">
                  {item.title} <span className="float-right">${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="font-weight-bold mb-0">Total: ${total.toFixed(2)}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
