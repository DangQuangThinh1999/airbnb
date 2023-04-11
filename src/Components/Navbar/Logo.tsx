"use client";

import Image from "next/image";
import { useRouter } from "next/router";
"use client";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="Logo"
      height={100}
      width={100}
      className="hidden md:block cursor-pointer"
      src={"/images/logo.png"}
    ></Image>
  );
};

export default Logo;
