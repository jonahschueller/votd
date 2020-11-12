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
                         <h4 className={styles.itemText}>Home</h4>
                         <div className={styles.overlay}>
                              <i class="fas fa-home fa-lg"></i>   
                         </div>
                    </div>
               </Link>
               <Link href="/search">
                    <div className={styles.item}>
                         <h4 className={styles.itemText}>Search</h4>
                         <div className={styles.overlay}>
                              <i class="fas fa-search fa-lg"></i>
                         </div>
                    </div>
               </Link>
               <Link href="/">
               <div className={styles.item}>
                         <h4 className={styles.itemText}>Add a poll</h4>
                         <div className={styles.overlay}>
                              <i class="fas fa-plus fa-lg"></i>
                         </div>
                    </div>
               </Link>
          </div>
     </nav>
     );
}

export default NavigationBar;

