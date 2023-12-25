import React from "react";
import { GrDeliver, GrLocation } from "react-icons/gr";
import { BsCashCoin } from "react-icons/bs";
function Help() {
  return (
    <div className="bg-white">
      <img
        src="./images/shoping.jpg"
        alt=""
        className="w-full h-auto  lg:h-screen object-fill"
      />
      <div className="body-margin   text-center  py-5">
        <h1 className="md:text-5xl text-2xl my-5">About Us</h1>
        <p className="lg:text-lg">
          Shopmania is a dynamic and innovative online retail platform dedicated
          to providing a seamless and enjoyable shopping experience for
          customers around the globe. Established [provide the founding year if
          available] with a vision to redefine online shopping, Shopmania has
          since become a trusted destination for a diverse range of high-quality
          products.
          <br />
          <br /> At Shopmania, our mission is to empower consumers by offering a
          curated selection of products that cater to their diverse needs and
          preferences. We are committed to delivering excellence in service,
          ensuring customer satisfaction, and embracing the latest trends and
          technologies to enhance the overall shopping experience.
        </p>
      </div>

      <div className="body-margin   text-center  py-5">
        <h1 className="md:text-5xl text-2xl my-5"> Our Goal </h1>
        <img
          src="./images/aboutsDelivary.jpg"
          alt=""
          className="w-full h-auto  md:h-[60vh] object-cover"
        />
        <p className="p-5 lg:text-lg">
          As we continue to grow and evolve, Shopmania remains dedicated to
          staying at the forefront of the e-commerce industry. We are committed
          to exploring new technologies, expanding our product offerings, and
          further enhancing our services to meet the ever-changing needs of our
          valued customers. Join us on the journey of seamless and delightful
          online shopping at Shopmania – where quality meets convenience!
          <br /> <br />
          Join us on the journey of seamless and delightful online shopping at
          Shopmania – where quality meets convenience!
        </p>
      </div>
      <div className="body-margin   text-center  py-5">
        <h1 className="md:text-5xl text-2xl my-5"> Our Features </h1>
        <div className="lg:text-lg p-5 text-start">
          <span className="font-bold">Extensive Product Catalog:</span>{" "}
          <p>
            {" "}
            Shopmania boasts an extensive catalog featuring a wide array of
            products across categories such as electronics, fashion, home and
            living, beauty, and more. Our carefully curated selection ensures
            that customers can find everything they need in one convenient
            place.
          </p>
          <br />
          <span className="font-bold">User-Friendly Interface:</span>{" "}
          <p>
            Our user-friendly website interface is designed to make the shopping
            journey intuitive and enjoyable. With easy navigation, powerful
            search functionalities, and detailed product information, customers
            can make informed decisions with confidence.
          </p>
          <br />
          <span className="font-bold "> Secure Shopping Environment: </span>
          <p>
            Shopmania prioritizes the security of our customers' personal and
            financial information. Our robust security measures ensure a safe
            and secure online shopping environment, giving our customers peace
            of mind throughout their shopping experience.
          </p>
          <br />
          <span className="font-bold">Exceptional Customer Support:</span>
          <p>
            {" "}
            We take pride in our commitment to customer satisfaction. Our
            dedicated customer support team is readily available to assist with
            any inquiries, concerns, or assistance needed during and after the
            purchase process.
          </p>
          <br />
          <span className="font-bold">
            Competitive Pricing and Promotions:
          </span>{" "}
          <p>
            Shopmania strives to offer competitive pricing on all products.
            Additionally, our customers can enjoy special promotions, discounts,
            and exclusive deals, making their shopping experience even more
            rewarding.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 my-5 shadow p-5 ">
          <div>
            <img src="./images/bestOnline.jpg" alt="" className="rounded-lg" />
          </div>
          <div className="md:col-span-3  p-3">
            <h2 className="lg:text-3xl text-xl text-primary font-bold">
              You Choose the Best, You Will get the best
            </h2>
            <span className="lg:text-lg">
              Join us now and get the best Offfers
            </span>
            <div>
              <button className="btn-primary my-5">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
