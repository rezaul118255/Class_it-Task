import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import ProductDetails from "../Pages/Home/ProductDetails";

import Add from "../Pages/AddProduct/Add";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'addProduct',
                element: <Add></Add>

            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: "/product/:id",
                element: <ProductDetails />,
                // loader: ({ params }) => fetch(`https://classic-it-server-nu.vercel.app/Product/${params.id}`)
            },
        ]
    },
]);
export default router