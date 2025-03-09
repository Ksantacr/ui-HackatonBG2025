import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Header from "../components/header";
import Footer from "../components/footer";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  const theme = useTheme(); // Obtiene el tema global

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default, // Color del tema
        color: theme.palette.text.primary, // Color del texto
      }}
    >
      <Header />
      <Box
        // component="main"
        sx={{
          // flex: 1,
          // padding: "20px",
          // display: "flex",
          // justifyContent: "center",
          // minWidth:"100%",
          // alignItems: "center",
        }}
      >
        {children}
      </Box>
      <Footer />    
    </Box>
  );
};

export default MainLayout;
