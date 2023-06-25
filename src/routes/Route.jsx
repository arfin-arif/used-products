import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Page404 from "../pages/404/404";
import Users from "../pages/Dashboard/Users/Users";
import DashBoardLayout from "../layout/DashBoardLayeout/DashBoardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ProductList from "../pages/ProductList/ProductList";
import PostAdd from "../pages/PostAdd/PostAdd";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/post-adds',
                 element:<PrivateRoute><PostAdd></PostAdd></PrivateRoute>
            },
        
            {
                path: '/product-list',
                element: <ProductList/>
            },
            {
                path: '/details/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5050/api/products/${params.id}`)
            }
            ,
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute> <DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children:
            [
                {
                    path: '/dashboard',
                    element: <Dashboard />
                },
                {
                    path: '/dashboard/users',
                    element: <Users />
                },
            ]
    },
    {
        path: '*',
        element: <Page404></Page404>
    }
])