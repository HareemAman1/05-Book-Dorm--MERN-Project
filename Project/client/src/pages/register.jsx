import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Register = () => {

    const [user, setUser] = useState({
        username:"",
        phone:"",
        email:"",
        password:""
    });

    const navigate = useNavigate();
    const {storetokenInLS} = useAuth();

    //// handling input values 
    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({  // fill the credentials in the fields of user
            ...user,
            [name]: value, // making name dynamic to use it for each credential

        });
    };

    //// handling form submit
    const handleSubmit = async (e) => {
        e.preventDefault();  // stops refreshing
        console.log(user);
        try {
            const response = await fetch(`http://localhost:5000/register`, 
            {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(user),
            });

            console.log('register',response);

            const res_data = await response.json();
            console.log('response from server: ', res_data.extraDetails);

            if (response.ok)
            {
                
                storetokenInLS(res_data.token);
                // localStorage.setItem('token', res_data.token);

                toast('Registeration Successful')
                setUser({username:"",phone:"",email:"",password:""});
                navigate('/')
                }else{
                    toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
                }
                // console.log(response);

        } catch (error) {
            console.log('register: ', error);   
        }
        }


    return <>
            <section>
                <main>
                    <div className="section-register">
                        <div className="container grid grid-two-cols">
                            <div className="register-image">
                                <img src="/images/register.jpg" alt="img" width="400" height="500" />
                            </div>

                            {/* Registeration form  */}
                            <div className="registeration-form">
                                <h1 className="main-heading mb-3">Registeration Form</h1>
                                <br />

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="user">username</label>
                                        <input type="text" name="username" placeholder="username" id="username" autoComplete="off" value={user.username} onChange={handleInput} required/>
                                    </div>

                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input type="number" name="phone" placeholder="write code (+92)" id="phone" autoComplete="off" value={user.phone} onChange={handleInput} required/>
                                    </div>

                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="text" name="email" placeholder="enter your email" id="email" autoComplete="off" value={user.email} onChange={handleInput} required/>
                                    </div>

                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input type="password" name="password" placeholder="password" id="password" autoComplete="off" value={user.password} onChange={handleInput} required/>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-submit"> Register Now </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
         </>
};