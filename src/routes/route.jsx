import {
    createBrowserRouter,
 } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
// import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:3000/chefs')
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'login',
                element: <Login />
            },
        ]
    },
]);


export default router;