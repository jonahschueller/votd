import '../styles/globals.css'
import NavigationBar from '../components/navigation'
import Head from 'next/head'
import UserContext from '../auth/fire-auth'
import { useAuth } from '../auth/fire-auth'

function MyApp({ Component, pageProps }) {
  const user = useAuth();
  console.log('reload')
  return (
    <div>
      <Head>
      <script src="https://kit.fontawesome.com/4b2e2ad0a4.js" crossorigin="anonymous"></script>
      </Head>
      <NavigationBar/>
      <UserContext.Provider value={{user: user}}>
        <Component {...pageProps}/>
      </UserContext.Provider>
    </div>
  );
}

export default MyApp
