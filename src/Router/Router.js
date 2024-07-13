import { useContext } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Checkout from "../components/Checkout/Checkout";
import ContactUs from "../components/ContactUs/ContactUs";
import DetailsProducts from "../components/DetailsProduct/DetailsProducts";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Orders from "../components/Orders/Orders";
import ShopAllProducts from "../components/ShopAllProducts/ShopAllProducts";
import Signup from "../components/Signup/Signup";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shopallproducts",
        element: <ShopAllProducts></ShopAllProducts>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      // {
      //   path: "/especificproduct/:id",
      //   element: <PrivateRoute><DetailsProducts></DetailsProducts></PrivateRoute>,
      //   loader: async ({ params }) =>
      //     fetch(`http://localhost:5000/especificproduct/${params.id}`),
      // },
      {
        path: "/especipicproduct/:id",
        element: <PrivateRoute><DetailsProducts></DetailsProducts></PrivateRoute>,
        
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;
