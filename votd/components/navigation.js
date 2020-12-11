import React from 'react'
import Link from 'next/link'
import styles from '../styles/NavigationBar.module.css'

const NavigationBar = () => {
     return (
     <nav>
          <div className={styles.container}>
               <Link href="/">
                    <div className={styles.item}>
                         <h3 className={styles.itemText}>votd</h3>
                    </div>
               </Link>
               <Link href="/">
                    <div className={styles.item}>
                         <h4 className={styles.itemText}>Home</h4>
                    </div>
               </Link>
               <Link href="/search">
                    <div className={styles.item}>
                         <h4 className={styles.itemText}>Search</h4>
                    </div>
               </Link>
               <Link href="/">
               <div className={styles.item}>
                         <h4 className={styles.itemText}>New poll</h4>
                    </div>
               </Link>

               <Link href="/profile">
                    <div className={styles.profile}>
                         <i  class="fas fa-user fa-m"></i>
                    </div>
               </Link>
          </div>
     </nav>
     );
}

export default NavigationBar;

