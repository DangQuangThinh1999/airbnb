"use client";
import React from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}
const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`
  cursor:pointer
  flex
  flex-col
  gap-3
  rounded-xl
  border-2
  p-4
  transition
  hover:border-black
  ${selected ? "border-black" : "border-neutral"}
  `}
      onClick={() => onClick(label)}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
