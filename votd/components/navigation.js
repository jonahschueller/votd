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
                    <h4 className={styles.item}>Start</h4>
               </Link>
               <Link href="/search">
                    <h4 className={styles.item}>Search</h4>
               </Link>
               <Link href="/">
                    <h4 className={styles.item}>Add a poll</h4>
               </Link>
          </div>
     </nav>
     );
}

export default NavigationBar;

