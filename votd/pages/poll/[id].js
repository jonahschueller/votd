import React from 'react'
import styles from '../../styles/Poll.module.css'

const apiURL = 'https://us-central1-code-it-292909.cloudfunctions.net/votd-rest-API'

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