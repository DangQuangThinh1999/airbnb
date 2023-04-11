"use client";
import Image from "next/image";
const Avatar = () => {
  return (
    <Image
      alt="Avatar"
      height={30}
      width={30}
      className="rounded-full"
      src={"/images/placeholder.jpg"}
    ></Image>
  );
};

export default Avatar;
