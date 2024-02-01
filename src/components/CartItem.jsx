import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart, decrementQty, incrementQty } from '../redux/slices/cartSlice';
import { formatPrice } from "../formats/formats";

const CartItem = ({ item }) => {
    const { id, qty, name, totalPrice } = item;
    const dispatch = useDispatch();

    const handleDecrementQty = () => {
      dispatch(decrementQty(id));
    }

    const handleIncrementQty = () => {
      dispatch(incrementQty(id));
    }

    const handleDeleteItem = () => {
      dispatch(deleteFromCart(id));
    }
  
    return (
      <li className="py-3 sm:flex sm:items-center sm:justify-between">
        <p className="mb-1 sm:mb-0">
          {qty}&times; {name}
        </p>
        <div className="flex items-center justify-between sm:gap-6">
          <p className="text-sm font-bold">{formatPrice(totalPrice)}</p>
          <div className="flex items-center gap-2 md:gap-3">
            <button onClick={handleDecrementQty} className="btn btn-round">
              -
            </button>
            <span className="text-sm font-medium">{qty}</span>
            <button onClick={handleIncrementQty} className="btn btn-round">
              +
            </button>
          </div>
          <button onClick={handleDeleteItem} className="btn btn-small">
            Delete
          </button>
        </div>
      </li>
    );
}

export default CartItem;