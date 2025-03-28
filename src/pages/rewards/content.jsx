import { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Container,
  Skeleton,
  useTheme,
} from "@mui/material";
import { fetchRewards } from "../../services/rewards";
import LockIcon from "@mui/icons-material/Lock";
import CongratsScreen from "../../components/congrats";

const RewardItem = ({ reward }) => {
  const theme = useTheme();
  const [openCongrats, setOpenCongrats] = useState(false);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        maxWidth: "95%",
        minWidth: 300,
        width: "100%",
        p: 1.5,
        borderRadius: 2,
        background: "#F9F9FB",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #E0E0E0",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        mx: "auto",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Box sx={{ position: "relative", flexShrink: 0 }}>
        <CardMedia
          component="img"
          sx={{
            width: 70,
            height: 70,
            borderRadius: 2,
            opacity: reward.is_locked ? 0.5 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
          image={reward.image}
          alt={reward.name}
        />
        {reward.is_locked && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" color="white" fontWeight={500}>
              <LockIcon fontSize="large" />
            </Typography>
          </Box>
        )}
      </Box>

      <CardContent sx={{ flex: 1, ml: 1.5 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 500, color: "#333" }}>
          {reward.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={0.3}>
          🎯 Puntos requeridos: <strong>{reward.points}</strong>
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 1,
            width: "100%",
            background: reward.is_locked ? "#BDBDBD" : theme.palette.secondary.main,
            color: "white",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: 2,
            padding: "10px 16px",
            boxShadow: reward.is_locked ? "none" : "0px 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              background: reward.is_locked ? "#9E9E9E" : theme.palette.secondary.dark,
              boxShadow: reward.is_locked ? "none" : "0px 6px 14px rgba(0, 0, 0, 0.25)",
            },
            "&:active": {
              transform: "scale(0.96)",
            },
            "&.Mui-disabled": {
              color: "#fff",
              boxShadow: "none",
            },
          }}
          disabled={reward.is_locked}
          onClick={() => setOpenCongrats(true)}
        >
          {reward.is_locked ? "🔒 Bloqueado" : "🎁 Reclamar"}
        </Button>
        <CongratsScreen open={openCongrats} onClose={() => setOpenCongrats(false)} reward={reward} /> 
      </CardContent>
    </Card>
  );
};


const RewardsContent = () => {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRewards('1af48341-c251-43f5-8ba0-01da35064bb9')
      .then((data) => setRewards(data.sort((a, b) => a.points - b.points)))
      .catch((error) => console.error("Error fetching rewards:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        py: 4,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4A148C", mb: 1 }}>
        🎁 Recompensas Exclusivas
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Canjea tus puntos por ofertas y descuentos en tiendas comerciales o departamentos.
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ flexGrow: 1 }}>
        {loading
          ? Array.from(new Array(3)).map((_, index) => (
            <Grid item xs={12} sm={8} md={6} key={index}>
              <Skeleton variant="rectangular" width="100%" height={120} sx={{ borderRadius: 3 }} />
            </Grid>
          ))
          : rewards.map((reward) => (
            <Grid item xs={12} sm={8} md={6} key={reward.id}>
              <RewardItem reward={reward} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default RewardsContent;
