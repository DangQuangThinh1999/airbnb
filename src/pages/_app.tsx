import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import Home from ".";

const font = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Home />
      <Component {...pageProps} />
    </main>
  );
}
