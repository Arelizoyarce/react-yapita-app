import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography, Divider, Skeleton } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import PrimaryBtn from "../../components/primary-btn";
import StarIcon from '@mui/icons-material/Star';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { getDuels } from "../../services/duels";
import { duelsData } from "../../constants/duels";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

const DuelsSkeleton = () => (
    <Stack spacing={4} alignItems="start" mt={4} width="100%" flexGrow={1}>
        {Array.from({ length: 3 }).map((item, index) => (
            <Box key={index} width="100%">
                <Stack display="flex" flexDirection="row" width="100%" alignItems="center" py={2}>
                    <AvatarGroup spacing={8}>
                        <SmallAvatar alt="Player 1" src='/src' sx={{ filter: "brightness(0.5)" }} />
                        <SmallAvatar alt="Player 2" src='/src' />
                    </AvatarGroup>
                    <Stack mx={2} textAlign="start">
                        <Skeleton variant="text" width={100} height={20} sx={{ backgroundColor: "grey.300" }} />
                        <Skeleton variant="text" width={50} height={20} sx={{ backgroundColor: "grey.300" }} />
                    </Stack>
                    <Skeleton variant="circular" width={24} height={24} sx={{ marginLeft: "auto" }} />

                </Stack>

                <Divider sx={{ backgroundColor: "black", opacity: 0.5, height: 2 }} />
            </Box>
        ))}
    </Stack>
)

const DuelsContent = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [duels, setDuels] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = localStorage.getItem("user_id");

    useEffect(() => {
        getDuels(userId)
            .then((data) => setDuels(data || []))
            .catch((error) => console.error("Error fetching duels:", error))
            .finally(() => setLoading(false));
    }, []);

    const filteredData = duels?.filter(item => item.status !== "pending") || [];
    const duelsFiltered = filteredData.length > 0 ? filteredData : duelsData;

    return (
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", p: 3 }}>
            <Typography variant="h5" fontWeight={700} textAlign="start" sx={{ color: theme.palette.primary.main }}>
                Duelos
            </Typography>

            {
                loading ? (
                    <DuelsSkeleton />
                ) : (
                    <Stack spacing={4} alignItems="start" mt={4} width="100%" flexGrow={1}>
                        {duelsFiltered.map((item, index) => (
                            <Box key={index} width="100%">
                                <Stack display="flex" flexDirection="row" width="100%" alignItems="center" py={2}>
                                    <AvatarGroup spacing={8}>
                                        <SmallAvatar alt="Player 1" src={item.participants[0].avatar} sx={{ filter: "brightness(0.5)" }} />
                                        <SmallAvatar alt="Player 2" src={item.participants[1].avatar} />
                                    </AvatarGroup>
                                    <Stack mx={2} textAlign="start">
                                        <Typography variant="body1" fontWeight={600} color={theme.palette.text.secondary}>
                                            {item.participants[0].name} vs {item.participants[1].name}
                                        </Typography>
                                        <Typography variant="body2" fontWeight={400} color={theme.palette.text.secondary}>
                                            {item.created_at}
                                        </Typography>
                                    </Stack>
                                    {filteredData.length > 0 ? (
                                        item.winner_id === userId ? (
                                            <Stack sx={{ marginLeft: "auto" }}>
                                                <StarIcon sx={{ color: theme.palette.warning.main }} />
                                            </Stack>
                                        ) : (
                                            <Stack sx={{ marginLeft: "auto" }}>
                                                <DangerousIcon sx={{ color: theme.palette.error.main }} />
                                            </Stack>
                                        )
                                    ) : (
                                        item.result === "Ganaste" ? (
                                            <Stack sx={{ marginLeft: "auto" }}>
                                                <StarIcon sx={{ color: theme.palette.warning.main }} />
                                            </Stack>
                                        ) : (
                                            <Stack sx={{ marginLeft: "auto" }}>
                                                <DangerousIcon sx={{ color: theme.palette.error.main }} />
                                            </Stack>
                                        )
                                    )}


                                </Stack>

                                <Divider sx={{ backgroundColor: "black", opacity: 0.5, height: 2 }} />
                            </Box>
                        ))}
                    </Stack>
                )
            }


            <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
                <PrimaryBtn sx={{ textTransform: "none", backgroundColor: theme.palette.secondary.main }} onClick={() => navigate('/friends')} disabled={loading}>
                    Retar a una amiga
                </PrimaryBtn>
            </Box>
        </Box>
    );
};

export default DuelsContent;
