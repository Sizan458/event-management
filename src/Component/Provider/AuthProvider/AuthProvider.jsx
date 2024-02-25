import { createContext, useEffect, useState } from "react";
import { getAuth,GoogleAuthProvider ,signInWithPopup,createUserWithEmailAndPassword ,onAuthStateChanged, signOut, signInWithEmailAndPassword  } from "firebase/auth";
import App from "../../Firebase/Firebase";
 

export const AuthContext = createContext(null)
const auth = getAuth(App)
const AuthProvider = ({children}) => {
  const[user,setUser]=useState(null)
  const[loading,setLoading]=useState(true)
 const googleProvider =  new GoogleAuthProvider();
// google function
 const googleSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
 }
 //email function
 const signInWithEmail=(email,password)=>{
  setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password);
 }
 //logout function
 const logOut=()=>{
  setLoading(true);
  return  signOut(auth);
 }
// login function
 const logIn=(email,password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password);
 }
// keep current user in session  function
 useEffect(()=>{
 const unSubscribe=   onAuthStateChanged(auth, currentUser=>{
      
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>{
      unSubscribe
    }
    
 },[])

  const authInfo={
    googleSignIn,
    signInWithEmail,
    user,
    logOut,
    logIn,
    loading
  }
    
    return (
        <div>
           <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;