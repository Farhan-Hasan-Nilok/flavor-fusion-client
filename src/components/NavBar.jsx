import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
const NavBar = () => {
    const { user, logOut } = useContext(UserContext);

    const handleLogOut = () => {
        logOut()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='blog'>Blog</Link>
                            </li>
                            <li>
                                {
                                    user && <button onClick={handleLogOut}>Logout</button>
                                }
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Flavor <span className="text-[#d51b28]">Fusion</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li>
                            <Link to='blog'>Blog</Link>
                        </li>
                        <li>
                           {
                                user && <button onClick={handleLogOut}>Logout</button>
                           }
                        </li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.photoURL ? <img src={user.photoURL} alt="" className="w-8 h-8 rounded-full" title={user.displayName}/>
                            : <Link to='/login' className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;