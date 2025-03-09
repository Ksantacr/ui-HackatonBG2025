"use client"

import type React from "react"
import { useState } from "react"
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Rating,
  Snackbar,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import {
  AccountBalance,
  ArrowForward,
  Business,
  BusinessCenter,
  CheckCircle,
  ConnectWithoutContact,
  CurrencyExchange,
  Email,
  Facebook,
  Handshake,
  Instagram,
  KeyboardArrowDown,
  LinkedIn,
  LocalShipping,
  LocationOn,
  MonetizationOn,
  People,
  Phone,
  School,
  Security,
  ShoppingCart,
  Speed,
  Storefront,
  Twitter,
  Verified,
  WhatsApp,
} from "@mui/icons-material"


const testimonios = [
  {
    id: 1,
    nombre: "María González",
    empresa: "Artesanías Ecuatorianas",
    foto: "/placeholder.svg?height=80&width=80",
    testimonio:
      "Gracias a la comunidad de PyMEs y el respaldo de Banco Guayaquil, pudimos expandir nuestro negocio a mercados internacionales. El acceso a crédito y la red de contactos han sido fundamentales para nuestro crecimiento.",
    calificacion: 5,
    sector: "Artesanías",
  },
  {
    id: 2,
    nombre: "Carlos Mendoza",
    empresa: "Distribuidora Agrícola del Pacífico",
    foto: "/placeholder.svg?height=80&width=80",
    testimonio:
      "Formar parte de esta comunidad nos ha permitido conectar con proveedores y clientes que no hubiéramos encontrado por nuestra cuenta. Las capacitaciones en finanzas y marketing digital transformaron nuestra operación.",
    calificacion: 5,
    sector: "Agricultura",
  },
  {
    id: 3,
    nombre: "Lucía Ramírez",
    empresa: "TechSolutions Ecuador",
    foto: "/placeholder.svg?height=80&width=80",
    testimonio:
      "El programa de aceleración empresarial y el financiamiento preferencial nos ayudaron a desarrollar nuestra plataforma de software. Hoy tenemos clientes en todo el país gracias al respaldo de esta iniciativa.",
    calificacion: 4.5,
    sector: "Tecnología",
  },
]

// Datos de ejemplo para estadísticas
const estadisticas = [
  {
    valor: "5,000+",
    etiqueta: "PyMEs beneficiadas",
    icono: <Business fontSize="large" />,
  },
  {
    valor: "$50M+",
    etiqueta: "En financiamiento",
    icono: <MonetizationOn fontSize="large" />,
  },
  {
    valor: "200+",
    etiqueta: "Alianzas comerciales",
    icono: <Handshake fontSize="large" />,
  },
  {
    valor: "85%",
    etiqueta: "Tasa de crecimiento",
    icono: <Speed fontSize="large" />,
  },
]

// Datos de ejemplo para programas
const programas = [
  {
    id: 1,
    titulo: "Financiamiento Preferencial",
    descripcion:
      "Accede a líneas de crédito con tasas preferenciales y plazos flexibles diseñados específicamente para impulsar el crecimiento de tu PyME.",
    icono: <CurrencyExchange fontSize="large" />,
    color: "#2E7D32", // verde
  },
  {
    id: 2,
    titulo: "Capacitación Empresarial",
    descripcion:
      "Participa en talleres, webinars y cursos especializados en gestión empresarial, marketing digital, finanzas y más, impartidos por expertos.",
    icono: <School fontSize="large" />,
    color: "#1565C0", // azul
  },
  {
    id: 3,
    titulo: "Networking Estratégico",
    descripcion:
      "Conecta con otras PyMEs, grandes empresas, proveedores y clientes potenciales a través de eventos exclusivos y nuestra plataforma digital.",
    icono: <ConnectWithoutContact fontSize="large" />,
    color: "#6A1B9A", // morado
  },
  {
    id: 4,
    titulo: "Digitalización de Negocios",
    descripcion:
      "Transforma tu negocio con herramientas digitales, e-commerce y soluciones tecnológicas con asesoría personalizada y costos preferenciales.",
    icono: <ShoppingCart fontSize="large" />,
    color: "#C62828", // rojo
  },
  {
    id: 5,
    titulo: "Acceso a Mercados",
    descripcion:
      "Expande tu alcance con programas de internacionalización, ferias comerciales y marketplaces exclusivos para miembros de la comunidad.",
    icono: <Storefront fontSize="large" />,
    color: "#EF6C00", // naranja
  },
  {
    id: 6,
    titulo: "Cadena de Suministro",
    descripcion:
      "Optimiza tu cadena de valor con acceso a proveedores certificados, logística integrada y condiciones especiales para miembros de la red.",
    icono: <LocalShipping fontSize="large" />,
    color: "#00838F", // cian
  },
]

