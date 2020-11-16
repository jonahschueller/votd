import { fire } from "../config/firebase-config"
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const SignUp = () => {

     return (
          <div className={styles.container}>
               <h3>SignUp</h3>
               <span>
                    Alredy got an account 
                    <Link href="/login">
                         <a>
                              Login
                         </a>
                    </Link>
               </span>

          </div>
     );
}

export default SignUp;