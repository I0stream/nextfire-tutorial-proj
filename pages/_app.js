import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'
import { UserContext } from '../lib/context'

import { useState, useEffect } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'

function MyApp({ Component, pageProps }) {

  //render navbar on all pages
  return (
    <UserContext.Provider value={{user:{}, username:'dan'}}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
    )
}

export default MyApp
