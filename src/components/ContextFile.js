import { createContext, useEffect,useState } from "react";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
   onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import toast from "react-hot-toast";
export const AuthContext = createContext(null);
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handleSigin = async (email, password) => {
    try {
      const current = await signInWithEmailAndPassword(auth, email, password);
      if (current) {
        console.log(current);
        setUser(current.user);
      } else {
      }
    }
     catch (error) {
//     //   toast.error("input your email address");
  console.log(error);
 }
}
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      
      console.log(error.message);
    }
  };
   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       setUser(user);
     });
     return () => unsubscribe();
   }, []);
  return (
    <AuthContext.Provider
      value={{ user, handleSigin, handleLogOut, handleSignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};