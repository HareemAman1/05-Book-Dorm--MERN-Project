import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");

    const[isLoading, setisLoading] = useState(true);

    const [collections, setCollections] = useState([]);

    const authorizationToken = `Bearer ${token}`;

    const storetokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token', serverToken);
    }
    let isLoggedin = !!token;
    console.log('isloggedin', isLoggedin);



    // LOGOUT 
    const Logoutuser = () => {
        setToken('');
        localStorage.removeItem('token'); //removing token will cause logout
        setUser("");
    }



    // AUTHENTICATION : to get currently logged in user's data 
    const userAuthentication = async() => {
        try {
            setisLoading(true);
            const response = await fetch("http://localhost:5000/user", 
            {
                method: "GET",
                headers: {Authorization: authorizationToken,}

            });
            if(response.ok){
                const data = await response.json();
                console.log('user data', data.userdata);
                setUser(data.userdata);
                setisLoading(false);
            }else{
                console.error("error fetching user data");
                setisLoading(false)
            }
        } catch (error) {
            console.error('error fetching user data');
        }
    }

    // to fetch collections 
    const getCollections = async() => {
        try {
            const response = await fetch('http://localhost:5000/collections',
            {
                method: "GET",
            });
            if(response.ok){
                const data= await response.json();
                console.log(data);
                setCollections(data)
            }
        } catch (error) {
            console.log('collection frontend error', error); 
        }
    }
    useEffect(() => {
        getCollections();
        userAuthentication();    
    }, [token]);

    // STORING TOKEN IN LOCAL STORAGE 
    return (
        <AuthContext.Provider value={{isLoggedin, storetokenInLS, Logoutuser, user, collections, authorizationToken, isLoading}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {

    const authContextValue = useContext(AuthContext)
    if(!authContextValue){
        throw new Error('useAuth used outside of the provider');
    }
    return authContextValue;
}