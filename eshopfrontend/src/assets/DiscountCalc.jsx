function DiscountCalc(discount, price) {
  const d = parseInt(discount) / 100;
  const p = parseInt(price);
  const dprice = parseInt(p * d);

  const actualPrice = p - dprice;
  return actualPrice;
}

export default DiscountCalc;
