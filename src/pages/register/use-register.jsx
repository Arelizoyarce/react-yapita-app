import { useState } from "react";
import { registerConstants } from "../../constants/register";

export const useRegister = () => {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState("");

  const handleNext = () => {
    if (step < registerConstants.steps.length) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const { question, description, options, label, icon } = registerConstants.steps[step - 1];

  const currentOptions = Object.entries(options).map(([key, label]) => ({
    value: key,
    label,
  }));

  return {
    step,
    value,
    setValue,
    handleNext,
    handleBack,
    currentStep: question,
    currentDescription: description,
    currentOptions,
    currentLabel: label,
    currentIcon: icon,
  };
};
