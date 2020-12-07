import React, { useState } from 'react'
import styles from '../styles/Login.module.css'
import { useRouter } from 'next/router'
import { useAuth } from '../lib/auth/fire-auth'
import Link from 'next/link'

const SignUp = () => {
     const user = useAuth()
     const router = useRouter()

     const [email, setEmail] = useState(null)
     const [password, setPassword] = useState(null)
     const [passwordControl, setPasswordControl] = useState(null)
     const [error, setError] = useState(null)

     // If the user is logged in -> redirect him to the profile page
     if (user.user) {
          // Make sure we are in the browser
          if (typeof window !== 'undefined') {
               router.back()
          }
          
          return <></>;
     }

     const handleEmailChange = (event) => {
          const val = event.target.value
          setEmail(val)
     }

     const handlePasswordChange = (event) => {
          const val = event.target.value
          setPassword(val)
     }

     const handlePasswordControlChange = (event) => {
          const val = event.target.value
          setPasswordControl(val)
     }

     const handleSubmit = (event) => {
          event.preventDefault()

          if (password != passwordControl) {

               setError('*Repeated password does not match!')

               return
          }

          user.createUserWithEmailAndPassword(email, password)
          .then(user => {
               router.back()
          }).catch(err => {
               console.log(err)
               setError('*Username or password is not correct!')
          })
     }

     return (
          <div className="container">
               <div className="card">
                    <h4 className="title">Sign up</h4>
                    <div className={styles.loginForm}>
                         <form onSubmit={event => handleSubmit(event)}>
                              <input
                                   className={`${styles.formItems} ${styles.formInput} `} 
                                   type="text" 
                                   placeholder="Email"
                                   onChange={event => handleEmailChange(event)}>
                              </input>
                              <input
                                   className={`${styles.formItems} ${styles.formInput} `} 
                                   type="password" 
                                   name="Password"
                                   placeholder="Password"
                                   onChange={event => handlePasswordChange(event)}>
                              </input>

                              <input
                                   className={`${styles.formItems} ${styles.formInput} `} 
                                   type="password" 
                                   name="Password"
                                   placeholder="Repeat password"
                                   onChange={event => handlePasswordControlChange(event)}>
                              </input>

                              { error != null ? 
                              <p className={styles.errorMsg}>{error}</p> 
                              : <></> }

                              <button
                                   className={`${styles.formItems} ${styles.formSubmit} ${styles.formButton}`} 
                                   type="submit">
                                        Sign Up
                              </button>

                              <Link href="/login">
                                   <a
                                   className={`${styles.formItems} ${styles.formSignUp} ${styles.formButton}`}>
                                   Log in
                                   </a>
                              </Link>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default SignUp;