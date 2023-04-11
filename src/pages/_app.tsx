import ClientOnly from "@/Components/ClientOnly";
import Modal from "@/Components/Modals/Modal";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <ClientOnly>
        <Modal />
        <Navbar />
      </ClientOnly>
      <Component {...pageProps} />
    </main>
  );
}
