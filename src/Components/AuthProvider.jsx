import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userLogOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
            });
    }
    const googleLogin = () => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser)
            setLoading(false)
        });

        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        auth,
        user,
        loading,
        createUser,
        loginUser,
        userLogOut,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;