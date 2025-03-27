import { Button } from "@mui/material";

const PrimaryBtn = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      size="large"
      sx={{
        height: 50,
        textTransform: "capitalize",
        bgcolor: (theme) => theme.palette.secondary.main,
        color: "white",
        "&:hover, &:active, &.Mui-selected": {
          bgcolor: (theme) => theme.palette.secondary.dark,
        },
        "&.Mui-disabled": {
          bgcolor: (theme) => theme.palette.grey[400],
          color: (theme) => theme.palette.grey[100],
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryBtn;
