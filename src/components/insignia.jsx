import { Box } from "@mui/material";

const InsigniaContainer = ({
  src,
  alt,
  width = { md: 250, sm: 150 },
  height = { md: 250, sm: 150 },
  bgcolor = "white",
  disabled = false
}) => (
  <Box
    position="relative"
    width={width}
    height={height}
    display="flex"
    alignItems="center"
    justifyContent="center"
    bgcolor={bgcolor}
    borderRadius="50%"
  >
    {/* Imagen */}
    <img src={src} alt={alt} width={width.md} height={height.md} style={{ zIndex: 1 }} />

    {/* Capa gris semitransparente cuando está deshabilitado */}
    {disabled && (
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgcolor="rgba(224, 224, 224, 0.5)" // Gris claro con opacidad
        borderRadius="50%"
        zIndex={2}
      />
    )}
  </Box>
);

export default InsigniaContainer;
