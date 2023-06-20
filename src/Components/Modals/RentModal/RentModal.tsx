"use client";
import { useContext, useMemo, useState } from "react";
import { useRentModal } from "../../hooks";
import Modal from "../Modal";
import { STEPS } from "@/types";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import BodyContentLocation from "./BodyContentLocation";
import BodyContentCategory from "./BodyContentCategory";
import BodyContentInfo from "./BodyContentInfo";
import BodyContentImages from "./BodyContentImages";
import BodyContentDescription from "./BodyContentDescription";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import BodyContentPrice from "./BodyContentPrice";
import { CurrentUserContext } from "@/contexts/UserContext";

const RentModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
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
  const price = watch("price");
  const description = watch("description");
  const imageSrc = watch("imageSrc");
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
  const { setUser, user } = useContext(CurrentUserContext);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) return onNext();
    setIsLoading(true);
    if (user.id.length === 0) return;

    const result = {
      ...data,
      userId: user.id,
      location: location.value,
      price: parseInt(price, 10),
    };
    axios
      .post("/api/listings", result)
      .then(() => {
        console.log("ok");
        toast.success("listing Created");
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        rentModal.onClose();
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
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
      case STEPS.IMAGE: {
        return (
          <BodyContentImages
            value={imageSrc}
            onChange={(value) => setCustomValue("imageSrc", value)}
          />
        );
      }
      case STEPS.DESCRIPTION: {
        return (
          <BodyContentDescription
            isLoading={isLoading}
            value={description}
            error={errors}
            register={register}
          />
        );
      }
      case STEPS.PRICE: {
        return (
          <BodyContentPrice
            isLoading={isLoading}
            value={price}
            error={errors}
            register={register}
          />
        );
      }
      default: {
        return (
          <BodyContentCategory
            onClick={(value) => setCustomValue("category", value)}
            category={category}
          />
        );
      }
    }
  }, [
    category,
    dataGroup,
    description,
    errors,
    imageSrc,
    isLoading,
    location,
    price,
    register,
    setCustomValue,
    step,
  ]);
  //4:17
  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      body={handleBodyRent}
      title="Airbnb your home"
    />
  );
};

export default RentModal;
