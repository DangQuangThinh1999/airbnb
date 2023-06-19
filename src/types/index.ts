import { create } from "zustand";
import { User } from "@prisma/client";

export type SafeUser = Omit<User, "createAt" | "updateAt" | "emailVerified"> & {
  createAt: string;
  updateAt: string;
  emailVerified: string | null;
};
export enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGE = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}
