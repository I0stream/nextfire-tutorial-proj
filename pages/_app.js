import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {

  //render navbar on all pages
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
    )
}

export default MyApp
