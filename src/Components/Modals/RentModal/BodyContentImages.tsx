"use client";

import Heading from "@/Components/Heading";
import ImageUpload from "@/Components/inputs/ImageUpload";

interface BodyContentImagesProps {
  onChange: (value: string) => void;
  value: string;
}
const BodyContentImages: React.FC<BodyContentImagesProps> = ({
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col gap-8 ">
      <Heading
        title="Add a photo of your place"
        subtitle="Show guests what your place looks like"
      />
      <ImageUpload onChange={onChange} value={value} />
    </div>
  );
};

export default BodyContentImages;
