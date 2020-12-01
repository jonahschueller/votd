import '../styles/globals.css'
import NavigationBar from '../components/navigation'
import Head from 'next/head'
import { AuthProvider } from '../auth/fire-auth'

function MyApp({ Component, pageProps }) {
  console.log('reload')
  return (
    <div>
      <Head>
      <script src="https://kit.fontawesome.com/4b2e2ad0a4.js" crossorigin="anonymous"></script>
      </Head>
      <NavigationBar/>
      <AuthProvider>
        <Component {...pageProps}/>
      </AuthProvider>
    </div>
  );
}

export default MyApp
