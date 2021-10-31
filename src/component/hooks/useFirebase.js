import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/Firebase.init";

firebaseAuthentication();

const useFirebase =() =>{
    const [user,setUser] = useState({});
    const [IsLoading,setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = ()=>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
        .finally( ()=>setIsLoading(false));
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return ()=> unsubscribe;
    },[])

    const logOut = ()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally( ()=> setIsLoading(false));
    }

    return{
        user,
        IsLoading,
        signInUsingGoogle,
        logOut
    }   
}
export default useFirebase;