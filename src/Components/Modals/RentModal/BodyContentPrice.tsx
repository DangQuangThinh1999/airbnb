"use client";

import Heading from "@/Components/Heading";
import Input from "@/Components/inputs/Input";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
interface BodyContentPriceProps {
  value: string;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors<FieldValues>;
  isLoading: boolean;
}
const BodyContentPrice: React.FC<BodyContentPriceProps> = ({
  value,
  isLoading,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Now,set your price"
        subtitle="How much do you charge per night?"
      />
      <Input
        id="price"
        label="Price"
        formatPrice
        type="number"
        disabled={isLoading}
        register={register}
        errors={error}
        required
      />
    </div>
  );
};

export default BodyContentPrice;
