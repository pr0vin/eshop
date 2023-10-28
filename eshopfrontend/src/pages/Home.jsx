import React from "react";

import products from "../jsons/products";
import ProductView from "../components/ProductView";

function Home() {
  const featuredProducts = products.filter(
    (product) => product.featured === true
  );
  return (
    <>
      <div className="">
        <img
          className="h-[80vh] w-full"
          src="./images/img3.jpg"
          alt="background"
        />
      </div>

      <section className=" my-[3rem]  mx-[2rem]  md:mx-[5rem]">
        <div className="text-4xl px-3  italic">Latest</div>

        <div>
          <ProductView products={products} />
        </div>
      </section>
      <section className=" my-[3rem]  mx-[2rem]  md:mx-[5rem]">
        <div className="text-4xl px-3  italic">Fretured</div>

        <div>
          <ProductView products={featuredProducts} />
        </div>
      </section>
    </>
  );
}

export default Home;
