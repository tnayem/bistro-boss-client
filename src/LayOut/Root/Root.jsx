import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const Root = () => {
    const location = useLocation()
    const isLogin = location.pathname.includes("login")
    return (
        <div className="flex flex-col h-screen justify-between">
            { isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Root;