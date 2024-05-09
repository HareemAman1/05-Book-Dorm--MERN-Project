import { Analytics } from "../component/Analytics";
import { NavLink } from "react-router-dom";

export const Home = () => {
    return(
        <>
        <main>
            {/* 1st Section  */}
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                     <div className="hero-content">    {/* left side */}
                        <p><b>A comfort zone for introverts</b></p>
                        <h1>Welcome to Book-Dorm</h1>
                        <p className="cap">Welcome to our book website, where pages unfold into adventures and words weave stories that transport you to realms unknown. Dive into our curated collection spanning genres from fantasy to romance, mystery to memoir. Whether you seek the thrill of suspense or the solace of poetry, our shelves hold treasures for every reader. Immerse yourself in the magic of storytelling as you explore tales crafted by both renowned authors and emerging voices, each page brimming with possibility and wonder. Let your imagination roam free as you embark on literary journeys that captivate the mind and stir the soul. With every book, a new world awaits. Explore, discover, and lose yourself in the pages of boundless imagination. Welcome to your next adventure. </p> 


                        <div className="btn btn-group">
                        <NavLink to='/login'><button className="btn">connect now</button></NavLink>
                        <NavLink to='/about'><button className="btn secondary-btn">learn more</button></NavLink>
                        </div>
                    </div>

                    {/* hero images  */}
                    <div className="hero-image"> 
                        <img src="/images/home.jpg" alt="library" width='400' height='500' />
                    </div>
                </div>
            </section>

            {/* 2nd Section  */}
            <Analytics />

            {/* 3rd Section  */}
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    {/* hero images  */}
                    <div className="hero-image"> 
                        <img src="/images/register.jpg" alt="library" width='400' height='500' />
                    </div>

                     <div className="hero-content">    {/* left side */}
                        <p><b>Explore the world of books now!</b></p>
                        <h1>The Book Club</h1>
                        <p className="cap">Register yourself now and step into the world dedicated to all the book lovers. Pour in your suggestions and let us know what other books we should add to our collection . </p> 


                        <div className="btn btn-group">
                        <NavLink to='/register'><button className="btn">register now</button></NavLink>
                        <NavLink to='/about'><button className="btn secondary-btn">learn more</button></NavLink>
                        </div>
                    </div>

                </div>
            </section>
        </main>
        </>
    )
};