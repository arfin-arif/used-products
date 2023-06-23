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
                path: '/active-order',
  
            },
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '/update-product/:id',
                // element: <UpdateProduct></UpdateProduct>,
                // loader: ({ params }) => fetch(`http://localhost:5000/api/products/by-id/${params.id}`)
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
                    path: '/dashboard/registered-startup',
                    element: <Dashboard />
                }
            ]
    },
    {
        path: '*',
        element: <Page404></Page404>
    }
])