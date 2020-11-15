import React from 'react'
import Link from 'next/link'
import styles from '../styles/NavigationBar.module.css'

const NavigationBar = () => {
     return (
     <nav>
          <div className={styles.container}>
               <Link href="/">
                    <h3 className={styles.logo}>votd</h3>
               </Link>
               <Link href="/">
                    <div className={styles.item}>
                         <div className={styles.overlay}>
                              <i class="fas fa-home fa-sm"></i>   
                         </div>
                         <h4 className={styles.itemText}>Home</h4>
                    </div>
               </Link>
               <Link href="/search">
                    <div className={styles.item}>
                         <div className={styles.overlay}>
                              <i class="fas fa-search fa-sm"></i>
                         </div>
                         <h4 className={styles.itemText}>Search</h4>
                    </div>
               </Link>
               <Link href="/">
               <div className={styles.item}>
                         <div className={styles.overlay}>
                              <i class="fas fa-plus fa-sm"></i>
                         </div>
                         <h4 className={styles.itemText}>New poll</h4>
                    </div>
               </Link>

               <Link href="/profile">
                    <div className={styles.profile}>
                         <i  class="fas fa-user fa-lg"></i>
                    </div>
               </Link>
          </div>
     </nav>
     );
}

export default NavigationBar;

