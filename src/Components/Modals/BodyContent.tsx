"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Heading from "../Heading";
import Input from "../inputs/Input";
interface BodyContentProps {
  isLoading: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}
const BodyContent: React.FC<BodyContentProps> = ({
  isLoading,
  register,
  errors,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome to the Airbnb"
        subtitle="Create an account!"
        center
      />
      <Input
        id="email"
        label="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
};

export default BodyContent;
