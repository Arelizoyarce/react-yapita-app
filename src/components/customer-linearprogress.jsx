import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
const CustomeLinearProgress = styled(LinearProgress)(({ theme }) => ({
    width: 293,
    height: 20,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey.default,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  export default CustomeLinearProgress;