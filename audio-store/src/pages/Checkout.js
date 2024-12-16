import React from 'react';
import '../styles/Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="payment">Payment Method</label>
          <select id="payment" name="payment" required>
            <option value="mpesa">M-Pesa</option>
            <option value="card">Bank Card</option>
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
