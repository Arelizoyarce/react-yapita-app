import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ChatIcon from '@mui/icons-material/Chat';
import Gift from "../assets/image_9-removebg-preview.png";
import Coin from "../assets/image_17-removebg-preview.png";
import Dollar from "../assets/Group_23-removebg-preview.png";
export const iconsDashboard = [
    {
        icon: <ConfirmationNumberIcon style={{ color: 'white', fontSize: 30 }} />,
        path: '/benefits'
    },
    {
        icon: <SportsEsportsIcon style={{ color: 'white', fontSize: 30 }} />,
        path: '/duels'
    }
];



export const infoCards = [
    {
      image: <ChatIcon style={{ fontSize: 40, color: '#6C63FF' }} />, 
      title: 'Yapitas en WhatsApp',
      description: 'Responde retos y mantén tu racha.'
    },
    {
      image: <SportsEsportsIcon style={{ fontSize: 40, color: '#6C63FF' }} />, 
      title: 'Duelos',
      description: 'Reta, responde y gana más.'
    }
  ];
  



export const insigniaConstants = [
    {
        title: '50 yapitas',
        imagen: Gift
    },
    {
        title: '150 yapitas',
        imagen: Coin
    },
    {
        title: '300 yapitas',
        imagen: Dollar
    }
];