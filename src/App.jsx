import { ThemeProvider } from "@mui/material";
import "./App.css";
import AppRouter from "./routes/routes";
import theme from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
