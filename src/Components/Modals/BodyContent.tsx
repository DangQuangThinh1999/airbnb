"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Heading from "../Heading";
import Input from "../inputs/Input";
interface BodyContentProps {
  isLoading: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isLogin?: boolean;
  subtitle: string;
}
const BodyContent: React.FC<BodyContentProps> = ({
  isLoading,
  register,
  errors,
  isLogin,
  subtitle,
}) => {
  const handleForgotPassword = async (e: Event) => {
    console.log("ok");
    e.preventDefault();
    const verifyPassword = Math.floor(100000 + Math.random() * 900000);
    try {
      await fetch("api/mailtrap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "thinh cute",
          feedback: verifyPassword,
        }),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to the Airbnb" subtitle={subtitle} center />
      <Input
        id="email"
        label="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {isLogin ? (
        <></>
      ) : (
        <Input
          id="name"
          label="name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      )}

      <Input
        id="password"
        type="password"
        label="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <button
        onClick={(e: any) => {
          console.log("ok");
          handleForgotPassword(e);
        }}
        className=" text-lg font-medium text-[#1da1f2] hover:to-blue-400"
      >
        Forgot your password?
      </button>
    </div>
  );
};

export default BodyContent;
