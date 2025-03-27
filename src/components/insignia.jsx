import { Box } from "@mui/material";

const InsigniaContainer = ({
  src,
  alt,
  width = { md: 250, sm: 150 },
  height = { md: 250, sm: 150 },
}) => (
  <Box
    width={width}
    height={height}
    display="flex"
    alignItems="center"
    justifyContent="center"
    bgcolor="white"
    borderRadius="50%"
  >
    <img src={src} alt={alt} width={width.md} height={height.md} />
  </Box>
);

export default InsigniaContainer;
