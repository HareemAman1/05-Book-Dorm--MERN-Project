import { useAuth } from "../store/auth";

export const Collection = () => {

    const { collections } = useAuth();

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading"> Collections </h1>
            </div>
            <div className="container grid grid-three-cols">
                {collections.map((curElem, index) => {
                    const {name, genre, author, number_of_books} = curElem;
                    return (
                    <div className="card" key={index}>
                        <div className="card-img">
                            <img src="/images/book.jpg" alt="service" width='400'/>
                        </div>

                        <div className="card-details">
                            <div className="grid grid-two-cols">
                                <p>{genre}</p>
                                <p>{number_of_books}</p>
                            </div>
                            <h2>Name: {name}</h2>
                            <p>Author: {author}</p>
                        </div>
                    </div>
                );
                })}


            </div>
        </section>

    );
};