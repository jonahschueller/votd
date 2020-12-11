import React, { useState } from 'react'
import styles from "../styles/Search.module.css";
import Link from "next/link";

const apiURL = `${process.env.NEXT_PUBLIC_apiUrl}`

const Search = (props) => {

     const [result, setResult] = useState({ polls: props.polls })
     const [searchQuery, setSearchQuery] = useState(props.keyword)

     const search = (keyword) => {
          fetch(`${apiURL}/polls/search?keywords=${keyword}`)
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

     const onSearch = (event) => {
          if (event.key != 'Enter') {
               return
          }

          const query = event.target.value

          setSearchQuery(query)
          search(query);
     }

     const date = (poll) => {
          let date = new Date(poll.data.timestamp._seconds * 1000);
    
          return date.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
      }

     return (
          <div className="container">
               <div className={styles.search}>
                    <input 
                         type="text" 
                         value={searchQuery}
                         placeholder="Search..." 
                         className={styles.searchField}
                         onKeyDown={onSearch}/>
               </div>
               { result.polls && result.polls.length != 0 &&
                    <div>
                         <h4 className="title">Latest polls</h4>
                         <div className={styles.grid}>
                         {
                         result.polls.map(poll => {
                         return (
                              <Link href={`/poll/${poll.id}`}>
                                   <div className="card">
                                        <h5>{date(poll)}</h5>
                                        <h3 className={["title", styles.pollTitle]}>
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

export async function getServerSideProps(context) {
     const query = context.query

     if (query.keyword == null) {
          return { props: {
               polls: []
          }}
     }

     console.log(query.keyword)
     let res = await fetch(`${apiURL}/polls/search?keywords=${query.keyword}`)
     let poll = await res.json()

     return { props: {
               keyword: query.keyword,
               polls: poll.polls 
          }
     }
}

export default Search