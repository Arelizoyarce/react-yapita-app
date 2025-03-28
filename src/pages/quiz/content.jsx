import { useState } from "react";
import { Container, Card, CardContent, Typography, Button, Box, LinearProgress, useTheme } from "@mui/material";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const quizData = [
  {
    question: "Velit cillum eiusmod laborum cillum.Proident consectetur nostrud adipisicing magna consectetur cillum ad Lorem aute mollit aliqua.",
    answers: [
      { text: "Madrid", correct: false },
      { text: "París", correct: true },
      { text: "Berlín", correct: false },
      { text: "Lisboa", correct: false },
    ],
  },
  {
    question: "¿Cuánto es 5 + 7?",
    answers: [
      { text: "10", correct: false },
      { text: "12", correct: true },
      { text: "14", correct: false },
      { text: "15", correct: false },
    ],
  },
];

const QuizContent = () => {
  const theme = useTheme();
  const { width, height } = useWindowSize();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = quizData[currentQuestion];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer.correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setQuizFinished(true);
      }
    }, 1200);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        py: 4,
      }}
    >
      {quizFinished ? (
        <>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            🎉 ¡Quiz Completado!
          </Typography>
          <Typography variant="h5">Tu puntaje: {score} / {quizData.length}</Typography>
          <Confetti width={width} height={height} />
          <Button
            variant="contained"
            sx={{ mt: 3, background: theme.palette.secondary.main, "&:hover": { background: theme.palette.secondary.main} }}
            onClick={() => window.location.reload()}
          >
            Volver 
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            🧠 Pregunta {currentQuestion + 1} de {quizData.length}
          </Typography>

          <Box sx={{ width: "80%", mb: 2 }}>
            <LinearProgress variant="determinate" value={(currentQuestion / quizData.length) * 100} />
          </Box>

          <Card sx={{ maxWidth: 500, width: "90%", boxShadow: 5, borderRadius: 3, p: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                {question?.question}
              </Typography>

              {question?.answers.map((answer, index) => (
                <Button
                  key={index}
                  variant="contained"
                  fullWidth
                  sx={{
                    mb: 1,
                    background: selectedAnswer
                      ? answer.correct
                        ? "green"
                        : selectedAnswer === answer
                        ? "red"
                        : "primary"
                      : "primary",
                    color: "white",
                    "&:hover": { background: selectedAnswer ? "primary" : "primary.dark" },
                  }}
                  onClick={() => handleAnswer(answer)}
                  disabled={!!selectedAnswer}
                >
                  {answer.text}
                </Button>
              ))}
            </CardContent>
          </Card>
        </>
      )}
    </Container>
  );
};

export default QuizContent;
