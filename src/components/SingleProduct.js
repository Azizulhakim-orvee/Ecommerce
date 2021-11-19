import React, { useState } from "react";
import { CartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    cartState: { cart },
    cartDispatch,
  } = CartState();

  const [qty, setQty] = useState(1);

  console.log(cart)

  return (
    <>
      <div className="flex flex-col justify-center w-1/6">
        <div className="relative m-3 flex flex-wrap mx-auto justify-center">
          <div className="relative hover:bg-gray-300 min-w-full hover:scale-105 transition ease-linear transform shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
            <div className="overflow-x-hidden rounded-2xl relative">
              <img
                className="h-40 rounded-2xl w-full object-contain"
                src={prod.image}
                alt=""
              />
              w-6 h-6 group-hover:opacity-50 opacity-70 text-white
              {cart.some((c) => c.id === prod.id) ? (
                <p className="absolute right-2 hover:bg-red-900 top-2 rounded-full p-2 cursor-pointer group bg-red-500 ">
                  <svg
                    className="w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() =>
                      cartDispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </p>
              ) : (
                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:opacity-50 opacity-70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                    onClick={() =>
                      cartDispatch({
                        type: "ADD_TO_CART",
                        payload: { ...prod, qty: qty },
                      })
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </p>
              )}
            </div>
            <div className="mt-4 pl-2 mb-2 flex justify-between ">
              <div className="w-full">
                <p className="text-lg font-semibold text-gray-900 mb-0">
                  {prod.title}
                </p>

                <div className="flex justify-center items-center rounded-lg  border-t mt-2 shadow-sm">
                  <p className="text-md text-gray-800 mt-0 flex-1 text-2xl">
                    ৳{prod.price}
                  </p>

                  {cart.some((c) => c.id === prod.id) ? (
                    <p className="font-dancing-script animate-bounce text-yellow-900 p-2">
                      {qty} item(s) added to the cart
                    </p>
                  ) : (
                    <div className="flex flex-col">
                      <label className="text-gray-700" htmlFor="count">
                        Quantity
                      </label>
                      <div className="flex items-center mt-1">
                        <button className="text-gray-500 focus:outline-none focus:text-green-900 focus:scale-105 transition-all transform">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => {
                              qty > 1 && setQty(qty - 1);
                            }}
                          >
                            <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </button>
                        <span className="mx-1 text-2xl text-green-700 font-dancing-script">
                          {qty}
                        </span>
                        <button className="text-gray-500 focus:outline-none focus:text-green-900 focus:scale-105 transition-all transform">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => {
                              qty < 5 && setQty(qty + 1);
                            }}
                          >
                            <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
