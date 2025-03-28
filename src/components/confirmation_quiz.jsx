import { Dialog, DialogContent, Typography, Avatar, Button, Box, IconButton, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const DuelConfirmationDialog = ({ open, onClose, player1, player2, duelInfo }) => {
  const theme = useTheme();

  return (
    <Dialog fullScreen open={open} onClose={onClose} sx={{ textAlign: "center", background: "white" }}>
      {/* Botón de Cerrar */}
      <IconButton sx={{ position: "absolute", top: 15, right: 15, color: theme.palette.grey[700] }} onClick={onClose}>
        <CloseIcon />
      </IconButton>

      <DialogContent
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "white",
          color: theme.palette.text.primary,
        }}
      >
        {/* Título */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          ⚔️ ¡Duelo Confirmado! ⚔️
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          {duelInfo.description}
        </Typography>

        {/* Avatares enfrentados */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {/* Jugador 1 */}
          <Box textAlign="center">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Avatar src={player1.avatar} sx={{ width: 100, height: 100, boxShadow: 4 }} />
            </motion.div>
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
              {player1.name}
            </Typography>
          </Box>

          {/* VS */}
          <Typography variant="h5" fontWeight="bold">
            VS
          </Typography>

          {/* Jugador 2 */}
          <Box textAlign="center">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Avatar src={player2.avatar} sx={{ width: 100, height: 100, boxShadow: 4 }} />
            </motion.div>
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
              {player2.name}
            </Typography>
          </Box>
        </Box>

        {/* Información del duelo */}
        <Box sx={{ mt: 4, textAlign: "center", px: 4, maxWidth: 500 }}>
          <Typography variant="body1">
            <strong>Reglas:</strong> {duelInfo.rules}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            <strong>Fecha:</strong> {duelInfo.date}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            <strong>Recompensa:</strong> {duelInfo.reward}
          </Typography>
        </Box>

        {/* Botón para empezar el duelo */}
        <Button
          variant="contained"
          sx={{
            mt: 4,
            background: theme.palette.primary.main,
            color: "#fff",
            fontWeight: "bold",
            "&:hover": { background: theme.palette.primary.dark },
          }}
          onClick={onClose}
        >
          ¡Comenzar Duelo!
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DuelConfirmationDialog;
