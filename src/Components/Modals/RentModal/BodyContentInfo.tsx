"use client";

import Heading from "@/Components/Heading";
import { dataInfo } from "@/Components/data";
import Counter from "@/Components/inputs/Counter";
import { Fragment } from "react";
export interface dataGroupInfo {
  count: number;
  onChange: (value: number) => void;
}
interface BodyContentInfoProps {
  value: Array<dataGroupInfo>;
}
const BodyContentInfo: React.FC<BodyContentInfoProps> = ({ value }) => {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Share some basics about your place"
        subtitle="What amenities do you have"
      />
      {dataInfo.map((item, index) => (
        <Fragment key={index}>
          <Counter
            title={item.title}
            subtitle={item.subtitle}
            value={value[index].count}
            onChange={value[index].onChange}
          />
          <hr />
        </Fragment>
      ))}
    </div>
  );
};

export default BodyContentInfo;
