import { Stack, useTheme } from "@mui/material"

const DuelsContainer = ({children}) =>{
      const theme = useTheme();
    
    return (
        <Stack
            width="100%"
            minHeight="100vh"
            display="flex"
            alignItems="start"
            sx={{
                background: "white",
            }}
        >
            {children}
      </Stack>
    )
};

export default DuelsContainer;