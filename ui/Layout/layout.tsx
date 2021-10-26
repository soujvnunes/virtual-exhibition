import React, { forwardRef } from "react";
import Head from "next/head";
import { LayoutProps, LayoutRef } from "./layout.t";

const Layout = forwardRef<LayoutRef, LayoutProps>(function Layout(
  { title, children },
  ref,
) {
  return (
    <div ref={ref} className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
});

export default Layout;
