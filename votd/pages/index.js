import Head from 'next/head'
import Link from "next/link";
import React from 'react'
import styles from '../styles/Home.module.css'

const apiURL = `${process.env.NEXT_PUBLIC_apiUrl}`


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
      <div className="container">
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
                <Link as={`poll/${poll.id}`} href='poll/[id]'>
                  <a>
                    <div className={styles.card}>
                      <h5>{this.date(poll)}</h5>
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
                  </a>
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
                <Link as={`poll/${poll.id}`} href='poll/[id]'>
                  <a>
                    <div className={styles.card}>
                      <h5>{this.date(poll)}</h5>
                      <h3 className={[styles.title, styles.pollTitle]}>
                        {poll.data.title}
                      </h3>
                      <h4 className={styles.pollDescription}>
                        {poll.data.votes} votes
                      </h4>
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
                  </a>
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