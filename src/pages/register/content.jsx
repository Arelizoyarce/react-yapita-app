import { AccountCircle } from "@mui/icons-material";
import { Stack, Typography, Button } from "@mui/material";
import CustomSelect from "../../components/custom-select";
import Steppers from "../../components/stepers";
import { useRegister } from "./use-register";
import RegisterActions from "./action";

const RegisterContent = () => {
  const {
    step,
    value,
    setValue,
    handleNext,
    handleBack,
    currentStep,
    currentDescription,
    currentOptions,
    currentLabel,
    currentIcon
  } = useRegister();

  return (
    <Stack
      textAlign="start"
      spacing={2}
      height="100vh"
      p={{ xs: 6, sm: 6, md: 0 }}
      py={{ md: 4 }}
    >
      <Typography color="primary" variant="h1">
        Configura tu perfil
      </Typography>

      <Steppers steppersNumber={2} currentStep={step} />
      <Stack flexGrow={{ xs: 0.1, md: 0.3 }} justifyContent="space-between">
        <Typography color="primary" variant="h2">
          {currentStep}
        </Typography>
        <Typography color="grey.main">{currentDescription}</Typography>

        <CustomSelect
          label={currentLabel}
          icon={currentIcon}
          options={currentOptions}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Stack>

      <RegisterActions
        step={step}
        value={value}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </Stack>
  );
};

export default RegisterContent;
