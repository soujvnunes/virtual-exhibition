import { AppProps } from "next/app";
import Head from "next/head";
import "../index.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="stylesheet" href="https://use.typekit.net/toj4mwx.css" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Veja o quanto evoluímos juntos!" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
