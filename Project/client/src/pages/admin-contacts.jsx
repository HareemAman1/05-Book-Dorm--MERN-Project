import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify";

export const AdminContact = () => {

    const [contacts, setContacts] = useState([]);

    const {authorizationToken} = useAuth();

    const getAllUsersContact = async() => {
        try {
            const response = await fetch('http://localhost:5000/admin/contacts', 
        {
            method: "GET",
            headers: {Authorization: authorizationToken,},
        });
        const data = await response.json();
        console.log(`contacts: ${data}`);
        setContacts(data);
            
        } catch (error) {
            console.log(error);
        }
    };

    // DELETE
    const deleteUser = async(id) => {
        try {
            const response = await fetch(`http://localhost:5000/admin/contacts/delete/${id}`, 
        {
            method: "DELETE",
            headers: {Authorization: authorizationToken,},
        });
        const data = await response.json();
        console.log(`users after delete ${data}`);

        if(response.ok){
            getAllUsersContact();
            toast('Deleted Successfully!');
        }
    }catch (error) {
        console.log(error);
    } 
}

    useEffect(() => {
       getAllUsersContact();
    }, []);

    return <>
    <section className="admin-users-section">
        <div className="container">
            <h1 className="main-heading">Admin Users Contacts</h1>
        </div>
        <div className="container admin-contacts">
        {contacts.map((curContact, index) => {
                            return (
                                <div className="data" key={index}> 
                                <p><b>Name: </b> {curContact.username}</p>
                                <p><b>Email: </b> {curContact.email}</p>
                                <p><b>Message: </b> {curContact.message}</p>
                                
                                <button onClick={() => deleteUser(curContact._id)}>Delete</button>
                                </div>
                            );   
                        })}
        
        </div>
    </section>
       
    
    </>
}
