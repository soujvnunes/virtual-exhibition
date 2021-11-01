import React from "react";
import Head from "next/head";
import cn from "classnames";
import { MainProps } from "interface";

export default function Main({
  title,
  children,
  className,
  ...props
}: MainProps) {
  return (
    <main
      title={title}
      className={cn(
        "flex flex-col min-h-screen mx-auto px-4 w-full sm:px-5 md:max-w-screen-sm md:px-6 lg:max-w-screen-md lg:px-7 xl:max-w-screen-lg xl:px-8",
        className,
      )}
      {...props}
    >
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </main>
  );
}
