import React, { useContext } from 'react'
import styles from '../styles/Poll.module.css'
import { useAuth } from '../auth/fire-auth'
import { useRouter } from 'next/router'

const Profile = () => {
     const user = useAuth()
     const router = useRouter()
     
     console.log(user)

     if (user.user == null) {

          // Make sure we are in the browser
          if (typeof window !== 'undefined') {
               router.push('/login')
          }

          return <></>;
     }

     return (
          <div className="container">
               <div className="card">
                    <h4 className="title">Profile</h4>
                    <p>You are logged in! {user.user.uid} f</p>
                    <button onClick={() => user.signOut()}>
                         Logout
                    </button>
               </div>
          </div>
     );
}

export default Profile

