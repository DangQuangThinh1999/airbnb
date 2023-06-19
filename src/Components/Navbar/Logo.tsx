"use client";

import Image from "next/image";
import { useRouter } from "next/router";
("use client");

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      height={100}
      width={100}
      className="hidden cursor-pointer md:block"
      src={"/images/logo.png"}
    ></Image>
  );
};

export default Logo;
