import React from "react";
import Head from "next/head";

interface CustomHead {
  title: string;
  description: string;
}

export function CustomHead({ title, description }: CustomHead) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
