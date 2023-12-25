import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { AiFillCaretDown, AiOutlineShoppingCart } from "react-icons/ai";
import { usecategoryContext } from "../context/categoryContext";
import { useAuth } from "../context/AuthProvider";
import { BsSearchHeartFill } from "react-icons/bs";

function Navbar() {
  const navigate = useNavigate();
  const { categories } = usecategoryContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const { token, logOut } = useAuth();

  const handleCategories = () => {
    alert("all categories will be here");
  };
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div>
      <header className="bg-white   ">
        <nav className="flex justify-between items-center mx-auto py-3 px-5  ">
          <div
            className="flex cursor-pointer "
            onClick={() => {
              navigate("/");
            }}
          >
            <div>
              <img
                className="w-12 h-12 rounded-full cursor-pointer md:block hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTv9v0ZijQtopxkX0JT_LRMU-2xBU35H8Ug&usqp=CAU"
                alt="logo"
              />
            </div>
            <div>
              {" "}
              <h2 className="font-bold text-3xl p-2 ">ShopMania</h2>
            </div>
          </div>
          <div className="  py-1 px-3 border-lightwhite border rounded-md shadow hidden md:block">
            <div className="flex">
              <input
                id="search"
                type="search"
                placeholder="search"
                className="focus:outline-none mx-auto md:w-72"
              />
              <div className="ms-2 ">
                <BsSearchHeartFill size={20} />
              </div>
            </div>
          </div>
          <div
            className="flex
          "
          >
            <div className="flex items-end gap-6">
              {!token ? (
                <button className="btn-primary">
                  <Link to={"/auth/login"}>Login</Link>
                </button>
              ) : (
                <button className="btn-primary">
                  <span onClick={logOut}>Logout</span>
                </button>
              )}

              <button
                onClick={toggleMenuHandler}
                className="md:text-2xl  font-bold md:hidden"
              >
                {!toggleMenu ? <GiHamburgerMenu /> : <GrClose />}
              </button>
            </div>
            <div
              className={`md:static absolute bg-white md:min-h-fit min-h-[50vh] z-50  left-0 ${
                toggleMenu ? "top-[10%]" : "top-[-100%]"
              } md:w-auto w-full flex-items-center `}
            >
              <ul className="flex   md:items-center gap-4  px-5 py-2 ">
                <li className="">
                  <Link to={"/"}>Home</Link>
                </li>

                <li className="">
                  <Link to={"/help"}>AboutUs</Link>
                </li>
                <li className="">
                  <Link to={"/bag"}>
                    <i className="text-2xl font-bold">
                      <AiOutlineShoppingCart />
                    </i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section>
          <div className="flex gap-5 overflow-x-scroll bg-black h-[40px]  w-full  border-b-primary ">
            <div
              className=" flex  taskbar-categories "
              onClick={handleCategories}
            >
              All
              <i className="p-1">
                <AiFillCaretDown />
              </i>
            </div>
            {categories.map((category, i) => (
              <div
                key={i}
                className="taskbar-categories"
                onClick={() => {
                  navigate(`/categories/${category._id}`);
                }}
              >
                {category.name}
              </div>
            ))}
            {/* <div className="taskbar-categories">Shirts</div>
            <div className="taskbar-categories">Pants</div>
            <div className=" taskbar-categories ">Jackets</div>
            <div className="taskbar-categories">Shoes</div>
            <div className="taskbar-categories">Shirts</div>
            <div className="taskbar-categories">Pants</div>
            <div className=" taskbar-categories ">Jackets</div>
            <div className="taskbar-categories">Shoes</div> */}
          </div>
        </section>
      </header>
    </div>
  );
}

export default Navbar;
