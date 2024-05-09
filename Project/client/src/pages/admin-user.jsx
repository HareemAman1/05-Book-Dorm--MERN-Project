import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { Link } from "react-router-dom"
import { toast } from "react-toastify";

export const AdminUser = () => {

    const [users, setUsers] = useState([]);

    const {authorizationToken} = useAuth();

    const getAllUsersData = async() => {
        try {
            const response = await fetch('http://localhost:5000/admin/users', 
        {
            method: "GET",
            headers: {Authorization: authorizationToken,},
        });
        const data = await response.json();
        console.log(`users ${data}`);
        setUsers(data);
            
        } catch (error) {
            console.log(error);
        }
    };

    // DELETE
    const deleteUser = async(id) => {
        try {
            const response = await fetch(`http://localhost:5000/admin/users/delete/${id}`, 
        {
            method: "DELETE",
            headers: {Authorization: authorizationToken,},
        });
        const data = await response.json();
        console.log(`users after delete ${data}`);

        if(response.ok){
            getAllUsersData();
            toast('Deleted Successfully!');
        }else{
            toast.error('Admin cannot be deleted');
        }
    }catch (error) {
        console.log(error);
    } 

}
    useEffect(() => {
       getAllUsersData();
    }, []);

    return <>
    <section className="admin-users-section">
        <div className="container">
            <h1 className="main-heading">Admin Users Data</h1>
        </div>
        <div className="container admin-users">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {users.map((curUser, index) => {
                            return <tr key={index}>
                                <td>{curUser.username}</td>
                                <td>{curUser.email}</td>
                                <td>{curUser.phone}</td>
                                <td><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link></td>
                                <td><button onClick={() => deleteUser(curUser._id)}>Delete</button></td>
                            </tr> 
                        })}
                </tbody>
            </table>
        
        </div>
    </section>
       
    
    </>
}
