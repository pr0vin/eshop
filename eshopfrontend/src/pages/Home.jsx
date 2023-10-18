import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrStar } from "react-icons/gr";
import products from "../jsons/products";
function Home() {
  return (
    <>
      <div className="">
        <img
          className="h-[80vh] w-full"
          src="./images/img3.jpg"
          alt="background"
        />
      </div>

      <section className="min-h-screen mt-5">
        <div className="text-4xl p-3 text-center italic">Fretured</div>
        <p className="text-center p-3">
          Veniam laboriosam, repellendus repudiandae nobis blanditiis nemo
          itaque consectetur facilis numquam in ducimus ut error cum porro
          provident accusamus dignissimos quos! Enim?
        </p>
        <div className="flex gap-3  p-3 ">
          <div className=" grid  grid-cols-2 md:grid-cols-5 sm:grid-cols-3 gap-5 ">
            {products.map((product, index) => {
              const d = parseInt(product.discount) / 100;
              const price = parseInt(product.price);
              const dprice = parseInt(price * d);

              const actualPrice = price - dprice;

              // console.log(actualPrice);
              return (
                <div
                  key={index}
                  className="shadow-xl border border-light p-1 hover:border-primary"
                >
                  <div>
                    <img
                      className="w-full h-[15rem]"
                      src={product.image}
                      alt="images"
                    />
                  </div>
                  <div>
                    <span className=" text-lg ">
                      {product.name.substring(0, 30)}...
                    </span>
                    <div className="flex">
                      <span>
                        Rating : <strong>{product.rating}</strong>{" "}
                      </span>
                      <span>
                        <i className="text-xl text-secondary">
                          <GrStar />
                        </i>
                      </span>
                    </div>
                    {/* <div>Category</div> */}
                    {/* <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur aliquid hic totam molestiae corporis
                  necessitatibus, officia, dolorum ipsam repudiandae itaque,
                  nobis quidem ea minima fuga obcaecati vel numquam tempora
                  illo.
                </p> */}
                  </div>
                  <div className="flex justify-between p-3">
                    <div>
                      <div className="flex gap-3">
                        <span className="font-bold text-xl text-red ">
                          Rs. {actualPrice}
                        </span>
                        <span className="line-through">Rs.{product.price}</span>
                      </div>
                    </div>
                    {/* <span>
                  <button className="flex p-2 bg-primary hover:bg-black hover:text-white">
                    Add
                    <AiOutlineShoppingCart className="text-xl" />
                  </button>
                </span> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
