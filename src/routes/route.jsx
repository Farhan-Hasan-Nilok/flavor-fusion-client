import {
    createBrowserRouter,
 } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import ChefDetails from "../pages/ChefDetails";
// import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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
                element: <ChefDetails/>,
                loader: ({ params }) => fetch(`https://flavor-fusion-server-alpha.vercel.app/chef/${params.id}`)
            },
            {
                path: 'login',
                element: <Login />
            },
        ]
    },
]);


export default router;