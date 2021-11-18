import { lazy } from "react";

const Home = lazy(() => import('../pages/Home.page'))
const Cart = lazy(()=> import('../pages/Cart.page'))


export const routes = [
    {
        name: 'Home',
        path: '/',
        element: <Home />
    },
    {
        name: 'Home',
        path: '/home',
        element: <Home />
    },
    {
        name: 'Cart',
        path: '/cart',
        element: <Cart />
    },

]