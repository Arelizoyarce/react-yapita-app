import { Stack, useTheme } from "@mui/material";


const RewardsContainer = ({ children }) => {
  const theme = useTheme();

  return (
    <Stack
      width="100%"
      minHeight="100vh"
      display="flex"
      alignItems={{ xs: "none", md: "center" }}
      sx={{
        background: 'white'
      }}
    >
      {children}
    </Stack>
  );
};

export default RewardsContainer;
