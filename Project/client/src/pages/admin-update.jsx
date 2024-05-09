import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify";


export const AdminUpdate = () => {
    const [data, setData] = useState({
        username:"",
        email:"",
        phone:"",
    });

    const navigate = useNavigate();
    const params = useParams();
    const {authorizationToken} = useAuth();

    const getSingleUserData = async() => {
        try {
            const response = await fetch(`http://localhost:5000/admin/users/${params.id}`, 
        {
            method: "GET",
            headers: {Authorization: authorizationToken,},
        });
        const data = await response.json();
        console.log(`users SINGLE  ${data}`);
        setData(data);

    }catch (error) {
        console.log(error);
    } 

}
    useEffect(() => {
       getSingleUserData();
    }, []);

    //// handling input values 
    const handleInput = (e) => {     //event object
        let name = e.target.name;
        let value = e.target.value;

        setData({  // fill the credentials in the fields of user
            ...data,
            [name]: value, // making name dynamic to use it for each credential
        });
    };

    //// handling form submit
    const handleSubmit = async (e) => {
        e.preventDefault();  // stops refreshing
        try {
            const response = await fetch(`http://localhost:5000/admin/users/update/${params.id}`, 
            {
                method: "PATCH",
                headers: 
                {
                    "Content-Type": "application/json", 
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(data),
            });

            console.log('update: ',response);

            if (response.ok)
            {
                toast.success('Updated Successfully!')
                navigate('/admin/users')
                }else{
                    toast.error('Error!')
                }

        } catch (error) {
            console.log('UPDATE', error);   
        }
    }


    return (
        <>
        <section>
    <main>
        <div className="section-contact">
            <div className="contact-content container">
                <h1 className="main-heading mb-3">Update User data</h1>
            </div>
            <div className="container grid grid-two-cols">
            
                {/* <div className="contact-image">
                    <img src="/images/contact.jpg" alt="contact form" width="400" height="500" />
                </div> */}

                {/* Contact form  */}
                <div className="section-form">

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username: </label>
                            <input type="text" name="username" placeholder="username" id="username" autoComplete="off" value={data.username} onChange={handleInput} required/>
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="text" name="email" placeholder="enter your email" id="email" autoComplete="off" value={data.email} onChange={handleInput} required/>
                        </div>

                        <div>
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" name="phone" placeholder="phone" id="phone" autoComplete="off" value={data.phone} onChange={handleInput} required/>
                        </div>

                        <button type="submit" className="btn btn-submit"> Update </button>
                    </form>
                </div>
            </div>
        </div>
        </main>    
</section>
        </>
    )
    
}