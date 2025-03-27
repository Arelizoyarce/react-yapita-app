import { createTheme } from "@mui/material/styles";

import { typography } from "./typography";
import themeColors from "./palette";

const theme = createTheme({
  ...themeColors,
  ...typography,
});

export default theme;
