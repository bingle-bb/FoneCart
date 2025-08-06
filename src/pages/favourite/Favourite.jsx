import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import { FavouriteItem } from "./FavouriteItem";

export const Favourite = () => {
  const { favouriteIds } = useContext(CartContext);
  return (
    <div className="container">
      <div className="products-title">
        <h3>Favourite Items</h3>
      </div>
      <div className="products-list d-flex flex-wrap gap-2">
        {favouriteIds.map((fid) => {
          const product = PRODUCTS.find((product) => product.id === fid);
          return <FavouriteItem data={product} key={fid} />;
        })}
      </div>
    </div>
  );
};
