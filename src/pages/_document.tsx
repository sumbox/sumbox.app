import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Document: React.FC = () => {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/color.svg" />
        <link rel="icon" href="/color.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
