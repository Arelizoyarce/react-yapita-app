import { Box, Card, Stack, Typography } from "@mui/material";
import {
  iconsDashboard,
  infoCards,
  insigniaConstants,
} from "../../constants/dashboard";
import InsigniaContainer from "../../components/insignia";
import Gift from "../../assets/gift.png";
import CustomeLinearProgress from "../../components/customer-linearprogress";
const DashboardContent = () => {
  return (
    <Stack spacing={5} height="100vh" direction={"column"}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        {iconsDashboard.map((e, i) => {
          return (
            <Card
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
                bgcolor: (theme) => theme.palette.warning.main,
              }}
            >
              <Stack>a</Stack>
            </Card>
          );
        })}
      </Stack>
      <Box textAlign={"start"}>
        <Typography
          variant="h3"
          sx={{
            marginLeft: 3,
          }}
        >
          Yapitass
        </Typography>
        <Typography
          variant="h1"
          sx={{
            marginLeft: 3,
            fontSize: "50px",
          }}
        >
          50
        </Typography>
      </Box>
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
      <Stack
        bgcolor={(theme) => theme.palette.background.default}
        borderRadius={"20px 20px 0px 0px"}
        flexGrow={1}
        className="info-container"
      >
        <Stack>
          <Stack my={3} mx={4} direction={"column"} spacing={2}>
            <Typography variant="h3" color="primary" textAlign={"start"}>
              Gana más Yapitas
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"}>
              {infoCards.map((item, index) => {
                return (
                  <Card
                    elevation={2}
                    key={index}
                    sx={{
                      minWidth: "47%",
                      minHeight: 72,
                      bgcolor: (theme) => theme.palette.background.main,
                      borderRadius: 1,
                    }}
                  >
                    <Stack></Stack>
                  </Card>
                );
              })}
            </Stack>
            <Stack>
              <Card
                sx={{
                  minWidth: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                  minHeight: 70,
                }}
              >
                {insigniaConstants.map((e) => {
                  return (
                    <Stack>
                      <InsigniaContainer
                        src={Gift}
                        alt="Gift"
                        width={{ md: 50, sm: 10 }}
                        height={{ md: 50, sm: 10 }}
                      />
                      <Typography color="grey">{e.title}</Typography>
                    </Stack>
                    
                  );
                })}
              </Card>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DashboardContent;
