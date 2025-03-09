import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1f1f1f", 
    },
    secondary: {
      main: "#FFFF1F", 
    },
    background: {
      default: "#f0f2f6", 
      paper: "#f0f2f6", 
    },
    text: {
      primary: "#FFFfff", 
      secondary: "#D2006E", 
    },
    error: {
      main: "#D2006E", 
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif", // Tipografía general
    h1: { fontSize: "2.5rem", fontWeight: 700, color: "#FFFFFF" },
    h2: { fontSize: "2rem", fontWeight: 600, color: "#FFFFFF" },
    body1: { fontSize: "1rem", color: "#FFFFFF" },
  },
});

export default theme;
