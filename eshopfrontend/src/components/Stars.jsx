import React from "react";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Stars = ({ stars }) => {
  const rating = Array.from({ length: 5 }, (elem, i) => {
    let numbers = i + 0.5;
    return (
      <span className="inline-flex pe-1" key={i}>
        {stars >= i + 1 ? (
          <FaStar className="rating-stars" />
        ) : stars >= numbers ? (
          <FaStarHalfAlt className="rating-stars" />
        ) : (
          <AiOutlineStar className="rating-stars" />
        )}
      </span>
    );
  });

  return (
    <>
      <div>{rating}</div>
    </>
  );
};

export default Stars;
