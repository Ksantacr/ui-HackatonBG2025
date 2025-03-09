import React, { useState } from "react";

import { AppBar, Stack, Divider, IconButton, Toolbar, Typography, Tabs, Tab, Grid, Avatar, Box } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";


// Componente para crear enlaces dentro de Tabs
function LinkTab(props) {
  return (
    <Tab
      component={Link}
      to={props.to}
      aria-current={props.selected ? "page" : undefined}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

const ResponsiveAppBar = () => {

  const location = useLocation(); // Obtiene la ruta actual
  const theme = useTheme(); // Obtiene colores del theme
  const [selectedTab, setSelectedTab] = useState(location.pathname); // Estado de pestaña activa



  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      enableColorOnDark
      sx={{
        p: 1,
        backdropFilter: "blur(10px)", // Desenfoque para efecto Glassmorphism
        bgcolor: "#D2006E", // Fondo translúcido
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Sombra suave
        border: "1px solid rgba(255, 255, 255, 0.3)", // Borde sutil
      }}
    >
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          {/* Logo */}
          <Grid item>
            <img src="https://www.bancoguayaquil.com/static/1f7d8003e7b7de4c0244b5d4116dd882/63159/logo_bg_white.png" alt="Logo" style={{ height: 50, padding: 2 }} />
          </Grid>

          {/* Navegación con Tabs */}
          <Grid item>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="secondary"
            >
              <LinkTab label="Inicio" to="/landing-page" selected={selectedTab === "/landing-page"} value="/landing-page"  />
              <LinkTab label="Comunidad" to="/community" selected={selectedTab === "/community"} value="/community" />
              <LinkTab label="Mi Pyme" to="/my-pyme" selected={selectedTab === "/my-pyme"} value="/my-pyme" />
            </Tabs>
          </Grid>

          {/* Avatar, Nombre y Logout */}
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="subtitle1" color={theme.palette.text.primary}>
               Bienvenido
              </Typography>
              <Avatar alt="User" src="https://i.pravatar.cc/40" />
              <Divider orientation="vertical" flexItem />
              <IconButton  color="primary" size="small">
                <LogoutOutlined />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;
