import React from "react";

const MenuItem = ({ item }) => {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = item;

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
                    <p className="text-sm">{`€${unitPrice}.00`}</p>
                ) : (
                    <p className="text-sm uppercase text-stone-500">Sold out</p>
                )}
                {!soldOut && (
                    <button className="inline-block rounded-md bg-yellow-400  px-4 py-2 text-xs font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-2.5">
                        Add to cart
                    </button>
                )}
            </div>
      </div>
    </li>
  );
};

export default MenuItem;
