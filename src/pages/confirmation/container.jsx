import { Stack, useTheme } from "@mui/material"

const ConfirmationContainer = ({children}) =>{
      const theme = useTheme();
    
    return (
        <Stack
        width="100%"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        sx={{
          background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
        }}
      >
        {children}
      </Stack>
    )
};

export default ConfirmationContainer;