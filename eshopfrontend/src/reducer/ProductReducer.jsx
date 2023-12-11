const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
