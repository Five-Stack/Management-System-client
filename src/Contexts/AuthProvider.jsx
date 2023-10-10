import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  {/* ====Creter New User===== */ }
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  {/* ====Sign In Or LogIn  User===== */ }
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  {/* ====SignIn With Google===== */ }
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  {/* ====LogOut User===== */ }
  const logOut = () => {
    // setLoading(true)
    return signOut(auth)
  }

  {/* ====Update User Current Info===== */ }
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      // console.log('currentUser',currentUser);
      if (currentUser) {
        axios.post('https://summer-camp-school-server-two.vercel.app/jwt', { email: currentUser?.email })
          .then(data => {
            // console.log(data.data.token);
            if (data?.data) {
              localStorage.setItem('access-token', data?.data?.token)
              setLoading(false)
            }
          })
      }
      else {
        localStorage.removeItem('access-token')
        setLoading(false)
      }
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
