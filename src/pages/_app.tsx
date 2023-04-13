import ClientOnly from "@/Components/ClientOnly";
<<<<<<< Updated upstream
import Modal from "@/Components/Modals/Modal";
=======
import LoginModal from "@/Components/Modals/LoginModal";
import RegisterModal from "@/Components/Modals/RegisterModal";
>>>>>>> Stashed changes
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <ClientOnly>
<<<<<<< Updated upstream
        <Modal />
=======
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
>>>>>>> Stashed changes
        <Navbar />
      </ClientOnly>
      <Component {...pageProps} />
    </main>
  );
}
