import { Box, Stack, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import PrimaryBtn from "../../components/primary-btn";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";


const ConfirmationDuelContent = () => {
    const theme = useTheme();

    const location = useLocation();
    const { user_name, user_avatar, name, avatar } = location.state || {};
    console.log(user_name, user_avatar, name, avatar);

    return (
        <Box m={3} display="flex" flexDirection="column" justifyContent="center" sx={{ height: "100%" }}>
            <Typography variant="h6" fontWeight={700} sx={{ color: theme.palette.warning.main }}>
                ¿Lista para el reto?
            </Typography>

            <Stack display="flex" flexDirection="column" alignItems="center" my={14}>
                <Typography variant="h6" fontWeight={700} mb={2}>
                    {user_name} vs {name}
                </Typography>
                <AvatarGroup spacing="medium">
                    <Avatar alt="Remy Sharp" src={user_avatar} sx={{ width: 95, height: 95 }} />
                    <Avatar alt="Travis Howard" src={avatar} sx={{ width: 95, height: 95 }}/>
                </AvatarGroup>
            </Stack>

            <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
                <PrimaryBtn sx={{ textTransform: "none", backgroundColor: theme.palette.secondary.main }} onClick={() => navigate('/friends')}>
                    Empezar duelo
                </PrimaryBtn>
            </Box>
        </Box>
    );
};

export default ConfirmationDuelContent;
