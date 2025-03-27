import { Typography, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { confirmConstants } from "../../constants/confirm";
import PrimaryBtn from "../../components/primary-btn";
import Gift from "../../assets/gift.png";
import InsigniaContainer from "../../components/insignia";
const ConfirmationContent = () => {
  const navigate = useNavigate();

  return (
    <Stack
      height="100vh"
      color="white"
      textAlign="center"
      justifyContent="space-between"
    >
      <Box display="flex" justifyContent="center" mt={10}>
        <InsigniaContainer src={Gift} alt="Gift" />
      </Box>

      <Stack
        alignItems="center"
        spacing={2}
        flexGrow={1}
        justifyContent="center"
      >
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
