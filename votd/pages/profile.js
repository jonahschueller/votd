import React from 'react'
import fire from '../config/firebase-config'
import styles from '../styles/Poll.module.css'

const Profile = () => {

     if (fire.auth().currentUser == null) {
          
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

