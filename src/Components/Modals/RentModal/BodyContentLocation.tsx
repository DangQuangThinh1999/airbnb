"use client";
import Heading from "@/Components/Heading";
import CountrySelect, {
  CountrySelectValue,
} from "@/Components/inputs/CountrySelect";

import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";

interface BodyContentLocationProps {
  onChange?: (value: CountrySelectValue) => void;
  value?:
    | string
    | {
        latlng?: string;
      };
}
const BodyContentLocation: React.FC<BodyContentLocationProps> = ({
  onChange,
  value,
}) => {
  const MapRent = useMemo(
    () =>
      dynamic(() => import("./MapRent"), {
        ssr: false,
      }),
    [value]
    //  value is location
  );
  const center = useMemo(() => {
    if (typeof value === "object") {
      const arrNum = value.latlng?.split(",").map((x) => +x);
      return arrNum;
    }
    return undefined;
  }, [value]);
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Where is your place located"
        subtitle="Help guests find you!"
      />
      <CountrySelect onChange={onChange} value={value} />
      <MapRent center={center} />
    </div>
  );
};

export default BodyContentLocation;
