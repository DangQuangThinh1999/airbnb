"use client";
import React from "react";
import Container from "../../Container";

import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { categories } from "@/Components/data";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div
        className="
      flex
      flex-row
      items-center
      justify-between
      overflow-x-auto
      pt-4
      "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
