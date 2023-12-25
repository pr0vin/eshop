import React from "react";
import { usecategoryContext } from "../context/categoryContext";
import { useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

function CategoriesList() {
  const { categories } = usecategoryContext();
  const navigate = useNavigate();
  const handleCategories = () => {
    alert("all categories will be here");
  };
  return (
    <div>
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
        </div>
      </section>
    </div>
  );
}

export default CategoriesList;
