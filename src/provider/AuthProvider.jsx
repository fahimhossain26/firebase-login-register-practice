import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.confi";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const authContext=createContext(null)
const AuthProvider = ({ children }) => {
 const [user, setUser]=useState(null);
 
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

const signInUser= (email,password)=>{
    return signInWithEmailAndPassword(auth, email,password )
}



    const AuthInfo={user , createUser, signInUser} 
    return (
        <authContext.Provider value={AuthInfo}>
            {children}
        </authContext.Provider>
            
        
    );
};

export default AuthProvider;
AuthProvider.prototype={
    children: PropTypes.node
}

/**
 * 1.create context and export it.
 * 2.set provider with value 
 * 3. use the auth provider in tha main.js file
 * 4. acess children in the AuthProvider Component as a children and use 
 * it in the middle of the  Provider 
 * .*/