import { Stack, useTheme } from "@mui/material";
import { AppHeader } from "../../components/app-header";


const RewardsContainer = ({ children }) => {
  const theme = useTheme();

  return (
    <Stack
      width="100%"
      minHeight="100vh"
      display="flex"
      alignItems={{ xs: "none", md: "center" }}
      sx={{
        background: `linear-gradient(to bottom, ${theme.palette.primary.dark} 13%, ${theme.palette.primary.main} 70%, ${theme.palette.primary.light} 300%)`,
      }}
    >
      <AppHeader title="Quiz" />
      {children}
    </Stack>
  );
};

export default RewardsContainer;
