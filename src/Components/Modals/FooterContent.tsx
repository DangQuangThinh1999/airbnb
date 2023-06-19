"use client";

import { FcGoogle } from "react-icons/fc";
import Button from "../Button";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";

import { signIn } from "next-auth/react";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import { useLoginModal, useRegisterModal } from "../hooks";
import { useState } from "react";
// import { useSignInWithFacebook } from "react-firebase-hooks/auth";
// import { auth, provider } from "@/config/firebase";
// import { signInWithPopup } from "firebase/auth";
const FooterContent = () => {
  // const [signInWithFacebook, _user, _loading, _error] =
  //   useSignInWithFacebook(auth);
  // const signInFacebook = () => {
  //   signInWithPopup(auth, provider)
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const handleModal = () => {
    if (registerModal.isOpen) {
      registerModal.onClose();
      loginModal.onOpen();
    } else if (loginModal.isOpen) {
      registerModal.onOpen();
      loginModal.onClose();
    }
  };
  return (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <Button
        color="black"
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      {/* <Button
        color="black"
        outline
        label="Continue with Facebook"
        icon={AiFillFacebook}
        // onClick={() => signIn("facebook")}
        onClick={signInFacebook}
      /> */}
      <Button
        color="black"
        outline
        label="Continue with GitHub"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div className="ml-4 text-center font-light text-neutral-500">
        <div className="flex flex-row items-center justify-center gap-2">
          <div>
            {" "}
            {registerModal.isOpen
              ? "Already have an account? "
              : "Create Account!"}
          </div>
          <div
            onClick={handleModal}
            className="cursor-pointer
          text-neutral-800
          hover:underline
          "
          >
            {registerModal.isOpen ? "Login" : "Register"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
