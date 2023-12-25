import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import ProductView from "../components/ProductView";

function CategoriesView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products } = useProductContext();
  let productslist = products.filter((product) => product.category._id === id);

  return (
    <>
      <div className="body-margin">
        <span className="my-5 px-3 text-2xl text-primary">Categories</span>
        {productslist.length > 0 ? (
          <div className="mt-5">
            <ProductView products={productslist} />
          </div>
        ) : (
          <div className="text-center mx-auto p-5 bg-white">
            <div className="text-lg  my-5">Opps No product found !</div>
            <button
              className="btn-primary"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CategoriesView;
