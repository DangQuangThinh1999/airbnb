import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import ClientOnly from "@/Components/ClientOnly";
import LoginModal from "@/Components/Modals/LoginModal";
import RegisterModal from "@/Components/Modals/RegisterModal";
import Navbar from "@/Components/Navbar";
import ToasterProvider from "@/providers/ToasterProvider";
interface IHome {
  session?: string;
}

export default function Home({ session }: IHome) {
  console.log(session);
  return (
    <ClientOnly>
      <ToasterProvider />
      <LoginModal />
      <RegisterModal />
      <Navbar />
    </ClientOnly>
  );
}
export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
