import { useEffect, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile} from "firebase/auth";
import initializeFirebase from "../firebase.init";
// import initializeFirebase from "../Pages/Firebase/firebase.init";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    // register user
    const registerUser = (email, password,name, navigate) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
            setAuthError('');
            const newUser = { email, displayName: name };

          setUser(newUser);
            // save user to db
          saveUser(email, name, 'POST');


            // send name to firebase 
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
               
              });


            navigate('/');
       
          })
          .catch((error) => {
          
            setAuthError(error.message)
          
          })
            .finally(() => setIsloading(false));
    }

    // login with email & password
    const login = (email, password, location, navigate) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const destination = location?.state?.from || '/';
      navigate(destination);
      setAuthError('');
  
  })
  .catch((error) => {
    
    setAuthError(error.message)
  })
           .finally(()=> setIsloading(false));

    }
    // login with google
    const googleSignin = (location, navigate) => {
        setIsloading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
         
          const user = result.user;
          saveUser(user?.email, user?.displayName, 'PUT');

            const destination = location?.state?.from || '/';
            navigate(destination);
          

          setAuthError('');
         
         

          }).catch((error) => {
           
            setAuthError(error.message);
           
          })
            .finally(()=> setIsloading(false));
    }


    // observe user
    useEffect(() => {

    const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
            
            } else {
                setUser({})
        }
        setIsloading(false);
    });
        return unsubscribe;
    } ,[auth])



    // logout
    const logout = () => {
        setIsloading(true);
        signOut(auth).then(() => {
           
          }).catch((error) => {
            
          })
            .finally(()=> setIsloading(false));
  }
  
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName }; 
    fetch('https://serene-everglades-89059.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user) 
    })
    .then()
  }

  useEffect(() => {
    fetch(`https://serene-everglades-89059.herokuapp.com/users/${user?.email}`)
      .then(res => res.json())
      .then(dt => setAdmin(dt?.admin))
  }, [user?.email])



    return {
      user,
      admin,
        registerUser,
        login,
        logout,
        isLoading,
        authError,
        googleSignin

    }
}

export default useFirebase;