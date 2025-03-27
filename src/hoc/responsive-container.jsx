import { Box, useMediaQuery, useTheme } from "@mui/material";

const withResponsiveContainer = (Component) => {
  return (props) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
      <Box 
        display="flex" 
        justifyContent={isDesktop ? "center" : "flex-start"} 
        flex={1} 
        height="100%"
      >
        <Box 
          width={isDesktop ? "40vw" : "100%"} 
          display="flex"
          flexDirection={'column'}
          flex={1} 
        >
          <Component {...props} />
        </Box>
      </Box>
    );
  };
};

export default withResponsiveContainer;
