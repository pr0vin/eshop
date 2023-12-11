import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../jsons/products";
import Stars from "../components/Stars";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import DiscountCalc from "../assets/DiscountCalc";
import { GrDeliver, GrLocation } from "react-icons/gr";
import { BsCashCoin } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { FaMinus, FaPlus } from "react-icons/fa";
import ImageView from "../components/ImageView";
import { useProductContext } from "../context/ProductContext";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const getSingleProduct = async (id) => {
    try {
      const res = await axios.get(`/api/products/${id}`);
      const data = await res.data;
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const { getSingleProduct, singleProduct } = useProductContext();

  const { images, rating } = product;
  if (rating) {
    var { stars, reviews } = rating;
  }

  useEffect(() => {
    getSingleProduct(id);
  }, []);

  const actualPrice = DiscountCalc(product.discount, product.price);
  return (
    <>
      <div className="body-margin bg-white ">
        <div className="">
          <div className="grid  md:grid-cols-5  gap-2  p-3">
            <div className="md:col-span-2 col-span-5 ">
              {images ? <ImageView images={images} /> : ""}
            </div>

            {/* details */}
            <div className="col-span-3  ">
              <div className="text-3xl mb-5  ">{product.name}</div>
              <div className="flex justify-between mb-5">
                <div className="flex">
                  <span>
                    <i className="">
                      <Stars stars={stars} />
                    </i>
                  </span>
                  <span className="text-gray text-sm">({reviews})</span>
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

              <div className="mb-3 flex gap-3">
                <span>quantity:</span>
                <span className="flex">
                  <button className="border p-1">
                    <FaMinus />
                  </button>

                  <input className="border rounded-md w-10 mx-2" type="text" />

                  <button className="border p-1">
                    <FaPlus />
                  </button>
                </span>
              </div>
              <div>
                <div className="flex gap-3 text-xl">
                  <button className="">Buy Now</button>
                  <button className="btn-primary">Add to cart</button>
                </div>
              </div>
              <div>
                <p className="mt-3">{product.description}</p>
              </div>
            </div>
            {/* others */}
            <div className="col-span-5 p-5 mx-5 ">
              <div className=" grid  grid-cols-2">
                <div className="bg-lightwhite p-5 ">
                  <div className="text-sm mb-2 ">Delivery</div>
                  <div className="flex my-2">
                    <span>
                      <i>
                        <GrLocation size={20} className="me-2" />
                      </i>
                    </span>
                    <span>Dhangadhi Kailali -04 Uttar behadi</span>
                  </div>
                  {/* <hr className="text-primary" /> */}
                  <div className="flex my-3">
                    <span>
                      <i>
                        <GrDeliver size={20} className="me-2" />
                      </i>
                    </span>
                    <div>
                      <span className="font-bold me-5">Free Delivery</span>
                      <span className="text-sm">(2-7 day(s))</span>
                    </div>
                  </div>
                  {/* <hr className="text-primary" /> */}
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

                <div className="bg-lightwhite  p-5">
                  <div className="text-sm">Service</div>
                  <div className="flex my-2">
                    <span>
                      <i>
                        <TiTick size={25} className="me-2 text-primary" />
                      </i>
                    </span>
                    <div>
                      <strong>100% Trunted Brands</strong>
                      <p className="text-sm">money back guarentee</p>
                    </div>
                  </div>
                  <div className="flex my-2">
                    <span>
                      <i>
                        <TiTick size={25} className="me-2 text-primary" />
                      </i>
                    </span>
                    <div>
                      <strong>15 Days free return</strong>
                      <p className="text-sm">
                        change of mind is not applicable
                      </p>
                    </div>
                  </div>
                  <div className="flex my-2">
                    <span>
                      <i>
                        <TiTick size={25} className="me-2 text-primary" />
                      </i>
                    </span>
                    <div>
                      <strong>Maximum Discounts and Offers</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
