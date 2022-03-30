import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Loader from '../components/Loader'
import toast from 'react-hot-toast'
import EnterPage from './enter'

export default function Home() {
  return (
    <div>
      <EnterPage />
    </div>
  )
}
