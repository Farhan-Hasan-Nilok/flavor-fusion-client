import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div><NavBar/></div>
            <div><Outlet/></div>
            <div><Footer/></div>
        </div>
    );
};

export default MainLayout;