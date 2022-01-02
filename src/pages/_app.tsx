// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
// own css files here
import "../styles/styles.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // generate top-level react-query client
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>

      <Footer />
    </>
  );
}

export default MyApp;
