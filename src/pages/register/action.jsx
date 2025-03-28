import { Stack, Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { createUser, updateUser } from "../../services/user";

const RegisterActions = ({ step, totalSteps, value, formValues, handleNext, handleBack }) => {
  const navigate = useNavigate();
  const isLastStep = step === totalSteps;
  const fieldMapping = {
    1: "level",       
    2: "schedule",   
    3: "number",     
  };
  const handleFinalStep = async () => {
    try {
      
      const updates = Object.keys(formValues).reduce((acc, key) => {
        const fieldKey = fieldMapping[key];
        if (fieldKey) {
          acc[fieldKey] = formValues[key];
        }
        return acc;
      }, {});
  
      const response = await createUser(updates);
      const userId= localStorage.getItem("user_id");
      await updateUser(userId, updates)
  
      if (response) {
        console.log("Usuario actualizado con éxito:", response);
        navigate("/confirmation");
      } else {
        console.error("Error al actualizar el usuario");
      }
    } catch (error) {
      console.error("Error en la actualización:", error);
    }
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end" py={6}>
      {step > 1 && (
        <Button variant="outlined" onClick={handleBack} color="secondary">
          <ArrowBack fontSize="small" />
        </Button>
      )}
      <Button
        variant="contained"
        onClick={isLastStep ? handleFinalStep : handleNext}
        color="secondary"
        disabled={!value}
      >
        <ArrowForward sx={{ color: "white" }} fontSize="small" />
      </Button>
    </Stack>
  );
};

export default RegisterActions;
