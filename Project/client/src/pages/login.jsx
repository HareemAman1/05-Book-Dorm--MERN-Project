import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () => {

    const [user, setUser] = useState({
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

        })
    }

    //// handling form submit
    const handleSubmit = async (e) => {
        e.preventDefault();  // stops refreshing
        // alert(user);
        console.log(user);
        try {
            const response = await fetch(`http://localhost:5000/login`, 
            {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(user),
            });

            console.log('login form',response);

            const res_data = await response.json();
            console.log('response from server', res_data);

            if (response.ok)
            {
                toast('Login Successful')  
                storetokenInLS(res_data.token);

                setUser({email:"",password:""});
                navigate('/')
                }else{
                    toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
                }

        } catch (error) {
            console.log('login', error);   
        }
        
    }


    return <>
            <section>
                <main>
                    <div className="section-login">
                        <div className="container grid grid-two-cols">
                            <div className="register-image">
                                <img src="/images/login.jpg" alt="login form" width="400" height="500" />
                            </div>

                            {/* Registeration form  */}
                            <div className="login-form">
                                <h1 className="main-heading mb-3">Login Form</h1>
                                <br />

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="text" name="email" placeholder="enter your email" id="email" autoComplete="off" value={user.email} onChange={handleInput} required/>
                                    </div>

                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input type="password" name="password" placeholder="password" id="password" autoComplete="off" value={user.password} onChange={handleInput} required/>
                                    </div>
                                    <button type="submit" className="btn btn-submit"> Login </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
         </>
};