import React, { useState } from 'react';
import fire from '../config/firebase-config';
import styles from '../styles/Home.module.css'

const Login = () => {

     const [user, setUser] = useState(null);

     const login = () => {
          fire.auth().signInAnonymously()
          .then(res => {
               setUser(res.user)
          })
     }

     const logout = () => {
          fire.auth().signOut()
          .then(res => {
               setUser(false)
          })
     }

     if (user) {
          return (
               <div className={styles.container}>
                    <p>You are logged in! Your id is {user.uid}</p>
                    <button onClick={logout}>Logout</button>
               </div>
          );
     }else {
          return (
               <div className={styles.container}>
                    <p>You are logged out!</p>
                    <button onClick={login}>Login</button>
               </div>
          );
     }
};

export default Login;
