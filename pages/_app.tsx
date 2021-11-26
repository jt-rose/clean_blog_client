// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// own css files here
import "../styles/styles.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import { NavBar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
