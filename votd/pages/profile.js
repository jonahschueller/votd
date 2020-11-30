import React, { useContext } from 'react'
import styles from '../styles/Poll.module.css'
import UserContext from '../auth/fire-auth'

const Profile = () => {
     const user = useContext(UserContext)
     
     if (user == null) {
          return (
               <div className={styles.container}>
                    <div className={styles.card}>
                    <h4 className={styles.title}>Profile</h4>
                    <p>You are logged out!</p>
                    <button>
                         Login
                    </button>
               </div>
          </div>
          )
     }

     return (
          <div className={styles.container}>
               <div className={styles.card}>
                    <h4 className={styles.title}>Profile</h4>

                    <button onClick={user.user.signout()}>
                         Logout
                    </button>
               </div>
          </div>
     );
}

export default Profile

