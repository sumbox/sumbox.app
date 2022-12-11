import { type AppType } from "next/app";

import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SEO: React.FC = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/color.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/color.svg" />
      <link rel="apple-touch-icon" href="/color.svg" />
      <title>Sumbox - Go Beyond note taking</title>
    </>
  );
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <SEO />
      {/* <Nav /> */}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
