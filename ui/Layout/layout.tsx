import React, { forwardRef } from "react";
import Head from "next/head";
import { LayoutProps, LayoutRef } from "./layout.t";
import cn from "classnames";

const Layout = forwardRef<LayoutRef, LayoutProps>(function Layout(
  { title, children, className, ...props },
  ref,
) {
  return (
    <main
      ref={ref}
      className={cn("flex flex-col min-h-screen", className)}
      {...props}
    >
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </main>
  );
});

export default Layout;
