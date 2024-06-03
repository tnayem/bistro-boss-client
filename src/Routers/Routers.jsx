import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../LayOut/Root/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRout from "./PrivateRout";
import Dashboard from "../LayOut/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/secret',
          element:<PrivateRout><Secret></Secret></PrivateRout>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRout><Dashboard></Dashboard></PrivateRout>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        }
      ]

    },
  ]);