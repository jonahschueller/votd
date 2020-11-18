import React from 'react'
import fire from '../config/firebase-config'
import styles from '../styles/Poll.module.css'

import useAuth from '../auth/fire-auth'

const Profile = () => {

     const user = useAuth()

     if (user == null) {
          return (
               <h3>Loading...</h3>
          )
     }

     const signout = () => {
          fire.signout()
     }

     return (
          <div className={styles.container}>
               <div className={styles.card}>
                    <h4 className={styles.title}>Profile</h4>

                    <button>
                         Logout
                    </button>
               </div>
          </div>
     );
}

export default Profile

