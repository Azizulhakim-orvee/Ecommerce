import React from 'react';
import { CartState } from '../context/Context';
import SingleProduct from './SingleProduct';

const Products = () => {
    const {cartState : {products}} = CartState()
  

    return (
        <>
        <div className="text-center font-extrabold text-5xl font-dancing-script text-">
            FEATURED PRODUCTS
        </div>
        <div className="flex flex-wrap justify-center gap-8 p-4">
            {
                products.map((prod) => (<SingleProduct key={prod.id} prod={prod}/> ))
            }
        </div>
        </>
    );
};

export default Products;