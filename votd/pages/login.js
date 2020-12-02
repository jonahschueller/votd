import React, { useState } from 'react';
import styles from '../styles/Poll.module.css'
import { useRouter } from 'next/router'
import { useAuth } from '../auth/fire-auth';

const Login = () => {
     const user = useAuth()
     const router = useRouter()

     const [email, setEmail] = useState(null)
     const [password, setPassword] = useState(null)

     const login = () => {
          user.signInAnonymously()
          .then(res => {
               router.back()
          })
     }

     // If the user is logged in -> redirect him to the profile page
     if (user.user) {
          // Make sure we are in the browser
          if (typeof window !== 'undefined') {
               router.push('/profile')
          }
          
          return <></>;
     }

     const handleEmailChange = (event) => {
          const val = event.value
          setEmail(val)
     }

     const handlePasswordChange = (event) => {
          const val = event.value
          setPassword(val)
     }

     const handleSubmit = () => {

     }

     return (
          <div className={styles.container}>
               <div className={styles.card}>
                    <h4 className={styles.title}>Login</h4>
                    <form onSubmit={() => handleSubmit()}>
                         <input 
                              type="text" 
                              name="Email"
                              onChange={handleEmailChange}>
                         </input>
                         <input 
                              type="password" 
                              name="Password"
                              onChange={handlePasswordChange}>
                         </input>
                         <button type="submit">Login</button>
                    </form>
                    <button onClick={login}>Login</button>
               </div>
          </div>
     );
};

export default Login;

