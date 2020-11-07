import Head from 'next/head'
import Link from "next/link";
import React from 'react'
import styles from '../styles/Home.module.css'

const apiURL = 'https://us-central1-code-it-292909.cloudfunctions.net/votd-rest-API'


class Home extends React.Component {

  static async getInitialProps(ctx) {
    let resLatest = await fetch(`${apiURL}/polls/latest`)
    let latestPolls = await resLatest.json()
    
    let resPopular = await fetch(`${apiURL}/polls/popular`)
    let popularPolls = await resPopular.json()


    return {
      latest: latestPolls.polls.reverse(),
      popular: popularPolls.polls
    }
  }

  date(poll) {
      let date = new Date(poll.data.timestamp._seconds * 1000);

      return date.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
  
        <h4 className={styles.title}>Latest polls</h4>
          <div className={styles.grid}>
          {
            this.props.latest.map(poll => {
              return (
                <Link href={`poll/${poll.id}`}>
                  <div className={styles.card}>
                    <h5>{this.date(poll)}</h5>
                    <h3>{poll.data.title}</h3>
                  </div>
                </Link>
              );
            })
          }
          </div>
  
          <h4 className={styles.title}>Popular polls</h4>
          <div className={styles.grid}>
          {
            this.props.popular.map(poll => {
              return (
                <Link href={`poll/${poll.id}`}>
                  <div className={styles.card}>
                    <h5>{this.date(poll)}</h5>
                    <h3>{poll.data.title}</h3>
                  </div>
                </Link>
              );
            })
          }
          </div>
        </main>
  
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    )
  }
  
}

export default Home