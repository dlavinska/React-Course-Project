import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="px-3 py-3">
      <button
        onClick={() => navigate("/menu")}
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </button>
      <p className="mt-7 font-semibold">
        Your cart is still empty. Please back to menu and start adding some
        pizza 😎
      </p>
    </div>
  );
}

export default EmptyCart;