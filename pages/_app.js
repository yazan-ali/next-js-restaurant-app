import '../styles/globals.scss';
import Navbar from '../components/navbar';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
      <div className="container">
        {/* <Head>
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
        </Head> */}
        <Navbar />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )


}

export default MyApp
