import {
  Dialog,
  DialogContent,
  Typography,
  IconButton,
  Button,
  Card,
  CardMedia,
  CardContent,
  Box,
  useTheme,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
const CongratsScreen = ({ open, onClose, reward }) => {
  const { width, height } = useWindowSize();
  const theme = useTheme();

  return (
    <Dialog fullScreen open={open} onClose={onClose} sx={{ textAlign: "center" }}>
      {/* Fondo con gradiente */}
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "linear-gradient(180deg, #5E1680 0%, #711D99 100%)",
          padding: 3,
        }}
      >
        {/* Confeti animado */}
        {open && <Confetti width={width} height={height} />}

        {/* Icono superior */}
        <Stack flexGrow={1} justifyContent={'center'} alignItems={'center'}>
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: "#FFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            marginBottom: -3,
            zIndex: 2,
          }}
        >
          <CardGiftcardIcon fontSize='large' color="warning"/>
        </Box>

        {/* Card de la recompensa */}
        
        <Card
        
        sx={{
          width: "80%",
          maxWidth: 320,
          boxShadow: 5,
          borderRadius: 3,
          overflow: "hidden",
          background: "#FFF",
          zIndex: 1,
          padding: 2,
        }}
      >
        <CardMedia
          component="img"
          height="150"
          image={reward.image}
          alt={reward.name}
          sx={{ borderRadius: 2 }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            {reward.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {reward.conditions}
          </Typography>
        </CardContent>
      </Card>

        </Stack>
       
        {/* Botón al final */}
        <Button
          variant="contained"
          sx={{
            mt: 4,
            width: "80%",
            maxWidth: 420,
            background: "#00D1B2",
            color: "#FFF",
            fontWeight: "bold",
            borderRadius: 1,
            padding: "10px 16px",
            "&:hover": { background: "#00A88C" },
          }}
          onClick={onClose}
        >
          Ver otras ofertas
        </Button>

        {/* Botón de cerrar */}
        <IconButton
          sx={{ position: "absolute", top: 15, right: 15, color: "#FFF" }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
};

export default CongratsScreen;
