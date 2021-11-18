import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,

} from "react";
import axios from "axios";
import { cartReducer } from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {
  
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const getAllProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    // const results = data.map((v) => ({...v, qty:1}))
    cartDispatch({ type: "UPDATE", payload: data})
   
  };

  useEffect(() => {
    getAllProducts();
  }, []);



  return (
    <Cart.Provider value={{ cartState, cartDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
