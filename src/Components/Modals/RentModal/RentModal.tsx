"use client";
import { useMemo, useState } from "react";
import { useRentModal } from "../../hooks";
import Modal from "../Modal";
import { STEPS } from "@/types";
import BodyContent from "./BodyContentCategory";
import { FieldValues, useForm } from "react-hook-form";
import BodyContentLocation from "./BodyContentLocation";
import BodyContentCategory from "./BodyContentCategory";
import BodyContentInfo from "./BodyContentInfo";
const RentModal = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });
  const category = watch("category");
  const location = watch("location");
  const guestCount = watch("guestCount");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dataGroup = [
    {
      count: guestCount,
      onChange: (value: number) => setCustomValue("guestCount", value),
    },
    {
      count: roomCount,
      onChange: (value: number) => setCustomValue("roomCount", value),
    },
    {
      count: bathroomCount,
      onChange: (value: number) => setCustomValue("bathroomCount", value),
    },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  const [step, setStep] = useState(STEPS.CATEGORY);

  const rentModal = useRentModal();

  const onBack = () => {
    setStep((value) => value - 1);
  };
  const onNext = () => {
    setStep((value) => value + 1);
  };
  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) return "Create";
    return "Next";
  }, [step]);
  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);

  const handleBodyRent = useMemo(() => {
    switch (step) {
      case STEPS.LOCATION: {
        return (
          <BodyContentLocation
            value={location}
            onChange={(value) => setCustomValue("location", value)}
          />
        );
      }
      case STEPS.INFO: {
        return <BodyContentInfo value={dataGroup} />;
      }
      default: {
        return (
          <BodyContentCategory
            onClick={(category) => setCustomValue("category", category)}
            category={category}
          />
        );
      }
    }
  }, [category, dataGroup, location, setCustomValue, step]);
  //4:17
  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      body={handleBodyRent}
      title="Airbnb your home"
    />
  );
};

export default RentModal;
