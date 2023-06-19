"use client";
import { useEffect, useMemo, useState } from "react";
import { useRentModal } from "../../hooks";
import Modal from "../Modal";
import { STEPS } from "@/types";
import BodyContent from "./BodyContentCategory";
import { FieldValues, useForm } from "react-hook-form";
import BodyContentLocation from "./BodyContentLocation";
import BodyContentCategory from "./BodyContentCategory";
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

  const bodyRent =
    step === STEPS.LOCATION ? (
      <BodyContentLocation
        value={location}
        onChange={(value) => setCustomValue("location", value)}
      />
    ) : (
      <BodyContentCategory
        onClick={(category) => setCustomValue("category", category)}
        category={category}
      />
    );
  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      body={bodyRent}
      title="Airbnb your home"
    />
  );
};

export default RentModal;
