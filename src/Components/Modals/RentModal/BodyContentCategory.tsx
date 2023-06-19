"use client";
import Heading from "@/Components/Heading";
import { categories } from "@/Components/data";
import CategoryInput from "@/Components/inputs/CategoryInput";

import React from "react";

interface BodyContentCategoryProps {
  onClick: (value: string) => void;
  category: string;
}
const BodyContentCategory: React.FC<BodyContentCategoryProps> = ({
  onClick,
  category,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title=" Which of these best describes your place? "
        subtitle="Pick a category"
      />
      <div
        className="
      grid 
      max-h-[50vh]
      grid-cols-1
      gap-3
      overflow-y-auto
      md:grid-cols-2
      "
      >
        {categories.map((item) => {
          return (
            <div key={item.label} className="col-span-1">
              <CategoryInput
                onClick={onClick}
                selected={category === item.label}
                label={item.label}
                icon={item.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BodyContentCategory;
