"use client";
import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      alt="Avatar"
      height={30}
      width={30}
      className="rounded-full"
      src={src || "/images/placeholder.jpg"}
    ></Image>
  );
};

export default Avatar;
