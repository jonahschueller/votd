import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Poll.module.css'

const apiURL = `${process.env.NEXT_PUBLIC_apiUrl}`

const Poll = ({poll}) => {

     const date = (p) => {
          let d = new Date(p.data.timestamp._seconds * 1000);

          return d.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
     }

     return (
     <div className={styles.container}>
          <div className={styles.card}>
               <h3 className={styles.title}>{poll.data.title}</h3>

               <h5 className={styles.description}>{date(poll)}</h5>


               <div className={styles.keywordGrid}>
                    {poll.data.keywords.map((keyword) => {
                         return (
                         <Link href={`/search/?keyword=${keyword}`}>
                              <h4 className={styles.keyword}>{keyword}</h4>
                         </Link>
                         );
                    })}
               </div>
          </div>
     </div>);
}

export async function getServerSideProps(context) {
     const pid = context.query

     let res = await fetch(`${apiURL}/poll/${pid.id}`)
     let poll = await res.json()

     return { props: {
               poll: poll
          }
     }
}

export default Poll