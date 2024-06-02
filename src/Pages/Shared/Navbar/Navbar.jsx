import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then({})
            .catch(err => console.error(err))
    }
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link ></li>
        <li><Link to='/order/salad'>Order Food</Link ></li>
        <li><Link to='/secret'>Secret</Link ></li>
        <li>
            <Link to='/'>
                <button className="btn btn-xs">
                <FaCartPlus />
                    <div className="badge badge-secondary">+0</div>
                </button>
            </Link >
        </li>

        {
            user ?
                <li><Link onClick={handleLogOut}>Log Out</Link ></li>
                :
                <li><Link to='/login'>LogIn</Link ></li>
        }
    </>
    return (
        <div className="">
            <div className="container mx-auto">
                <div className="navbar bg-black fixed md:w-[79%] lg:w-[95%] text-white z-10 opacity-50 1/2">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Bistro Boss</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;