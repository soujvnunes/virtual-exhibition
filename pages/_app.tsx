import { AppProps } from "next/app";
import Head from "next/head";
import { Exhibition, Header } from "containers";
import "index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/toj4mwx.css" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Veja o quanto evoluímos juntos!" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>UFAL 60 Anos</title>
      </Head>
      <main className="flex flex-col min-h-screen">
        <Header />
        <Exhibition />
        <Component {...pageProps} />
      </main>
    </>
  );
}
