import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthProviderContext = createContext(null);

const auth = getAuth(app);
const google = new GoogleAuthProvider();
const github = new GithubAuthProvider();

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, google);
    }
    const githubSignUp = () => {
        setLoading(true);
        return signInWithPopup(auth, github)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);
    const authInfo = {
        user,
        createUser,
        googleSignUp,
        githubSignUp,
        signIn,
        logOut,
        loading,
    }
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default Provider;