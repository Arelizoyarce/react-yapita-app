import { Dialog, DialogContent, Typography, IconButton, Button, Card, CardMedia, CardContent, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const CongratsScreen = ({ open, onClose, reward }) => {
  const { width, height } = useWindowSize();
  const theme = useTheme();

  return (
    <Dialog fullScreen open={open} onClose={onClose} sx={{ textAlign: "center" }}>
      {/* Botón de cerrar */}
      <IconButton sx={{ position: "absolute", top: 15, right: 15, color: theme.palette.grey[700] }} onClick={onClose}>
        <CloseIcon />
      </IconButton>

      {/* Contenido */}
      <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", bgcolor: "#fff" }}>
        {/* Confeti animado */}
        {open && <Confetti width={width} height={height} />}

        <Typography variant="h3" fontWeight="bold" gutterBottom>
          🎉 ¡Felicidades! 🎉
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Has reclamado la siguiente recompensa:
        </Typography>

        {/* Card con imagen y detalles */}
        <Card sx={{ maxWidth: 350, mt: 3, boxShadow: 5, borderRadius: 3 }}>
          <CardMedia component="img" height="200" image={reward.image} alt={reward.name} />
          <CardContent>
            <Typography variant="h5" fontWeight="bold">{reward.name}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {reward.conditions}
            </Typography>
          </CardContent>
        </Card>

        {/* Botón para cerrar */}
        <Button
          variant="contained"
          sx={{
            mt: 3,
            background: theme.palette.primary.main,
            color: "#fff",
            fontWeight: "bold",
            borderRadius: 2,
            "&:hover": { background: theme.palette.primary.dark },
          }}
          onClick={onClose}
        >
          Volver
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CongratsScreen;
