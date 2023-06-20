"use client";

import Heading from "@/Components/Heading";
import Input from "@/Components/inputs/Input";
import { error } from "console";
import { Fragment, useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface BodyContentDescriptionProps {
  value: string;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors<FieldValues>;
  isLoading: boolean;
}
const dataDescription = [
  { id: "title", label: "Title" },
  { id: "description", label: "Description" },
];
const BodyContentDescription: React.FC<BodyContentDescriptionProps> = ({
  value,
  register,
  error,
  isLoading,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="How would you describe your place?"
        subtitle="Short and sweet works best"
      />
      {dataDescription.map((item, index) => {
        return (
          <Fragment key={index}>
            <Input
              id={item.id}
              label={item.label}
              disabled={isLoading}
              register={register}
              errors={error}
              required
            />
            {index === 0 ? <hr /> : <></>}
          </Fragment>
        );
      })}
    </div>
  );
};

export default BodyContentDescription;
