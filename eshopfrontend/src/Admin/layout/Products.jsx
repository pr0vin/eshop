import React from "react";
import { useProductContext } from "../../context/ProductContext";
import ProductView from "../../components/ProductView";

function Products() {
  const { products } = useProductContext();
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
}

export default Products;
