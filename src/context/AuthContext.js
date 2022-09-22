import {useContext,createContext, useEffect,useState} from 'react';
import { 
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from '../firebase';

const AuthContext =createContext();

export const AuthContextProvider=({children})=>{
    const [user, setUser] = useState({});

    const googleSignInPopUp=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider);
    };
    const googleSignInRedirect=()=>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider);
    };
    
    const logOut=()=>{
        signOut(auth);
    };

    useEffect(() => {
      const Unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser);
         console.log(currentUser);
      });
      return () => {
        Unsubscribe();
      }
    }, [])
    
     return (
        <AuthContext.Provider value={{googleSignInPopUp,googleSignInRedirect,logOut,user}}>
                {children}
        </AuthContext.Provider>
     );
};

export const UserAuth=()=>{
    return useContext(AuthContext);
};