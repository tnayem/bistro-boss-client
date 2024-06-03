import { FaCartPlus, FaList } from "react-icons/fa6";
import { FaCalendar, FaHamburger, FaHome } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
    const [cart]= useCart()
    return (
        <div className="container mx-auto">
            <div className="flex">
                {/* Dashboard side bar */}
                <div className="w-64 min-h-screen bg-orange-400">
                    <ul className="menu">
                        <li><NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink></li>
                        <li><NavLink to='/dashboard/reservation'><FaCalendar /> Reservation</NavLink></li>
                        <li><NavLink to='/dashboard/cart'><FaCartPlus /> My Cart ({cart.length})</NavLink></li>
                        <li><NavLink to='/dashboard/review'><IoStarSharp /> Add Review</NavLink></li>
                        <li><NavLink to='/dashboard/bookings'><FaList /> My Booking</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                        <li><NavLink to='/order/salad'><FaHamburger /> Menu</NavLink></li>
                    </ul>
                </div>
                {/* Dashboard Content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;