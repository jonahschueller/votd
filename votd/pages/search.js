import React from 'react'
import styles from "../styles/Search.module.css";

const Search = () => {
     return (
          <div className={styles.container}>
               <div className={styles.search}>
                    <input type="text" placeholder="Search..." className={styles.searchField}/>
               </div>
          </div>
     );
}


export default Search