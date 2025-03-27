import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarIcon from '@mui/icons-material/Star';
export const registerConstants = {
    title: "Configura tu perfil",
    steps: [
      {
        label: 'Quiero aprender sobre...',
        icon: <StarIcon />,
        question: "¿Qué tanto sabes de finanzas?",
        description:
          "No importa si recién estás empezando o ya tienes cancha, en Yapita te damos retos según tu nivel. ¡Escoge el que más te cuadre!",
        options: {
          basic: "Básico – Maneja tu plata (Ahorro, presupuesto, gastos del día a día).",
          entrepreneurship: "Emprendimiento – Crece tu negocio (Ingresos, inversión, finanzas para emprender).",
          digitalFinance: "Finanzas digitales – Plata online (Billeteras, criptos, pagos digitales).",
        },
      },
      {
        question: "¿A qué hora te cae mejor el chisme financiero?",
        label: 'Mándame los retos a...',
        icon: <AccessTimeFilledIcon/>,
        description:
          "No queremos interrumpirte ni escribirte en una hora que no te vacile. Escoge la hora en la que tengas un tiempito libre.",
        options: {
          morning: "8:00 AM – Pa’ empezar fresh el día",
          midMorning: "10:00 AM – Mientras me tomo un cafecito",
          afternoon: "2:00 PM – Después del almuerzo, tranqui",
          evening: "8:00 PM – Cuando ya bajó la chamba",
          night: "10:00 PM – Antes de cerrar el día",
        },
      },
    ],
    nextButton: "→",
  };
  