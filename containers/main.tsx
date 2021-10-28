import React, { ComponentProps } from "react";
import Head from "next/head";
import cn from "classnames";

export default function Main({
  title,
  children,
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main
      title={title}
      className={cn(
        "flex flex-col min-h-screen bg-gray dark:bg-black",
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
