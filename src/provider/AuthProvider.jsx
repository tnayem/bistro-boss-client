import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,  } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app) 
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading]= useState(true)
    // Create User
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // SignIn
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //Log Out
    const logOut = ()=>{
        setLoading(false)
        return signOut(auth)
    }
    // Updated User
    const updatedUser = (name,photo)=>{
      return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    // ******************
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,user=>{
            setUser(user)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe;
        }
    },[])
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        updatedUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;