import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";

const SingleTotal = ({ prod }) => {
  const { cartDispatch } = CartState();
  const [prodTotal, setProdTotal] = useState(null);
  const [qty, setQty] = useState(prod.qty);

  useEffect(() => {
    setProdTotal(Number(prod.price) * qty);
  }, [qty]);

  return (
    <div>
      <div className="relative text-center mb-4 p-2 border border-gray-300 flex items-center justify-center gap-4">
        <img src={prod.image} alt="" className="max-w-md max-h-44" />
        <div>
          <p className="font-bold">{prod.title}</p>
          <div className="flex gap-9 text-lg mt-6">
            <div>
              <p className="font-semibold font-mono text-gray-500">Price</p>
              <p>{prod.price}</p>
            </div>

            <div>
              <div className="font-semibold font-mono text-gray-500">
                Quantity
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 hover:bg-black rounded-lg shadow-lg hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    qty > 1 && setQty(qty - 1);
                    cartDispatch({type: "CHANGE_CART_QTY", payload: {qty: qty > 1? (qty-1): (qty), id:prod.id}})
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>

                <p>{qty}</p>

                <svg
                  className="w-6 h-6 hover:bg-black rounded-lg shadow-lg hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    qty < 5 && setQty(qty + 1);
                    cartDispatch({type: "CHANGE_CART_QTY", payload: {qty: qty < 5? (qty+1): (qty), id:prod.id}})
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>

            <div>
              <div className="font-semibold font-mono text-gray-500">Total</div>
              <p className="font-bold">{prodTotal}</p>
            </div>
          </div>
        </div>
        <p className="absolute right-2 top-2 rounded-full p-2 cursor-pointer group bg-red-500 hover:bg-red-900">
          <svg
            className="w-6 group-hover:opacity-70 text-white"
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
      </div>
    </div>
  );
};

export default SingleTotal;
