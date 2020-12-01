import React, { useContext } from 'react'
import styles from '../styles/Poll.module.css'
import { useAuth } from '../auth/fire-auth'

const Profile = () => {
     const user = useAuth()
     
     console.log(user)

     if (user.user == null) {
          return (
               <div className={styles.container}>
                    <div className={styles.card}>
                    <h4 className={styles.title}>Profile</h4>
                    <p>You are logged out!</p>
                    <button onClick={() => user.signIn()}>
                         Login
                    </button>
               </div>
          </div>
          );
     }

     return (
          <div className={styles.container}>
               <div className={styles.card}>
                    <h4 className={styles.title}>Profile</h4>
                    <p>You are logged in! {user.user.uid} f</p>
                    <button onClick={() => user.signOut()}>
                         Logout
                    </button>
               </div>
          </div>
     );
}

export default Profile

