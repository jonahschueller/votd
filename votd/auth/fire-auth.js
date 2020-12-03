import React, { useContext, useState, useEffect, createContext, useReducer } from 'react'
import firebase from '../config/firebase-config'

// Create a context for the firebase user
const UserContext = createContext();

export function AuthProvider({children}) {
     const auth = useProvideAuth()

     return <UserContext.Provider value={auth}>{children}</UserContext.Provider>
}

export function useAuth() {
     return useContext(UserContext)
}

// Auth Hook
const useProvideAuth = () => {
     const [user, setUser] = useState(null)

     // Handler for auth state changes
     function onChange(user) {
          console.log('Update')
          setUser(user)
     }

     const signInAnonymously = () => {
          console.log('Log in!')
          return firebase.auth().signInAnonymously()
                    .then((res) => setUser(res.user))
     }

     const signInWithEmailAndPassword = (email, password) => {
          console.log('Log in!')
          return firebase.auth().signInWithEmailAndPassword(email, password)
                    .then((res) => setUser(res.user))
     }

     const signUpWithEmailAndPassword = (email, password) => {
          return firebase.auth().signUpWithEmailAndPassword(email, password)
                    .then((res) => setUser(res.user))
     }

     const signOut = () => {
          console.log('Log out!')
          return firebase.auth().signOut()
                    .then(() => setUser(false))
     }

     // React to any reloads
     useEffect(() => {
          // Subscribe to any  state changes
          const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
               console.log(`Auth state changed: ${user}`)
               setUser(user)
          })
          console.log('sub')
          // This will get called for cleanup
          // return () => unsubscribe()
     }, [])

     return {
          user,
          signInAnonymously,
          signInWithEmailAndPassword,
          signUpWithEmailAndPassword,
          signOut
     }
}


