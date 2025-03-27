import { Stack, Button, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const RegisterActions = ({ step, value, handleNext, handleBack }) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end" py={6}>
      {step > 1 && (
        <Button variant="outlined" onClick={handleBack} color="secondary">
          <ArrowBack fontSize="small"/>
        </Button>
      )}
      {step === 1 ? (
        <Button
          variant="contained"
          onClick={handleNext}
          color="secondary"
          disabled={!value}
        >
          <ArrowForward sx={{ color: "white"}} fontSize="small"/>
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={handleNext}
          color="secondary"
          disabled={!value}
        >
          <ArrowForward sx={{ color: "white"}} fontSize="small"/>
        </Button>
      )}
    </Stack>
  );
};

export default RegisterActions;
