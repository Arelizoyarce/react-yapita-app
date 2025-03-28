import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarIcon from '@mui/icons-material/Star';
import PhoneIcon from '@mui/icons-material/Phone';

export const registerConstants = {
    title: "Personaliza tu experiencia",
    steps: [
      {
        label: 'Quiero aprender sobre...',
        icon: <StarIcon />,
        question: "¿Cuál es tu nivel de conocimiento en finanzas?",
        description:
          "Queremos ofrecerte retos a tu medida. No importa si estás comenzando o si ya tienes experiencia, ¡elige el nivel que más te acomode!",
        options: {
          basic: "Básico – Aprende a manejar tu dinero (ahorros, presupuesto, gastos diarios).",
          entrepreneurship: "Emprendimiento – Finanzas para hacer crecer tu negocio (ingresos, inversión, administración).",
          digitalFinance: "Finanzas digitales – Todo sobre el dinero online (billeteras digitales, criptomonedas, pagos electrónicos).",
        },
      },
      {
        question: "¿A qué hora prefieres recibir tus retos?",
        label: 'Envíame los retos a...',
        icon: <AccessTimeFilledIcon />,
        description:
          "Queremos que recibas los retos en el momento ideal para ti. Elige el horario en el que puedas dedicarle unos minutos sin apuros.",
        options: {
          morning: "8:00 AM – Para empezar el día con energía.",
          midMorning: "10:00 AM – Un break con cafecito.",
          afternoon: "2:00 PM – Después del almuerzo, con calma.",
          evening: "8:00 PM – Cuando el día empieza a bajar el ritmo.",
          night: "10:00 PM – Antes de cerrar el día y desconectar.",
        },
      },
      {
        question: "¿A qué número te enviamos tus retos?",
        label: "Tu número de WhatsApp",
        icon: <PhoneIcon />,
        description:
          "Para enviarte los retos y recordatorios directamente a WhatsApp, necesitamos tu número. No compartiremos tu información con nadie.",
        options: null, // Aquí no hay opciones, será un campo de texto para ingresar el número
      },
    ],
    nextButton: "Siguiente →",
};
