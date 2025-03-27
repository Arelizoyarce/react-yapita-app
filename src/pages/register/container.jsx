import { Stack } from "@mui/material"

const RegisterContainer = ({children}) =>{
    
    return (
        <Stack
        width="100%"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        bgcolor={(theme)=> theme.palette.background.default}
      >
        {children}
      </Stack>
    )
};

export default RegisterContainer;