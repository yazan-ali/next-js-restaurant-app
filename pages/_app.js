import '../styles/globals.scss';
import Navbar from '../components/navbar';
import { SessionProvider } from "next-auth/react";
import Head from 'next/head';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
      <div className="container">
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )


}

export default MyApp
