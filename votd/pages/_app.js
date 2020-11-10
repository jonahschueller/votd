import '../styles/globals.css'
import NavigationBar from '../components/navigation'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavigationBar/>
      <Component {...pageProps}/>
    </div>
  );
}

export default MyApp
