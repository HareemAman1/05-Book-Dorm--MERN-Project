import { NavLink } from "react-router-dom";
import { Analytics } from "../component/Analytics";

import { useAuth } from "../store/auth";



export const About = () => {

    const {user} = useAuth();

    return( <>
        <main>
            {/* 1st Section  */}
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                     <div className="hero-content">    {/* left side */}
                        <p><b>Welcome, {user ? `${user.username} to our website` : ` to our website`}</b></p>
                        <h1>Why choose us?</h1>
                        <p className="cap">Welcome to our corner of literary discovery, where words are woven into pathways of imagination and enlightenment. At our core, we are passionate book enthusiasts dedicated to guiding readers through the labyrinth of literature.</p> 
                        <p>Our mission is simple: to connect you with the perfect book. Whether you're seeking a gripping mystery to unravel, a heartwarming tale to uplift your spirits, or an epic adventure to whisk you away to distant lands, we're here to curate personalized recommendations tailored to your unique tastes.</p>
                        <p>With a team of avid readers and bibliophiles, we sift through the pages of countless books to unearth hidden gems and timeless classics alike. Join us on this journey of exploration and enlightenment as we navigate the vast seas of storytelling together, one recommendation at a time.</p>  
                        <p>Welcome to a world where every page holds a new adventure, and every book recommendation is a gateway to discovery.</p> 

                        <div className="btn btn-group">
                        <NavLink to='/contact'><button className="btn">contact us</button></NavLink>
                        <NavLink to='/services'><button className="btn secondary-btn">learn more</button></NavLink>
                    </div>

                    </div>
    
                    {/* hero images  */}
                    <div className="hero-image"> 
                        <img src="/images/home.jpg" alt="library" width='400' height='500' />
                    </div>
                </div>
            </section>
            </main>
            
            {/* 2nd Section  */}
            <Analytics />
            </>
        );
};