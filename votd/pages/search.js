import React, { useState } from 'react'
import styles from "../styles/Search.module.css";
import Link from "next/link";

const apiURL = 'https://us-central1-code-it-292909.cloudfunctions.net/votd-rest-API'

const Search = () => {

     const [result, setResult] = useState({ polls: null })

     const onSearch = (event) => {
          if (event.key != 'Enter') {
               return
          }

          const query = event.target.value
          console.log(`${apiURL}/polls/search?keywords=${query}`)
          fetch(`${apiURL}/polls/search?keywords=${query}`)
          .then(res => {
               res.json().then(data => {
                    setResult({
                         polls: data.polls
                    });
               }).catch(err => {
                    console.log(err)
               });
          }).catch(err => {

          })
     }

     const date = (poll) => {
          let date = new Date(poll.data.timestamp._seconds * 1000);
    
          return date.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
      }

     return (
          <div className={styles.container}>
               <div className={styles.search}>
                    <input 
                         type="text" 
                         placeholder="Search..." 
                         className={styles.searchField}
                         onKeyDown={onSearch}/>
               </div>
               { result.polls &&
                    <div>
                         <h4 className={styles.title}>Latest polls</h4>
                         <div className={styles.grid}>
                         {
                         result.polls.map(poll => {
                         return (
                              <Link href={`/poll/${poll.id}`}>
                                   <div className={styles.card}>
                                        <h5>{date(poll)}</h5>
                                        <h3 className={[styles.title, styles.pollTitle]}>
                                             {poll.data.title}
                                        </h3>
                                        <h4 className={styles.pollDescription}>
                                             {poll.data.votes} votes
                                        </h4>
                                        <div className={styles.keywordGrid}>
                                             {poll.data.keywords.map((keyword) => {
                                             return <h4 className={styles.keyword}>{keyword}</h4>;
                                             })}
                                        </div>
                                   </div>
                              </Link>
                         );
                         })
                         }
                         </div>
                    </div>
               }
          </div>
     );
}


export default Search