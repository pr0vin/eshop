import React from "react";

import products from "../jsons/products";
import Stars from "../components/Stars";
const apiUrl = "http://localhost:9000/";

function cart() {
  const RemoveFromCart = () => {
    alert("Remove from cart");
  };
  return (
    <>
      {products.map((product, i) => (
        <div key={i} className="relative grid grid-cols-5 gap-5 body-margin ">
          <div className="absolute top-[-20%] right-0 ">
            <button className="text-red" onClick={RemoveFromCart}>
              X
            </button>
          </div>
          <div className="col-span-2 md:col-span-1">
            <img
              src={`${product.image}`}
              alt=""
              className="md:h-[25vh] h-[15vh]  w-full fill rounded-md"
            />
          </div>
          <div className="col-span-3">
            <div className="font-bold text-2xl ">{product.name}</div>
            <div className="flex my-3">
              <span>
                <Stars stars={product.rating.stars}></Stars>
              </span>
              <span>({product.rating.reviews})</span>
            </div>

            <div>
              <span className="font-bold">qiantity :</span>
              <span className="px-3">{product.stock}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default cart;
