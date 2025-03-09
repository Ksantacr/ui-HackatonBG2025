import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";  // Import Outlet from react-router-dom
import Header from "../components/header";
import Footer from "../components/footer";

const MainLayout = () => {
  const theme = useTheme();

  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          marginTop: "3em"
        }}
      >
        <Header />
        <Box
          sx={{
            // You can add styling here if needed, for example:
            flex: 1,
            padding: "20px",
          }}
        >
          <Outlet /> {/* Render nested route elements here */}
        </Box>
        <Footer />
      </Box>
  );
};

export default MainLayout;
