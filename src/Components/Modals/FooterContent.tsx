"use client";

import { FcGoogle } from "react-icons/fc";
import Button from "../Button";
import { AiFillGithub } from "react-icons/ai";
import useRegisterModal from "../hooks/useRegisterModal";
import { signIn } from "next-auth/react";
const FooterContent = () => {
  const registerModal = useRegisterModal();
  return (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <Button
        color="black"
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        color="black"
        outline
        label="Continue with GitHub"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div className="ml-4 text-center font-light text-neutral-500">
        <div className="flex flex-row items-center justify-center gap-2">
          <div>Already have an account?</div>
          <div
            onClick={registerModal.onClose}
            className="cursor-pointer
          text-neutral-800
          hover:underline
          "
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
