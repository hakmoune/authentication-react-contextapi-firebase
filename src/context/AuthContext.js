import { createContext, useState, useContext, useEffect } from "react";
import auth from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword
} from "firebase/auth";

const AuthContext = createContext(); // Create the Context API

const AuthProvider = ({ children }) => {
  //State qui va etre partager dans l'ensemble de notre appli
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  //This function create an account on Firebase
  //Return Promise
  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  //This function for desconnect
  //Return Promise
  const logout = () => {
    signOut(auth);
  };

  //This function for log in
  //Return Promise
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  //This Function Reset the password
  const resetPassword = email => {
    sendPasswordResetEmail(auth, email);
  };

  //Functions to update Profile Email and Paswword
  const updateUserEmail = email => {
    updateEmail(auth.currentUser, email);
  };

  const updateUserPassword = password => {
    updatePassword(auth.currentUser, password);
  };

  //Change State after each update to our user, Login, Logout..
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false); //ne pas afficher les composants tant que vous n'avez pas renseigné l'état avec le nouvel utilisateur
    });
    return () => unsubscribe(); // Clean User, you dan't passe any user so it will be empty
  }, []);

  // Pour englober l'ensemble de notre application et rendre l'état accessible dans toute l'application
  // Chidren = C'est Notre Application nos composants
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        logout,
        login,
        resetPassword,
        updateUserEmail,
        updateUserPassword
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; // Pour englober notre application

export const useAuth = () => useContext(AuthContext);

//https://www.youtube.com/watch?v=xv5PrW481hw&t=2128s
//1h24
