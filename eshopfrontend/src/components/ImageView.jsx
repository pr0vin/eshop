import React, { useState } from "react";
const apiUrl = "http://localhost:9000/";

const ImageView = ({ images }) => {
  const [mainImg, setMainImg] = useState(images[0]);
  return (
    <div>
      <div className="grid md:grid-cols-4  ">
        <div className="md:h-[80vh] h-[40vh]  overflow-x-scroll  ">
          {images.map((image, index) => {
            return (
              <div key={index} className="p-2 w-full">
                <img
                  onClick={() => setMainImg(image)}
                  className="lg:h-[25vh] lg:w-full  md:h-[10vh] md:w-[5rem]  rounded-lg "
                  src={`${apiUrl}/uploads/images/${image.filename}`}
                  alt={image.name}
                />
              </div>
            );
          })}
        </div>
        <div className=" col-span-3  lg:justify-center p-2  m-hidden">
          <img
            src={`${apiUrl}/uploads/images/${mainImg.filename}`}
            alt="photo"
            className="h-[70vh] w-full  "
          />
        </div>
      </div>
    </div>
  );
};

export default ImageView;
