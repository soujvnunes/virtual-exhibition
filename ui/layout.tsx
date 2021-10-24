import React from "react";
import Head from "next/head";
import { LayoutProps } from "types";

function Layout({ title, children }: LayoutProps) {
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
