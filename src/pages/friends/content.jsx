import { useNavigate } from "react-router-dom";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { friendsData } from "../../constants/friends";
import { useTheme } from "@mui/material/styles";
import { getFriends } from "../../services/duels";
import { useEffect, useState } from "react";

const FriendsSkeleton = () => (
    <Stack spacing={4} alignItems="start" mt={4} width="100%">
        {
            Array.from({ length: 3 }).map((item, index) => (
                <Stack key={index} display="flex" flexDirection="row" width="100%" alignItems="center">
                    <Avatar alt="Remy Sharp" src='/src' />
                    <Stack mx={2} textAlign="start">
                        <Skeleton variant="text" width={100} height={20} sx={{ backgroundColor: "grey.300" }} />
                        <Skeleton variant="text" width={50} height={20} sx={{ backgroundColor: "grey.300" }} />
                    </Stack>

                    <Box ml="auto">
                        <Skeleton variant="circular" width={24} height={24} sx={{ marginLeft: "auto" }} />
                    </Box>
                </Stack>
            ))
        }
    </Stack>
)

const FriendsContent = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = "1af48341-c251-43f5-8ba0-01da35064bb9";

    useEffect(() => {
        getFriends(userId)
            .then((data) => setFriends(data))
            .catch((error) => console.error("Error fetching duels:", error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Box m={3} sx={{ height: "100%" }}>
            <Typography variant="h6" fontWeight={700} sx={{ color: theme.palette.primary.main }}>
                Lista de amigos
            </Typography>

            <Typography variant="body1" fontWeight={700} sx={{ color: theme.palette.text.secondary }}>
                ¿Ya sabes a quién retar?
            </Typography>

            {loading ? (
                <FriendsSkeleton />
            ) : (
                <Stack spacing={4} alignItems="start" mt={4} width="100%">
                    {
                        friends.friends.map((item, index) => (
                            <Stack key={index} display="flex" flexDirection="row" width="100%" alignItems="center">
                                <Avatar alt="Remy Sharp" src={item.avatar} />
                                <Stack mx={2} textAlign="start" sx={{ color: theme.palette.text.secondary }}>
                                    <Typography variant="body1" fontWeight={600}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" fontWeight={400}>
                                        {item.yapitas} yapitas
                                    </Typography>
                                </Stack>

                                <Box ml="auto">
                                    <ArrowCircleRightIcon sx={{ color: theme.palette.primary.main }} onClick={() => navigate('/confirmation-duel', {
                                        state: { user_name: friends.name, user_avatar: friends.avatar, name: item.name, avatar: item.avatar }
                                    })} />
                                </Box>
                            </Stack>
                        ))
                    }
                </Stack>
            )}
        </Box>
    );
};

export default FriendsContent;