// Datos de ejemplo para sectores
const sectores = [
  "Agricultura",
  "Manufactura",
  "Comercio",
  "Servicios",
  "Tecnología",
  "Turismo",
  "Construcción",
  "Salud",
  "Educación",
  "Transporte",
  "Alimentación",
  "Textil",
]

export default function HomePage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))
  const [activeTab, setActiveTab] = useState(0)
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }





  return (
    <Box sx={{ bgcolor: "#f8f9FFfa" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(22, 15, 65, 0.7)), url('https://www.bancoguayaquil.com/static/99f569c1b35ed6741dcded78803fd2d8/9c00f/Por-que-ahorrar-en-un-banco-es-tu-opcion-mas-segura.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          py: { xs: 8, md: 12 },
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                variant="h2"
                component="h1"
                fontWeight="bold"
                sx={{
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                Impulsando el Crecimiento de las Pymes Ecuatorianas
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  maxWidth: "800px",
                }}
              >
                Una comunidad empresarial respaldada por Banco Guayaquil para fortalecer la cadena de valor de las
                pequeñas y medianas empresas.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  endIcon={<ArrowForward />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                >
                  Únete a la Comunidad
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: "1.1rem",
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Conoce Más
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper
                elevation={6}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.95)",
                  color: "text.primary",
                  mt: { xs: 4, md: 0 },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <AccountBalance color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h5" fontWeight="bold" color="primary">
                    Comunidad exclusiva
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  Accede a financiamiento preferencial, asesoría financiera y conexión para el
                  crecimiento de tu negocio.
                </Typography>
                <List dense>
                  {[
                    "Tasas preferenciales",
                    "Pymes Verificadas",
                    "Análisis de mercado",
                    "Garantía de respaldo",
                  ].map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
                <Button variant="contained" fullWidth sx={{ mt: 2 }} endIcon={<ArrowForward />}>
                  Solicitar Financiamiento
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            position: "absolute",
            bottom: -1,
            left: 0,
            width: "100%",
            textAlign: "center",
            color: "white",
          }}
        >
          <IconButton
            sx={{
              color: "white",
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
            }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }}
          >
            <KeyboardArrowDown />
          </IconButton>
        </Box>
      </Box>

     

      {/* Sección Acerca de la Iniciativa */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="overline" color="primary" fontWeight="bold">
              ACERCA DE LA INICIATIVA
            </Typography>
            <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
              Fortaleciendo el Ecosistema Empresarial
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              La Comunidad de PyMEs de Banco Guayaquil es una iniciativa integral diseñada para impulsar el crecimiento
              sostenible de las pequeñas y medianas empresas ecuatorianas, fortaleciendo toda la cadena de valor.
            </Typography>
            <Typography variant="body1" paragraph>
              Nuestro objetivo es crear un ecosistema empresarial robusto donde las PyMEs puedan acceder a
              financiamiento, capacitación, tecnología, mercados y conexiones estratégicas que potencien su desarrollo y
              competitividad.
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              {[
                { icon: <MonetizationOn color="primary" />, text: "Financiamiento a medida" },
                { icon: <School color="primary" />, text: "Capacitación especializada" },
                { icon: <Handshake color="primary" />, text: "Networking estratégico" },
                { icon: <ShoppingCart color="primary" />, text: "Digitalización de negocios" },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    {item.icon}
                    <Typography variant="body1" fontWeight="medium" sx={{ ml: 1 }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://www.bancoguayaquil.com/static/f39db5cd31b34d606c41c0dc799daa10/70f2d/Desktop6_2916x1489x150px.webp"
              alt="Comunidad de PyMEs"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 4,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Estadísticas */}
      <Box sx={{ bgcolor: theme.palette.primary.main, color: "white", py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" fontWeight="bold" gutterBottom>
            Impacto en Números
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 6,
              maxWidth: 800,
              mx: "auto",
              opacity: 0.9,
            }}
          >
            Desde su lanzamiento, nuestra comunidad ha generado un impacto significativo en el ecosistema empresarial
            ecuatoriano.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {estadisticas.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderRadius: 2,
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      bgcolor: "rgba(255,255,255,0.15)",
                    },
                  }}
                >
                  <Box sx={{ mb: 1 }}>{stat.icono}</Box>
                  <Typography variant="h3" component="div" fontWeight="bold" sx={{ mb: 1 }}>
                    {stat.valor}
                  </Typography>
                  <Typography variant="body1">{stat.etiqueta}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Programas y Beneficios */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" fontWeight="bold" gutterBottom>
          Programas y Beneficios
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            mb: 6,
            maxWidth: 800,
            mx: "auto",
          }}
        >
          Descubre las soluciones integrales que ofrecemos para potenciar cada aspecto de tu negocio y fortalecer toda
          la cadena de valor.
        </Typography>

        <Grid container spacing={3}>
          {programas.map((programa) => (
            <Grid item xs={12} sm={6} md={4} key={programa.id}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: programa.color,
                        width: 56,
                        height: 56,
                        mr: 2,
                      }}
                    >
                      {programa.icono}
                    </Avatar>
                    <Typography variant="h5" component="h3" fontWeight="bold">
                      {programa.titulo}
                    </Typography>
                  </Box>
                  <Typography variant="body1">{programa.descripcion}</Typography>
                  <Button variant="text" color="primary" sx={{ mt: 2 }} endIcon={<ArrowForward />}>
                    Más información
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Cadena de Valor */}
      <Box sx={{ bgcolor: "#f0f4f8", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src="https://www.bancoguayaquil.com/static/f809ace18c9a6a782e6f2f61970b5b52/70f2d/Desktop6_2916x1489x150px.webp"
                alt="Cadena de valor"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 4,
                }}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="overline" color="primary" fontWeight="bold">
                FORTALECIMIENTO INTEGRAL
              </Typography>
              <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
                Potenciando la Cadena de Valor
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
                Nuestra iniciativa está diseñada para fortalecer cada eslabón de la cadena de valor, desde proveedores
                hasta clientes finales, creando un ecosistema empresarial más robusto y competitivo.
              </Typography>

              <Box sx={{ mt: 4 }}>
                {[
                  {
                    titulo: "Proveedores",
                    descripcion:
                      "Conectamos a proveedores con PyMEs para crear relaciones comerciales estables y mutuamente beneficiosas.",
                    icono: <LocalShipping color="primary" fontSize="large" />,
                  },
                  {
                    titulo: "Producción y Operaciones",
                    descripcion:
                      "Optimizamos procesos productivos con tecnología, capacitación y financiamiento para equipamiento.",
                    icono: <Business color="primary" fontSize="large" />,
                  },
                  {
                    titulo: "Distribución y Comercialización",
                    descripcion:
                      "Facilitamos el acceso a nuevos canales de venta, tanto físicos como digitales, ampliando el alcance de mercado.",
                    icono: <Storefront color="primary" fontSize="large" />,
                  },
                  {
                    titulo: "Cliente Final",
                    descripcion:
                      "Mejoramos la experiencia del cliente con soluciones digitales y estrategias de fidelización.",
                    icono: <People color="primary" fontSize="large" />,
                  },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      mb: 3,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: index % 2 === 0 ? "rgba(25, 118, 210, 0.05)" : "transparent",
                    }}
                  >
                    <Box sx={{ mr: 2 }}>{item.icono}</Box>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {item.titulo}
                      </Typography>
                      <Typography variant="body1">{item.descripcion}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

     
      {/* CTA - Únete */}
      <Box
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/placeholder.svg?height=600&width=1200')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white",
          py: 8,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
            ¿Listo para impulsar tu PyME?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Únete a nuestra comunidad y accede a financiamiento, capacitación, networking y herramientas para potenciar
            el crecimiento de tu negocio.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              endIcon={<ArrowForward />}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              Únete Ahora
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsApp />}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Habla con un Asesor
            </Button>
          </Stack>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Chip
              icon={<Security />}
              label="100% Seguro"
              sx={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}
              variant="outlined"
            />
            <Chip
              icon={<Verified />}
              label="Respaldo Banco Guayaquil"
              sx={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}
              variant="outlined"
            />
          </Box>
        </Container>
      </Box>
      {/* Sectores */}
      <Box sx={{ bgcolor: "#f0f4f8", py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" fontWeight="bold" gutterBottom>
            Sectores Participantes
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 6,
              maxWidth: 800,
              mx: "auto",
            }}
          >
            Nuestra comunidad abarca PyMEs de diversos sectores, creando un ecosistema empresarial completo y
            diversificado.
          </Typography>

          <Grid container spacing={2}>
            {sectores.map((sector, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <Paper
                  sx={{
                    p: 2,
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 3,
                      bgcolor: theme.palette.primary.main,
                      color: "white",
                    },
                  }}
                >
                  <BusinessCenter sx={{ mb: 1 }} />
                  <Typography variant="body1" fontWeight="medium">
                    {sector}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>



    

    

      
      
    </Box>
  )
}

