import React from "react";
import { Box, Container, Grid, Typography, List, ListItem, Link as MuiLink, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme(); // Obtiene los colores del theme

  return (
    <Box sx={{ bgcolor: theme.palette.primary.dark, color: "white" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Sección de información */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Comunidad PyMEs
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Una iniciativa de Banco Guayaquil para impulsar el crecimiento de las pequeñas y medianas empresas ecuatorianas.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <img src="/placeholder.svg?height=60&width=180&text=BANCO GUAYAQUIL" alt="Banco Guayaquil" style={{ height: 40 }} />
            </Box>
          </Grid>

          {/* Secciones de enlaces */}
          {[
            { title: "Programas", items: ["Financiamiento", "Capacitación", "Networking", "Digitalización", "Mercados"] },
            { title: "Recursos", items: ["Blog", "Webinars", "Casos de éxito", "Guías", "Herramientas"] },
            { title: "Empresa", items: ["Sobre nosotros", "Contacto", "Preguntas frecuentes", "Términos", "Privacidad"] },
          ].map((section, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                {section.title}
              </Typography>
              <List dense disablePadding>
                {section.items.map((item, idx) => (
                  <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                    <MuiLink href="#" underline="hover" color="inherit" sx={{ opacity: 0.8, "&:hover": { opacity: 1 } }}>
                      {item}
                    </MuiLink>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}

          {/* Redes Sociales */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Síguenos
            </Typography>
            <List dense disablePadding>
              {[
                { name: "Facebook", icon: <Facebook fontSize="small" /> },
                { name: "Twitter", icon: <Twitter fontSize="small" /> },
                { name: "Instagram", icon: <Instagram fontSize="small" /> },
                { name: "LinkedIn", icon: <LinkedIn fontSize="small" /> },
                { name: "WhatsApp", icon: <WhatsApp fontSize="small" /> },
              ].map((item, idx) => (
                <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                  <MuiLink href="#" underline="hover" color="inherit" sx={{ opacity: 0.8, "&:hover": { opacity: 1 }, display: "flex", alignItems: "center" }}>
                    {item.icon}
                    <Box component="span" sx={{ ml: 1 }}>
                      {item.name}
                    </Box>
                  </MuiLink>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Derechos reservados y enlaces */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: { xs: 2, sm: 0 } }}>
            © {new Date().getFullYear()} Banco Guayaquil. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <MuiLink href="#" underline="hover" color="inherit" sx={{ opacity: 0.8, "&:hover": { opacity: 1 } }}>
              Términos y condiciones
            </MuiLink>
            <MuiLink href="#" underline="hover" color="inherit" sx={{ opacity: 0.8, "&:hover": { opacity: 1 } }}>
              Política de privacidad
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
