import React from "react";
import Stars from "./Stars";
import { useNavigate } from "react-router-dom";
import DiscountCalc from "../assets/DiscountCalc";

const apiUrl = "http://localhost:9000/";
function ProductView({ products }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex gap-3  p-3 ">
        <div className=" grid   grid-cols-2 md:grid-cols-6 sm:grid-cols-4 gap-3  ">
          {products.map((product, index) => {
            const actualPrice = DiscountCalc(product.discount, product.price);

            return (
              <div
                onClick={() => {
                  navigate(`/product/${product._id}`);
                }}
                key={index}
                className="shadow-xl border border-light bg-white   hover:border-primary"
              >
                <div>
                  <img
                    className="w-full h-[10rem] lg:h-[12rem]"
                    src={`${apiUrl}/uploads/images/${product.images[0].filename}`}
                    alt="images"
                  />
                </div>

                <div className="p-1 ">
                  <div className="min-h-[50px] md:min-h-[50px]">
                    <span className=" font-bold ">
                      {product.name.substring(0, 30)}...
                    </span>
                  </div>

                  <div className="min-h-[60px]">
                    <div className="text-xl text-red ">Rs. {actualPrice}</div>
                    {product.discount ? (
                      <div className=" text-gray text-sm">
                        <span className="line-through ">
                          Rs.{product.price}
                        </span>
                        <span className="ps-2">(-{product.discount} %)</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="flex">
                    <span>
                      <i className="">
                        <Stars stars={product.rating.stars} />
                      </i>
                    </span>
                    <span className="text-gray text-sm">
                      ({product.rating.reviews})
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductView;
