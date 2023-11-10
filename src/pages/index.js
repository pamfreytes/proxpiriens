import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CardsSection from '@/organims/CardsSection'
=======
import NavBar from '@/organims/NavBar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        holaaaa ok
        <CardsSection />
=======
      <style jsx global>{`
          body {
            font-family: ${inter}, sans-serif;
          }
      `}</style>

        <NavBar />
      </main>
    </>
  )
}
