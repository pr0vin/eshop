import React from "react";
import { useParams } from "react-router-dom";
import products from "../jsons/products";
import Stars from "../components/Stars";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import DiscountCalc from "../assets/DiscountCalc";
import { GrDeliver, GrLocation } from "react-icons/gr";
import { BsCashCoin } from "react-icons/bs";

function ProductDetails() {
  const { id } = useParams();
  console.log(products, id);
  const item = products.filter((item) => item.id == id);
  let product = item[0];

  const actualPrice = DiscountCalc(product.discount, product.price);
  return (
    <>
      <div className="body-margin bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 col-span-3  p-3">
            <div>
              <img
                src={product.image}
                alt="photo"
                className="h-[40vh] w-[100%] md:h-[80vh] md:pe-[10%] pe-0"
              />
            </div>
            <div>
              <div className="text-3xl mb-5  ">{product.name}</div>
              <div className="flex justify-between mb-5">
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
                <div className="flex text-2xl font-bold gap-1">
                  <i>
                    <AiOutlineShareAlt />
                  </i>
                  <i>
                    <AiOutlineHeart />
                  </i>
                </div>
              </div>
              <div className="min-h-[70px]">
                <div className="text-3xl text-red ">Rs. {actualPrice}</div>
                {product.discount ? (
                  <div className=" text-gray ">
                    <span className="line-through ">Rs.{product.price}</span>
                    <span className="ps-2">(-{product.discount} %)</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="">
            <div className="bg-lightwhite p-5">
              <div className="text-sm mb-2 ">Delivery</div>
              <div className="flex my-2">
                <span>
                  <i>
                    <GrLocation size={20} className="me-2" />
                  </i>
                </span>
                <span>Dhangadhi Kailali -04 Uttar behadi</span>
              </div>
              <hr className="text-primary" />
              <div className="flex my-2">
                <span>
                  <i>
                    <GrDeliver size={20} className="me-2" />
                  </i>
                </span>
                <div>
                  <div className="font-bold">Free Delivery</div>
                  <span className="text-sm">2-7 day(s)</span>
                </div>
              </div>
              <hr className="text-primary" />
              <div className="flex my-2">
                <span>
                  <i>
                    <BsCashCoin size={20} className="me-2" />
                  </i>
                </span>
                <div>
                  <span className="">Cash on Delivery</span>
                </div>
              </div>
            </div>

            <div className="bg-lightwhite mt-3 p-5">
              <div className="text-sm">Service</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
