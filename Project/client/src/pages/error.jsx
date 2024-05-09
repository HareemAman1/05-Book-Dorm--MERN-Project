import { NavLink } from "react-router-dom"

export const Error = () => {
    return (
        <>
            <section id="error-page">
                <div className="content">
                    <h2 className="header"> 404 </h2> <br />
                    <h3>Sorry! Page not Found</h3>
                    <p>OOP! it seem like the page you are trying to reach does not exist.</p>
                    <p>If you believe that there is an issue then feel free to report it and we'll look into it.</p>
                    
                   <div className="btn btn-group">
                        <NavLink to='/'><button className="btn">return home</button></NavLink>
                        <NavLink to='/contact'><button className="btn secondary-btn">report problem</button></NavLink>
                    </div>
                </div>
            </section>
        
        </>
    );
};