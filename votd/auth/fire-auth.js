import React, { useContext, useState, useEffect, useReducer } from 'react'
import fire from '../config/firebase-config'

// Create a context for the firebase user
const user = useContext({
     user = null
})

// Auth Hook
const useAuth = () => {
     const [state, setState] = useState(() => {
          const user = fire.auth().currentUser;
          return {
               initalizing: !user,
               user
          }
     })

     // Handler for auth state changes
     function onChange(user) {
          setState({
               initalizing: false,
               user
          })
     }

     // React to any reloads
     useEffect(() => {
          // Subscribe to any state changes
          const unsubscribe = fire.auth().onAuthStateChanged(onChange)

          // This will get called for cleanup
          return () => unsubscribe()
     })

     return state
}




