import { Box, Card, Stack, Typography } from "@mui/material";
import {
  iconsDashboard,
  infoCards,
  insigniaConstants,
} from "../../constants/dashboard";
import InsigniaContainer from "../../components/insignia";
import Gift from "../../assets/gift.png";
import CustomeLinearProgress from "../../components/customer-linearprogress";
import { useNavigate } from "react-router-dom";

const DashboardContent = () => {
  const navigate =useNavigate()
  return (
    <Stack spacing={5} minHeight="100vh" direction={"column"}>
      {/* Sección de íconos superiores */}
      <Stack direction={"row"} justifyContent={"space-between"}>
        {iconsDashboard.map((e, i) => (
          <Card
          onClick={()=> navigate(e.path)}
            key={i}
            sx={{
              mx: 3,
              my: 2,
              width: 30,
              height: 30,
              p: 1,
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: (theme) => theme.palette.warning.main,
              cursor: "pointer",
            }}
          >
            <Stack>{e.icon}</Stack>
          </Card>
        ))}
      </Stack>

      {/* Sección de Yapitas */}
      <Box textAlign={"start"}>
        <Typography variant="h3" sx={{ marginLeft: 3 }}>
          Yapitas
        </Typography>
        <Typography variant="h1" sx={{ marginLeft: 3, fontSize: "50px" }}>
          50
        </Typography>
      </Box>

      {/* Sección de Insignia destacada */}
      <Stack>
        <Box display="flex" justifyContent="center">
          <InsigniaContainer
            src={Gift}
            alt="Gift"
            width={{ md: 150, sm: 100 }}
            height={{ md: 150, sm: 100 }}
          />
        </Box>
        <Stack alignItems={"center"} my={5}>
          <CustomeLinearProgress variant="determinate" value={50} />
        </Stack>
      </Stack>

      {/* Contenedor inferior con insignias y líneas */}
      <Stack
        bgcolor={(theme) => theme.palette.background.default}
        borderRadius={"20px 20px 0px 0px"}
        flexGrow={1}
        className="info-container"
      >
        <Stack direction={"column"}>
          <Stack my={3} mx={4} direction={"column"} spacing={2}>
            <Typography variant="h3" color="primary" textAlign={"start"}>
              Gana más yapitas
            </Typography>

            {/* Tarjetas de información */}
            <Stack direction={"row"} justifyContent={"space-between"}>
              {infoCards.map((item, index) => (
                <Card
                  elevation={2}
                  key={index}
                  sx={{
                    minWidth: "47%",
                    minHeight: 72,
                    bgcolor: (theme) => theme.palette.background.main,
                    borderRadius: 1,
                    display: "flex",
                    pl: 1,
                    alignItems: "center",
                  }}
                >
                  <Stack direction="row" alignItems="center">
                    {/* Ícono */}
                    <Box sx={{ width: 40, height: 40 }}>{item.image}</Box>

                    {/* Texto */}
                    <Stack textAlign={"start"} ml={2}>
                      <Typography
                        variant="caption"
                        color="text.primary"
                        fontWeight={600}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Stack>
                  </Stack>
                </Card>
              ))}
            </Stack>

            {/* Insignias con líneas entre ellas */}
            <Stack>
              <Typography variant="h3" color="primary" textAlign={"start"}>
                Tus insignias
              </Typography>
              <Card
                sx={{
                  minWidth: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 70,
                  position: "relative",
                  paddingX: 2,
                  bgcolor: (theme) => theme.palette.background.default,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  width="100%"
                  spacing={2}
                >
                  {insigniaConstants.map((e, i) => (
                    <Stack
                      key={i}
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                      flex={1}
                    >
                      {/* Insignia y título */}
                      <Stack direction="column" alignItems="center">
                        <InsigniaContainer
                          disabled={i !== 0}
                          bgcolor={(theme) => theme.palette.grey.default}
                          src={e.imagen}
                          alt={e.title}
                          width={{ md: 50, sm: 10 }}
                          height={{ md: 50, sm: 10 }}
                        />
                        <Typography color="grey">{e.title}</Typography>
                      </Stack>

                      {/* Línea (excepto después de la última insignia) */}
                      {i < insigniaConstants.length - 1 && (
                        <Box
                          sx={{
                            width: "50px", // Ajusta el tamaño de la línea
                            height: "4px",
                            bgcolor: i === 0 ? "primary.main" : "grey.400",
                            marginX: 1,
                          }}
                        />
                      )}
                    </Stack>
                  ))}
                </Stack>
              </Card>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DashboardContent;
