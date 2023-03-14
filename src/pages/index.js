import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Beanrank - its for beans</title>
        <meta name="description" content="Beanrank - its for beans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/beans.png" />
      </Head>
      <main className={styles.main}>
       <h1> Top Beans </h1>
       <ul> 
        <li> Lima </li>
        <li> Bush's Baked Beans </li>
        <li> Pinto </li>
       </ul> 
      </main>
    </>
  )
}
