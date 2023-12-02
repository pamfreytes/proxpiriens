
import Head from 'next/head'
import { Inter } from 'next/font/google'
import CardsSection from "@/organims/CardsSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home({Component , pageProps}) {
  return (
    <>
      <Head>
        <title>Proxpiriens</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./LogoColorFloating.png" />
      </Head>
      <main>
        
      <style jsx global>{`
          body {
            font-family: ${inter}, sans-serif;
          }
      `}</style>
      
      <CardsSection/>
          

      
          
      </main>
      </>

  )
}
                              