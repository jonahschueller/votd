import '../styles/globals.css'
import NavigationBar from '../components/navigation'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <script src="https://kit.fontawesome.com/4b2e2ad0a4.js" crossorigin="anonymous"></script>
      </Head>
      <NavigationBar/>
      <Component {...pageProps}/>
    </div>
  );
}

export default MyApp
