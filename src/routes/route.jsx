import {
    createBrowserRouter,
 } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import ChefDetails from "../pages/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://flavor-fusion-server-alpha.vercel.app/chefs')
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><ChefDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://flavor-fusion-server-alpha.vercel.app/chef/${params.id}`)
            },

            {
                path: 'blog',
                element: <Blog />
            },

            {
                path: 'login',
                element: <Login />
            },
        ]
    },
]);


export default router;