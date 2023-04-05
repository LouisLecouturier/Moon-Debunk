import "../styles/globals.scss";
import { IBM_Plex_Sans_Thai_Looped, Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--outfit"

});

const ibm = IBM_Plex_Sans_Thai_Looped({
  weight: ["200", "400", "500", "600"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--ibm_plex"
});


function MyApp({ Component, pageProps }) {
  return (
    <div className={`${outfit.variable} ${ibm.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
