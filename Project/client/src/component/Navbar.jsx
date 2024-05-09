import { NavLink } from "react-router-dom";  // to avoid reloading
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const {isLoggedin, user} = useAuth();
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to="/">♡Book-Dorm♡ </NavLink>
                    </div>

                    <nav>
                        <ul>
                            {/* instead of 'a href' use 'NavLink to' */}
                            <li><NavLink to="/"> Home </NavLink></li>
                            <li><NavLink to="/about"> About </NavLink></li>
                            <li><NavLink to="/collection"> Collection </NavLink></li>
                            <li><NavLink to="/contact"> Contact </NavLink></li>
                            {/* {
                                isLoggedin ? (<li><NavLink to="/logout"> Logout </NavLink></li>) : 
                                <> 
                                    <li><NavLink to="/register"> Register </NavLink></li>
                                    <li><NavLink to="/login"> Login </NavLink></li>
                                </>
                            } */}
                            
                            {
                                isLoggedin ? (
                                    <>
                                        {user.isAdmin && <li><NavLink to="/admin"> Admin </NavLink></li>}
                                        <li><NavLink to="/logout"> Logout </NavLink></li>
                                    </>
                                ) : 
                                <> 
                                    <li><NavLink to="/register"> Register </NavLink></li>
                                    <li><NavLink to="/login"> Login </NavLink></li>
                                </>
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};