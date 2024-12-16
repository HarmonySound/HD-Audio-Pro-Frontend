import React from 'react';
import { useLocation } from 'react-router-dom';

const Receipt = () => {
  const location = useLocation();
  const { receipt } = location.state || {};

  if (!receipt) {
    return <p>No receipt found</p>;
  }

  return (
    <div className="receipt-container">
      <h2>Payment Receipt</h2>
      <div className="receipt-details">
        <p><strong>Transaction ID:</strong> {receipt.transactionId}</p>
        <p><strong>Amount Paid:</strong> ${receipt.amount}</p>
        <p><strong>Payment Status:</strong> {receipt.status}</p>
        <p><strong>Payment Date:</strong> {new Date(receipt.date).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Receipt;
