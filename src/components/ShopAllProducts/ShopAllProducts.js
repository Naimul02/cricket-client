import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ShopAllProduct from "./ShopAllProduct";
import Shipping from "../ShippingHomeSection3/Shipping";

import { useLoaderData } from "react-router-dom";
import "../../App.css";

import { BiHelpCircle } from "react-icons/bi";
import { FiArrowRightCircle } from "react-icons/fi";

import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { BiSearch } from "react-icons/bi";
import Loading from "../Loading/Loading";

const getFilteredProducts = (query, products) => {
  if (!query) {
    return products;
  }
  return products.filter((product) =>
    product.product_name.toLowerCase().includes(query)
  );
};

const ShopAllProducts = () => {
  const [query, setQuery] = useState("");

  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const data = useLoaderData();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      fetch(`http://localhost:5000/categoryproducts?category=${category}`)
        .then((response) => response.json())
        .then((data) => setProducts(data));
    } else {
      fetch("http://localhost:5000/allproducts")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  });

  const filteredItems = getFilteredProducts(query, products);

  const { isLoading } = useQuery({});
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div>
        <img
          src="https://wallpapers.com/images/hd/bangladesh-cricket-team-green-poster-3532ukxu2ppipg3d.jpg"
          alt=""
          className="lg:h-[490px] objectFit w-full"
        />
      </div>
      <div className="lg:mx-[104px]  lg:flex hidden justify-between  lg:flex-row flex-col ">
        <h2 className="lg:text-3xl text-lg font-bold mt-6">Products</h2>
        <div className="navbar-center  flex mt-3">
          <ul className="menu menu-horizontal flex ">
            <label className="bg-purple-600 px-3 rounded lg:h-[45px] h-[40px] text-white">
              <BiSearch className="text-2xl  lg:h-[45px] h-[40px] lg:ml-0 ml-[3px]" />
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border-solid border border-slate-500  text-lg text-black font-semibold rounded lg:w-[320px] w-[285px] lg:h-[45px] h-[40px] pl-3 bg-base-100"
              placeholder="Search Products..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </ul>
        </div>
      </div>

      <div className="flex lg:mx-[104px] mt-6 lg:flex-row flex-col">
        <div className="lg:w-[275px] bg-base-200 lg:h-[458px] h-[95px] lg:mr-3 rounded lg:block sticky top-[-1px]">
          <div className="p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold">PRODUCT CATEGORIES</h1>
              <div className="flex ">
                <div className="drawer drawer-end">
                  <input
                    id="my-drawer-5"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content flex">
                    {/* Page content here */}
                    <label
                      className="text-lg font-semibold text-white  hover:cursor-pointer"
                      htmlFor="my-drawer-5"
                    ></label>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost lg:hidden mt-[-10px]"
                      htmlFor="my-drawer-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"
                        />
                      </svg>
                    </label>
                  </div>
                  <div className="drawer-side z-10">
                    <div className="p-4 lg:w-[370px] w-[300px] min-h-full sidebarBackground text-base-content ">
                      <label
                        htmlFor="my-drawer-5"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                      >
                        {/* x */}
                      </label>
                      <div className="flex justify-between">
                        <h1 className="text-xl font-semibold">
                          Products Category
                        </h1>
                        <label
                          htmlFor="my-drawer-5"
                          aria-label="close sidebar"
                          className="drawer-overlay text-4xl font-semibold mt-[-8px]"
                        >
                          x
                        </label>
                      </div>
                      <hr className="my-2" />

                      <div className="text-lg">
                        <p
                          onClick={() => setCategory("cricket Bats")}
                          className="font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
                        >
                          <label className="lg:inline hidden">Cricket</label>{" "}
                          Bats
                        </p>

                        <p
                          onClick={() => setCategory("cricket Gloves")}
                          className="font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
                        >
                          <label className="lg:inline hidden">Cricket </label>
                          Gloves
                        </p>

                        <p
                          onClick={() => setCategory("cricket pads")}
                          className="font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
                        >
                          <label className="lg:inline hidden">Cricket</label>{" "}
                          Pads
                        </p>

                        <p
                          onClick={() => setCategory("cricket kitbags")}
                          className="font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
                        >
                          <label className="lg:inline hidden">Cricket</label>{" "}
                          Kitbags
                        </p>

                        <p
                          onClick={() => setCategory("cricket Helmets")}
                          className="font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
                        >
                          <label className="lg:inline hidden">Cricket</label>{" "}
                          Helmets
                        </p>

                        <p
                          onClick={() => setCategory("cricket Clothing")}
                          className="font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
                        >
                          <label className="lg:inline hidden">Cricket</label>{" "}
                          Clothing
                        </p>

                        <p
                          onClick={() => setCategory("Cricket Guards")}
                          className="font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
                        >
                          <label className="lg:inline hidden">Cricket</label>{" "}
                          Guards
                        </p>

                        <p
                          onClick={() => setCategory("cricket Balls")}
                          className="font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
                        >
                          Cricket Balls
                        </p>

                        <p
                          onClick={() => setCategory("cricket Shoes")}
                          className=" font-semibold block mb-2  hover:text-orange-600 hover:cursor-pointer"
                        >
                          <label className="lg:inline hidden">Cricket</label>{" "}
                          Shoes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-1 hidden  ">
              <p
                onClick={() => setCategory("cricket Bats")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket</label> Bats
              </p>

              <p
                onClick={() => setCategory("cricket Gloves")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket </label>Gloves
              </p>

              <p
                onClick={() => setCategory("cricket pads")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket</label> Pads
              </p>

              <p
                onClick={() => setCategory("cricket kitbags")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket</label> Kitbags
              </p>

              <p
                onClick={() => setCategory("cricket Helmets")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket</label> Helmets
              </p>

              <p
                onClick={() => setCategory("cricket Clothing")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket</label> Clothing
              </p>

              <p
                onClick={() => setCategory("Cricket Guards")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket</label> Guards
              </p>

              <p
                onClick={() => setCategory("cricket Balls")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Balls
              </p>

              <p
                onClick={() => setCategory("cricket Shoes")}
                className=" text-base font-semibold block mb-2  hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket</label> Shoes
              </p>
            </div>
          </div>
        </div>
        <hr className="text-lg font-bold " />
        <div className=" lg:hidden flex justify-between  flex-col  ">
          <h2 className="text-xl font-bold mt-4 pl-3">Products</h2>
          <div className="navbar-center  flex mt-3">
            <ul className="menu menu-horizontal flex ">
              <label className="bg-purple-600 px-3 rounded lg:h-[50px] h-[40px]">
                <BiSearch className="text-2xl  lg:h-[50px] h-[40px] lg:ml-0 ml-[3px] text-white" />
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border-solid border border-slate-500  text-lg text-black font-semibold rounded lg:w-[320px] w-[285px] lg:h-[46px] h-[40px] pl-3 bg-base-100"
                placeholder="Search Products..."
                onChange={(e) => setQuery(e.target.value)}
              />
            </ul>
          </div>
        </div>
        <form className="grid lg:grid-cols-3 gap-3 lg:mt-0 mt-4">
          {filteredItems.length ? (
            filteredItems.map((product) => (
              <ShopAllProduct product={product} data={data}></ShopAllProduct>
            ))
          ) : (
            <h1 className="text-3xl   font-semibold">
              There are no product here.
            </h1>
          )}
        </form>
      </div>
      <Shipping></Shipping>
    </>
  );
};

export default ShopAllProducts;
