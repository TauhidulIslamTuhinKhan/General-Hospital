import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [isSignin, setisSignin] =useState(false);

    const auth = getAuth();

    
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(user);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const signout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);


      const handleNameChange = (e) =>{
        setName(e.target.value);
      }
      const handleEmailChange = (e) => {
        setEmail(e.target.value);  
      }
      const handlePasswordChange =(e) => {
        setPassword(e.target.value);
      }
      const signIn = (e) => {
          setisSignin(e.target.checked);
      }

      const handleSignup =(e) => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6){
          setError('Password must be at least 6 charecter long')
          return;
        }
        if (!/(?=.*\d)/.test(password)) {
          setError('Password should contain at least one digit')
          return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
          setError('Password should contain at least one upper case')
          return;
        }
        
        isSignin? processSignin(email, password) : createNewUser(email, password);
        
      }
      
      const processSignin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
        })
        .catch(error => {
          setError(error.message);
        })
      }
      const setUserName =() => {
        updateProfile(auth.currentUser, {displayName : name})
        .then(result=>{ })
      }
      const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');         
          setUserName();
        })
        .catch(error =>{
          setError(error.message);
        })
      }
      
      
     



    return {
        user,
        error,
        signIn,
        signout,
        signInWithGoogle,
        name,
        email,
        password,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleSignup
        
    }
}




export default useFirebase;