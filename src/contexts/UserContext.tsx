import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { SafeUser } from "@/types";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface IDefaultUser {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
}
export const defaultUser: IDefaultUser = {
  user: {
    id: "",
    name: null,
    email: null,
    emailVerified: null,
    image: null,
    hashedPassword: null,
    favoriteIds: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  setUser: (value: any) => value,
};
export const CurrentUserContext = createContext(defaultUser);

const UserContext = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(defaultUser.user);

  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default UserContext;
