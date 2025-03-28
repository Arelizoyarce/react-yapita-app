import { Typography, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use"; // Para obtener tamaño de pantalla dinámicamente
import { confirmConstants } from "../../constants/confirm";
import PrimaryBtn from "../../components/primary-btn";
import Gift from "../../assets/gift.png";
import InsigniaContainer from "../../components/insignia";

const ConfirmationContent = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize(); // Obtener tamaño dinámico de pantalla
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Mostrar confeti por 5 segundos
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack height="100vh" color="white" textAlign="center" justifyContent="space-between">
      {/* Confeti al cargar */}
      {showConfetti && <Confetti width={width} height={height} />}

      <Box display="flex" justifyContent="center" mt={10}>
        <InsigniaContainer src={Gift} alt="Gift" />
      </Box>

      <Stack alignItems="center" spacing={2} flexGrow={1} justifyContent="center">
        <Typography variant="h5" fontWeight={700}>
          {confirmConstants.title}
        </Typography>
        <Typography variant="body1" width={{ xs: "80%", md: "60%" }}>
          {confirmConstants.description}
        </Typography>
        <Typography variant="body2" fontWeight={500}>
          {confirmConstants.footer}
        </Typography>
      </Stack>

      <Box display="flex" justifyContent="center" p={2} pb={5}>
        <PrimaryBtn onClick={() => navigate("/dashboard")}>
          {confirmConstants.button}
        </PrimaryBtn>
      </Box>
    </Stack>
  );
};

export default ConfirmationContent;
