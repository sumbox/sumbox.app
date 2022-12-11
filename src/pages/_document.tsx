import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

type Props = {};

const Document: React.FC = (props: Props) => {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
