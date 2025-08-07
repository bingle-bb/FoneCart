import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import { FavouriteItem } from "./FavouriteItem";

export const Favourite = () => {
  const { favouriteIds } = useContext(CartContext);
  return (
    <div
      className="products-list d-flex flex-wrap gap-3  mb-3 ms-5 "
      style={{ margin: "0px" }}
    >
      <div className="products-title ">
        <h3>Favourite Items</h3>
      </div>
      <div className="products-list d-flex flex-wrap gap-2 justify-content-center">
        {favouriteIds.map((fid) => {
          const product = PRODUCTS.find((product) => product.id === fid);
          return <FavouriteItem data={product} key={fid} />;
        })}
      </div>
    </div>
  );
};
