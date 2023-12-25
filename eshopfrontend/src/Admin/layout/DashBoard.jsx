import React from "react";
import { FaHome } from "react-icons/fa";

function DashBoard() {
  return (
    <>
      <div className=" margin-body">
        <span className="text-2xl font-bold p-2"> DashBoard</span>

        <div className="   grid grid-cols-2 lg:grid-cols-4 gap-3 overflow-hidden">
          <div className="bg-white rounded-md shadow flex p-2">
            <FaHome size={40} className="" />
            <div>
              <span className="font-bold">Total Orders</span> <div>300</div>
            </div>{" "}
          </div>
          <div className="bg-white rounded-md shadow flex p-3">
            <FaHome size={40} className="" />
            <div>
              <span className="font-bold">Total Users</span> <div>300</div>
            </div>{" "}
          </div>
          <div className="bg-white rounded-md shadow flex p-2">
            <FaHome size={40} className="" />
            <div>
              <span className="font-bold">Total Products</span> <div>300</div>
            </div>{" "}
          </div>{" "}
          <div className="bg-white rounded-md shadow flex p-2">
            <FaHome size={40} className="" />
            <div>
              <span className="font-bold">Avaliable Orders</span> <div>300</div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
