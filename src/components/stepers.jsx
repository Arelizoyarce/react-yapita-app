import { Stack } from "@mui/material";

const Steppers = ({ steppersNumber, currentStep }) => {

  return (
    <Stack direction="row" spacing={1}>
      {Array.from({ length: steppersNumber }).map((_, index) => (
        <Stack
          key={index}
          bgcolor={index +1 === currentStep ? "grey.500" : "grey.300"}
          height={15}
          width={60}
          borderRadius={10}
        />
      ))}
    </Stack>
  );
};

export default Steppers;
