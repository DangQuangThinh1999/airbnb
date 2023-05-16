import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import ClientOnly from "@/Components/ClientOnly";
import LoginModal from "@/Components/Modals/LoginModal";
import RegisterModal from "@/Components/Modals/RegisterModal";
import Navbar from "@/Components/Navbar";
import ToasterProvider from "@/providers/ToasterProvider";
import { User } from "@prisma/client";
import { SafeUser } from "@/types";
import prisma from "@/libs/prismadb";
interface IHome {
  currentUser?: SafeUser | null;
}

export default function Home({ currentUser }: IHome) {
  return (
    <ClientOnly>
      <ToasterProvider />
      <LoginModal />
      <RegisterModal />
      <Navbar currentUser={currentUser} />
    </ClientOnly>
  );
}
export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  let currentUser = null;
  if (!session) {
    return {
      props: {
        currentUser,
      },
    };
  }
  const data = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string,
    },
  });
  currentUser = {
    ...data,
    createdAt: data?.createdAt.toISOString(),
    updatedAt: data?.updatedAt.toISOString(),
    emailVerified: data?.emailVerified?.toISOString() || null,
  };

  return {
    props: {
      currentUser,
    },
  };
}
