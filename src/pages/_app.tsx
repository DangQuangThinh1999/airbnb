import ClientOnly from "@/Components/ClientOnly";
import Modal from "@/Components/Modals/Modal";
import RegisterModal from "@/Components/Modals/RegisterModal";
import Navbar from "@/Components/Navbar";
import ToasterProvider from "@/providers/ToasterProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <ClientOnly>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
      </ClientOnly>
      <Component {...pageProps} />
    </main>
  );
}
