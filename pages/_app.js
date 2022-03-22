import "../styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
  return (
  <div className='w-full max-w-lg mx-auto'>
    <Component {...pageProps} />
  </div>
  );
}

export default MyApp
