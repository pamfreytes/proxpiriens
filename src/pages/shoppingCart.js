import Head from "next/head";
import { Inter } from "next/font/google";
import NavBar from "@/organims/NavBar";
import ShoppingCart from "@/organims/Cart";





const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Destinos Poxpiriens</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

    <NavBar />     
    <ShoppingCart />
   
        <style jsx global>{`
          body {
            font-family: ${inter}, sans-serif;
          }
        `}</style>
      </main>
    </>
  );
}