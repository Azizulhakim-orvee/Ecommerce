import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import SingleTotal from "./SingleTotal";
import swal from "sweetalert";

const Total = () => {
  const {
    cartState: { cart },
  } = CartState();
  console.log(cart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const handleAddCart = () => {
    swal("Please login first!","  ", "error");;
  };

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <div className="">
          {cart.length === 0 ? (
            <div className="mt-52 font-dancing-script min-h-screen text-6xl text-center md:text-8xl p-20 text-red-700 animate-pulse">
              Cart is empty, please add some products!
            </div>
          ) : (
            <div>
              {cart.map((prod) => (
                <SingleTotal key={prod.id} prod={prod} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1 xl:block hidden">
        <div className="fixed">
          <div className="flex flex-col items-center justify-center min-h-screen ml-32">
            <div className="flex items-center justify-center">
              <p className="font-dancing-script text-6xl">Total = </p>
              <p className="ml-6 font-dancing-script text-6xl">
                {total.toFixed(2)}{" "}
                <svg
                  className="w-12 h-12 inline-block -mt-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>{" "}
              </p>
            </div>
            <button
              className="text-center justify-center items-center flex mt-12 mx-auto"
              onClick={handleAddCart}
            >
              <div className="hover:bg-black hover:text-white bg-green-700 hover:-skew-x-6 transition-all hover:scale-110 transform text-gray-200 p-4 rounded shadow-lg font-mono tracking-widest">
                <span class="uppercase">proceed to payment</span>
                <svg
                  className="w-6 h-6 inline-block ml-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total;
