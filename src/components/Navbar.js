import React from "react";
import { CartState } from "../context/Context";

const Navbar = () => {

  const {cartState : {cart}} = CartState()
  console.log(cart)
  return (
    
      <div className="max-w-6xl bg-white mx-auto flex justify-between sticky top-0 z-50">
        <div>
          <p className="font-bold text-xl p-4 cursor-pointer text-yellow-600">React Ecom</p>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="font-semibold mr-6 cursor-pointer hover:text-gray-700">
            Contact
          </div>
          <div className="font-semibold mr-6 cursor-pointer hover:text-gray-700">
            Blog
          </div>
          <div className="font-semibold mr-6 cursor-pointer hover:text-gray-700">
            Home
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block mr-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="relative inline-block cursor-pointer mr-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
              {cart.length}
            </span>
          </span>

          <span class="flex flex-col justify-center items-center hover:scale-110 transform transition rounded-lg cursor-pointer w-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <p className="text-xs">Sign In</p>
          </span>
        </div>
      </div>
  );
};

export default Navbar;
