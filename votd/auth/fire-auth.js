import React, { useContext, useState, useEffect, createContext, useReducer } from 'react'
import fire from '../config/firebase-config'

// Create a context for the firebase user
const UserContext = createContext({
     user: null,
     signout: () => {}
});

// Auth Hook
const useAuth = () => {
     const [state, setState] = useState(() => {
          const user = fire.auth().currentUser;
          return {
               initalizing: !user,
               user: user,
               signout: () => {}
          }
     })

     const signout = () => {
          console.log('sig')
          fire.auth().signOut()
     }

     // Handler for auth state changes
     function onChange(user) {
          console.log('Update')
          setState({
               initalizing: false,
               user: user,
               signout: () => {}
          })
     }

     // React to any reloads
     useEffect(() => {
          // Subscribe to any  state changes
          const unsubscribe = fire.auth().onAuthStateChanged(onChange)

          // This will get called for cleanup
          return () => unsubscribe()
     }, [])

     return {
          state,
          signout
     }
}



export { useAuth }
export default UserContext

