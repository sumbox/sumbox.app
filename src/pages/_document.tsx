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

        <title>Sumbox - Go Beyond note taking</title>
        <meta
          name="description"
          content="Welcome to Sumbox, where creativity knows no bounds! It goes beyond traditional text-based note taking to capture your thoughts, ideas, and inspirations in voice and visuals."
        />

        <meta property="og:url" content="https://sumbox.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sumbox - Go Beyond note taking" />
        <meta
          property="og:description"
          content="Welcome to Sumbox, where creativity knows no bounds! It goes beyond traditional text-based note taking to capture your thoughts, ideas, and inspirations in voice and visuals."
        />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sumbox.app" />
        <meta property="twitter:url" content="https://sumbox.app" />
        <meta name="twitter:title" content="Sumbox - Go Beyond note taking" />
        <meta
          name="twitter:description"
          content="Welcome to Sumbox, where creativity knows no bounds! It goes beyond traditional text-based note taking to capture your thoughts, ideas, and inspirations in voice and visuals."
        />
        <meta name="twitter:image" content="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
