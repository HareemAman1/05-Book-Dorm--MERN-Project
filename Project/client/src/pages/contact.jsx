import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const Contact = () => {
    const [contact, setContact] = useState({
        username:"",
        email:"",
        message:""
    });

    const [userdata, setUserdata] = useState(true);
    const {user} = useAuth();

    if(userdata && user){
        setContact({
            username: user.username,
            email: user.email,
            message:""
        });
        setUserdata(false);
    }

    //// handling input values 
    const handleInput = (e) => {     //event object
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setContact({  // fill the credentials in the fields of user
            ...contact,
            [name]: value, // making name dynamic to use it for each credential
        })
    }

    //// handling form submit
    const handleSubmit = async (e) => {
        e.preventDefault();  // stops refreshing
        console.log(contact);
        try {
            const response = await fetch(`http://localhost:5000/contact`, 
            {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(contact),
            });

            console.log('contact',response);

            if (response.ok)
            {
                toast('Message Sent!')
                setContact({message:""});
                }else{
                    toast.error('Error!')
                }

        } catch (error) {
            console.log('contact', error);   
        }
    }

    return <>
            <section>
                <main>
                    <div className="section-contact">
                        <div className="contact-content container">
                            <h1 className="main-heading mb-3">Contact Form</h1>
                        </div>
                        <div className="container grid grid-two-cols">
                        
                            <div className="contact-image">
                                <img src="/images/contact.jpg" alt="contact form" width="400" height="500" />
                            </div>

                            {/* Contact form  */}
                            <div className="section-form">

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">Username: </label>
                                        <input type="text" name="username" placeholder="username" id="username" autoComplete="off" value={contact.username} onChange={handleInput} required/>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email: </label>
                                        <input type="text" name="email" placeholder="enter your email" id="email" autoComplete="off" value={contact.email} onChange={handleInput} required/>
                                    </div>

                                    <div>
                                        <label htmlFor="message">Message:</label>
                                        <textarea type="text" name="message" placeholder="message" id="message" cols='50' rows='10' autoComplete="off" value={contact.message} onChange={handleInput} required/>
                                    </div>

                                    <button type="submit" className="btn btn-submit"> Submit </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    </main>
                    <section className="mb-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.959416285219!2d73.09336457431559!3d30.663271288988586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b7eb9144431b%3A0xd5fa942bc8dfcca6!2sMeta%20Logix!5e0!3m2!1sen!2s!4v1710498966436!5m2!1sen!2s" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>     
            </section>
         </>
};