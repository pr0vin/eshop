import React from "react";
import Stars from "./Stars";

function ProductView({ products }) {
  return (
    <div>
      <div className="flex gap-3  p-3 ">
        <div className=" grid   grid-cols-2 md:grid-cols-6 sm:grid-cols-4 gap-3  ">
          {products.map((product, index) => {
            const d = parseInt(product.discount) / 100;
            const price = parseInt(product.price);
            const dprice = parseInt(price * d);

            const actualPrice = price - dprice;

            // console.log(actualPrice);
            return (
              <div
                key={index}
                className="shadow-xl border border-light bg-white   hover:border-primary"
              >
                <div>
                  <img
                    className="w-full h-[12rem]"
                    src={product.image}
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
