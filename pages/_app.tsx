import { AppProps } from "next/app";
import Head from "next/head";
import { Exhibition, Header } from "containers";
import "index.css";

export default function App({ Component, pageProps }: AppProps) {
  const title = "Ufal 60 Anos";

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/toj4mwx.css" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Veja o quanto evoluímos juntos!" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>{title}</title>
      </Head>
      <main
        title={title}
        className={
          "flex flex-col min-h-screen mx-auto px-4 w-full sm:px-5 md:max-w-screen-sm md:px-6 lg:max-w-screen-md lg:px-7 xl:max-w-screen-lg xl:px-8"
        }
      >
        <Header />
        <Exhibition />
        <Component {...pageProps} />
      </main>
    </>
  );
}
