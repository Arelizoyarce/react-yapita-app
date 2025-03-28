import { TextField } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import CustomSelect from "../../components/custom-select";
import Steppers from "../../components/stepers";
import { useRegister } from "./use-register";
import RegisterActions from "./action";
import { registerConstants } from "../../constants/register";

const RegisterContent = () => {
  const {
    step,
    formValues,
    handleValueChange,
    handleNext,
    handleBack,
    currentStep,
    currentDescription,
    currentOptions,
    currentLabel,
    currentIcon,
    currentValue,
    isInputField, // Ahora usamos esta variable
  } = useRegister();

  return (
    <Stack textAlign="start" spacing={2} height="100vh" p={{ xs: 6, sm: 6, md: 0 }} py={{ md: 4 }}>
      <Typography color="primary" variant="h1">Configura tu perfil</Typography>

      <Steppers steppersNumber={registerConstants.steps.length} currentStep={step} />
      <Stack flexGrow={{ xs: 0.1, md: 0.3 }} justifyContent="space-between">
        <Typography color="primary" variant="h2">{currentStep}</Typography>
        <Typography color="grey.main">{currentDescription}</Typography>

        {/* Condición correcta para renderizar Select o Input */}
        {isInputField ? (
          <TextField
            label={currentLabel}
            variant="outlined"
            fullWidth
            value={currentValue}
            onChange={(e) => handleValueChange(e.target.value)}
            InputProps={{
              startAdornment: currentIcon, // Ícono antes del input
            }}
          />
        ) : (
          <CustomSelect
            label={currentLabel}
            icon={currentIcon}
            options={currentOptions}
            value={currentValue}
            onChange={(e) => handleValueChange(e.target.value)}
          />
        )}
      </Stack>

      <RegisterActions
        step={step}
        totalSteps={registerConstants.steps.length}
        value={currentValue}
        formValues={formValues}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </Stack>
  );
};

export default RegisterContent;
