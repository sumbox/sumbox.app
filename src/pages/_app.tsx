import { type AppType } from "next/app";
import "../styles/globals.css";

const SEO: React.FC = () => {
  return (
    <>
      <title>Sumbox - Go Beyond note taking</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <SEO />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
