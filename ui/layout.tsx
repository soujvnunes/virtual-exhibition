import React, { ComponentProps } from "react";
import Head from "next/head";

interface Props extends ComponentProps<"div"> {
  title?: string;
}

function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col min-h-screen">{children}</div>
    </>
  );
}

export default Layout;
