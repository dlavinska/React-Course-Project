import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from '../redux/slices/cartSlice';
import { formatPrice } from "../formats/formats";

const MenuItem = ({ item }) => {
    const { name, unitPrice, ingredients, soldOut, imageUrl } = item;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
      dispatch(addToCart(item));
    }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatPrice(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase text-stone-500">Sold out</p>
          )}
          {!soldOut && (
            <button onClick={handleAddToCart} className="btn btn-small">
              Add to cart
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
