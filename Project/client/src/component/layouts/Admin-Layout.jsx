import { NavLink, Outlet, Navigate } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { HiCollection } from "react-icons/hi";
import { RiHome3Fill } from "react-icons/ri";
import { useAuth } from "../../store/auth";
// import "./Navbar.css";


export const AdminLayout = () => {
    const {user, isLoading} = useAuth();
    console.log("admin layout", user)

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if (!user.isAdmin){
        return <Navigate to='*'/>
    }
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul className="admin">
                            <li> <NavLink to="/admin/users"><FaUser /> users</NavLink></li>
                            <li> <NavLink to="/admin/contacts"><FaMessage /> contacts</NavLink></li>
                            <li> <NavLink to="/collection"><HiCollection /> collections</NavLink></li>
                            <li> <NavLink to="/"><RiHome3Fill /> homepage</NavLink></li>    
                        </ul>
                    </nav>
                </div>
            </header>

            <Outlet />
        </>
    );
};