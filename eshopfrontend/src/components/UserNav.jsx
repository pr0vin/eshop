import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { AiFillCaretDown, AiOutlineShoppingCart } from "react-icons/ai";
import CategoriesList from "./CategoriesList";
function UserNav() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div>
      <header className="bg-white   ">
        <nav className="flex justify-between items-center mx-auto py-3 px-5  ">
          <div
            className="flex  cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <div>
              <img
                className="w-12 h-12 rounded-full cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTv9v0ZijQtopxkX0JT_LRMU-2xBU35H8Ug&usqp=CAU"
                alt="logo"
              />
            </div>
            <div>
              <h2 className="font-bold text-3xl p-2 ">ShopMania</h2>
            </div>
          </div>
          <div
            className="flex
            "
          >
            <div className="flex items-end gap-6">
              <button
                onClick={toggleMenuHandler}
                className="md:text-2xl  font-bold md:hidden"
              >
                {!toggleMenu ? <GiHamburgerMenu /> : <GrClose />}
              </button>
            </div>
            <div
              className={`md:static absolute bg-white md:min-h-fit min-h-[50vh] z-50  left-0 ${
                toggleMenu ? "top-[8%]" : "top-[-100%]"
              } md:w-auto w-full flex-items-center `}
            >
              <ul className="flex   md:items-center gap-3  px-5 py-2 ">
                <li className="">
                  <Link to={"/"}>Home</Link>
                </li>

                <li className="">
                  <Link to={"/help"}>Help ?</Link>
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
        <CategoriesList />
      </header>
    </div>
  );
}

export default UserNav;
