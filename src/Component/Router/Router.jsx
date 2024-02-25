import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../Homepage/Home/Home";
import NavBar from "../Homepage/NavBar/NavBar";
import Service from "../Service Page/Service/Service";
import AboutUs from "../AboutUs page/AboutUs/AboutUs";
import Booking from "../Booking page/Booking/Booking";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error from "../404 Route/Error";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const Router =  createBrowserRouter([
    {
        path: "/",
        element:<div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>,
         errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader:()=>fetch('/socialEvent.json'),
            },
            
            {
                path:'/about',
                element:<PrivateRoute>
                    <AboutUs></AboutUs>
                </PrivateRoute>
            },
            {
                path:'/booking',
                element:<PrivateRoute>
                    <Booking></Booking>
                </PrivateRoute>
            },
            {
                path:'/service/:id',
                element:<PrivateRoute>
                    <Service></Service>
                </PrivateRoute>,
                loader:()=>fetch('/socialEvent.json'),
            },
            {
               path:'/register' ,
               element:<Register></Register>
            },
            {
                path:'/logIn',
                element:<Login></Login>
            }


        ]
    },
   
])

export default Router;