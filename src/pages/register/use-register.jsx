import { useState } from "react";
import { registerConstants } from "../../constants/register";

export const useRegister = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({}); // Almacena respuestas por paso

  const handleNext = () => {
    if (step < registerConstants.steps.length) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleValueChange = (value) => {
    setFormValues((prev) => ({
      ...prev,
      [step]: value, // Guarda el valor según el paso actual
    }));
  };

  const { question, description, options, label, icon } = registerConstants.steps[step - 1];

  const isInputField = options === null; // Detecta si debe ser un input de texto
  const currentOptions = options
    ? Object.entries(options).map(([key, label]) => ({ value: key, label }))
    : [];

  return {
    step,
    formValues,
    handleValueChange,
    handleNext,
    handleBack,
    currentStep: question,
    currentDescription: description,
    currentOptions,
    currentLabel: label,
    currentIcon: icon,
    currentValue: formValues[step] || "", // Obtiene el valor del paso actual
    isInputField, // Indica si es un input de texto
  };
};
