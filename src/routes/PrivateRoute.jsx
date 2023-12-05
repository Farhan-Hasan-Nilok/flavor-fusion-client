/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(UserContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-dots loading-lg flex justify-center"></span>
    }

    if(user){
        return children;
    }
    return (
        <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;