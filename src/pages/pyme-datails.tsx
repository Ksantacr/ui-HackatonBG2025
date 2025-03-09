"use client";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Link as MuiLink,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Rating,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ArrowBack,
  Business,
  Call,
  Email,
  FmdGood,
  Language,
  LocalHospital,
  Phone,
  ShoppingCart,
  Verified,
  WhatsApp,
} from "@mui/icons-material";
import { getProducts } from '../services/productServices';
import { useParams } from "react-router-dom";
import { Data } from "../types/data";

// Datos de ejemplo de pymes en el sector médico (extendido con más información)
const pymesMedicas = [
  {
    id: 1,
    nombre: "Clínica San Rafael",
    rubro: "Medicina",
    especialidad: "Clínica general",
    ubicacion: "Ciudad de México",
    direccion: "Av. Insurgentes Sur 1234, Col. Del Valle, CP 03100",
    telefono: "+52 (55) 1234-5678",
    whatsapp: "+5215512345678",
    email: "contacto@clinicasanrafael.mx",
    sitioWeb: "www.clinicasanrafael.mx",
    imagen: "/placeholder.svg?height=300&width=600",
    logo: "/placeholder.svg?height=100&width=100",
    descripcion:
      "Centro médico con servicios integrales de salud para toda la familia. Atención personalizada y tecnología de vanguardia.",
    descripcionLarga:
      "Clínica San Rafael es un centro médico de excelencia fundado en 1985, dedicado a brindar servicios integrales de salud con los más altos estándares de calidad. Contamos con un equipo de médicos especialistas y personal altamente capacitado, así como con instalaciones modernas y tecnología de vanguardia para garantizar la mejor atención a nuestros pacientes. Ofrecemos servicios de consulta general, especialidades médicas, estudios de laboratorio, imagenología, y procedimientos ambulatorios, todo en un mismo lugar para mayor comodidad de nuestros pacientes.",
    horario: "Lunes a Viernes: 8:00 - 20:00, Sábados: 9:00 - 14:00",
    fundacion: 1985,
    empleados: "50-100",
    certificaciones: [
      "Certificación ISO 9001",
      "Consejo de Salubridad General",
    ],
    redesSociales: {
      facebook: "clinicasanrafael",
      instagram: "clinica_sanrafael",
      twitter: "clinicasanrafael",
    },
    calificacion: 4.7,
    opiniones: 128,
    galeria: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    id: 2,
    nombre: "Laboratorios Médicos Especializados",
    rubro: "Medicina",
    especialidad: "Análisis clínicos",
    ubicacion: "Guadalajara",
    direccion: "Av. Américas 1500, Col. Providencia, CP 44630",
    telefono: "+52 (33) 9876-5432",
    whatsapp: "+5213398765432",
    email: "info@labmedicos.mx",
    sitioWeb: "www.labmedicos.mx",
    imagen: "/placeholder.svg?height=300&width=600",
    logo: "/placeholder.svg?height=100&width=100",
    descripcion:
      "Laboratorio especializado en análisis clínicos con la más alta precisión y resultados en tiempo récord.",
    descripcionLarga:
      "Laboratorios Médicos Especializados es una empresa líder en el sector de diagnóstico clínico, fundada en 1998 con el objetivo de ofrecer servicios de análisis clínicos con la más alta calidad y precisión. Contamos con tecnología de última generación y un equipo de profesionales altamente capacitados que garantizan resultados confiables en el menor tiempo posible. Nuestros procesos están certificados bajo estrictos estándares internacionales, lo que nos permite ofrecer más de 3,000 pruebas diferentes para satisfacer todas las necesidades de nuestros pacientes y médicos.",
    horario: "Lunes a Sábado: 7:00 - 19:00, Domingos: 8:00 - 13:00",
    fundacion: 1998,
    empleados: "100-250",
    certificaciones: [
      "Certificación ISO 15189",
      "College of American Pathologists (CAP)",
    ],
    redesSociales: {
      facebook: "labmedicosesp",
      instagram: "labmedicos_mx",
      linkedin: "laboratorios-medicos-especializados",
    },
    calificacion: 4.8,
    opiniones: 215,
    galeria: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
];

// Datos de productos por PyME
const productosPorPyme = {
  1: [
    {
      id: 101,
      nombre: "Consulta Médica General",
      descripcion:
        "Evaluación médica completa con un médico general certificado. Incluye historial médico, examen físico y recomendaciones de tratamiento.",
      precio: 800,
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Consultas",
      disponibilidad: "Inmediata",
      duracion: "30 minutos",
      destacado: true,
    },
    {
      id: 102,
      nombre: "Paquete de Análisis Clínicos Básico",
      descripcion:
        "Incluye biometría hemática, química sanguínea de 6 elementos, examen general de orina y perfil lipídico básico.",
      precio: 1200,
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Laboratorio",
      disponibilidad: "24-48 horas",
      preparacion: "Ayuno de 8 horas",
      destacado: true,
    },
    {
      id: 103,
      nombre: "Electrocardiograma",
      descripcion:
        "Estudio no invasivo que registra la actividad eléctrica del corazón para detectar problemas cardíacos.",
      precio: 650,
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Estudios",
      disponibilidad: "Inmediata",
      duracion: "15 minutos",
      destacado: false,
    },
    {
      id: 104,
      nombre: "Consulta con Especialista",
      descripcion:
        "Evaluación médica con especialistas en cardiología, neurología, gastroenterología, ginecología, pediatría o medicina interna.",
      precio: 1500,
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Consultas",
      disponibilidad: "Agenda previa",
      duracion: "45 minutos",
      destacado: true,
    },
    {
      id: 105,
      nombre: "Ultrasonido General",
      descripcion:
        "Estudio de imagen no invasivo que utiliza ondas sonoras para visualizar órganos internos y estructuras del cuerpo.",
      precio: 1800,
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Estudios",
      disponibilidad: "24 horas",
      preparacion: "Varía según el área a examinar",
      destacado: false,
    },
    {
      id: 106,
      nombre: "Paquete Check-up Básico",
      descripcion:
        "Evaluación médica completa que incluye consulta, análisis clínicos básicos, electrocardiograma y evaluación de factores de riesgo.",
      precio: 3500,
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Paquetes",
      disponibilidad: "Agenda previa",
      duracion: "2-3 horas",
      destacado: true,
    },
  ],
  2: [
    {
      id: 201,
      nombre: "Perfil Bioquímico Completo",
      descripcion:
        "Análisis completo que incluye 27 parámetros para evaluar el funcionamiento de órganos vitales como hígado, riñones y páncreas.",
      precio: 1800,
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Análisis Sanguíneos",
      disponibilidad: "24 horas",
      preparacion: "Ayuno de 8-12 horas",
      destacado: true,
    },
    {
      id: 202,
      nombre: "Perfil Hormonal Femenino",
      descripcion:
        "Evaluación completa de hormonas femeninas incluyendo estrógeno, progesterona, FSH, LH y prolactina.",
      precio: 2500,
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Análisis Hormonales",
      disponibilidad: "48 horas",
      preparacion:
        "Ayuno de 8 horas, idealmente entre el día 3-5 del ciclo menstrual",
      destacado: true,
    },
    {
      id: 203,
      nombre: "Perfil Tiroideo",
      descripcion:
        "Análisis de la función tiroidea que incluye T3, T4, TSH y anticuerpos antitiroideos para detectar hipo o hipertiroidismo.",
      precio: 1200,
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Análisis Hormonales",
      disponibilidad: "24 horas",
      preparacion: "No requiere ayuno",
      destacado: false,
    },
    {
      id: 204,
      nombre: "Prueba PCR COVID-19",
      descripcion:
        "Prueba molecular de alta precisión para la detección del virus SARS-CoV-2 mediante hisopado nasofaríngeo.",
      precio: 1500,
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Pruebas Especiales",
      disponibilidad: "24 horas",
      preparacion: "No requiere preparación especial",
      destacado: true,
    },
    {
      id: 205,
      nombre: "Perfil Lipídico Avanzado",
      descripcion:
        "Análisis detallado de lípidos que incluye colesterol total, HDL, LDL, VLDL, triglicéridos y apolipoproteínas para evaluar riesgo cardiovascular.",
      precio: 1600,
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Análisis Sanguíneos",
      disponibilidad: "24 horas",
      preparacion: "Ayuno de 12 horas",
      destacado: false,
    },
    {
      id: 206,
      nombre: "Paquete Check-up Completo",
      descripcion:
        "Evaluación integral que incluye perfil bioquímico, hemograma completo, perfil lipídico, perfil tiroideo, examen de orina y electrocardiograma.",
      precio: 4500,
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Paquetes",
      disponibilidad: "48-72 horas",
      preparacion: "Ayuno de 12 horas",
      destacado: true,
    },
  ],
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: { xs: 2, md: 3 } }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}




export default function PymeDetail() {
  const { pymeId } = useParams();
  console.log('id',pymeId);
  const pymeId1 =1;//temporal hasta tener api

  const theme = useTheme();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [pyme, setPyme] = useState<any>(null);
  const [productos, setProductos] = useState<any[]>([]);

  const [selectedPymesData, setSelectedPymesData] = useState<Data[]>([]);

  const handleBuyNowClick = () => {
    navigate("/product-purchase"); // Redirige a la página de compra
  };

  useEffect(() => {
    // En un caso real, aquí harías una llamada a la API para obtener los datos
    // basados en el ID de la PyME

    const fetchData = async () => {
      try {
        console.log('pymeId',pymeId)
        const data = await getProducts(pymeId);
        //const data = await getProducts(1123);
        console.log('data products pyme details',data);
        setSelectedPymesData(data);
      } catch (error) {
        console.error("Error fetching pymes data:", error);
      }
    };
    fetchData();
    //console.log(selectedPymesData);

  }, [pymeId]);

  useEffect(() => {
    console.log("selectedPymesData actualizado:",selectedPymesData);
    /*const pymeEncontrada = selectedPymesData.find((p) => p.id === 1123);
    if (pymeEncontrada) {
      setPyme(pymeEncontrada);
      const productosEncontrados =
        productosPorPyme[pymeId1 as keyof typeof productosPorPyme] || [];
      setProductos(productosEncontrados);
    }*/
      const pymeEncontrada = selectedPymesData[0]; // No es un array, solo un objeto
      console.log('pymeEncontrada',pymeEncontrada)

      if (!pymeEncontrada || pymeEncontrada.info.idCliente !== 1123) {
        console.error("No se encontró la PyME con el ID especificado.");
      } else {
        console.log("PyME encontrada:", pymeEncontrada);
        setPyme(pymeEncontrada);

        // Acceder a productos directamente desde el objeto
        const productosEncontrados = pymeEncontrada.productos || [];
        console.log("Productos encontrados:", productosEncontrados);
        setProductos(productosEncontrados);
      }
  }, [selectedPymesData]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  if (!pyme) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5">Cargando información...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper
        sx={{
          mb: 4,
          overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${pyme.imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          position: "relative",
        }}
      >
        <Box sx={{ p: { xs: 3, md: 5 } }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={2}>
              <Avatar
                src={pyme.logo}
                alt={pyme.nombre}
                sx={{
                  width: { xs: 80, md: 120 },
                  height: { xs: 80, md: 120 },
                  border: "3px solid white",
                  boxShadow: theme.shadows[3],
                  mx: { xs: "auto", md: 0 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", md: "flex-start" },
                    mb: 1,
                  }}
                >
                  <Typography variant="h4" component="h1" fontWeight="bold">
                    {pyme.nombre}
                  </Typography>
                  {pyme.calificacion > 4.5 && (
                    <Chip
                      icon={<Verified />}
                      label="Verificado"
                      size="small"
                      color="primary"
                      sx={{ ml: 2 }}
                    />
                  )}
                </Box>

                <Typography variant="body1" sx={{ mb: 2, maxWidth: "800px" }}>
                  {pyme.descripcion}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Chip
                    icon={<LocalHospital />}
                    label={`${pyme.rubro} - ${pyme.especialidad}`}
                    variant="outlined"
                    sx={{
                      borderColor: "rgba(255,255,255,0.5)",
                      color: "white",
                    }}
                  />
                  <Chip
                    icon={<FmdGood />}
                    label={pyme.ubicacion}
                    variant="outlined"
                    sx={{
                      borderColor: "rgba(255,255,255,0.5)",
                      color: "white",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      {/* Pestañas de información */}
      <Paper sx={{ mb: 4 }}>
        {/* Pestaña de Productos y Servicios */}

        <Typography variant="h5" gutterBottom>
          Productos y Servicios
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Descubre nuestra amplia gama de productos y servicios diseñados para
          satisfacer tus necesidades médicas.
        </Typography>

        <Grid container spacing={3}>
          {productos.map((producto) => (
            <Grid item xs={12} sm={6} md={4} key={producto.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={producto.imagen}
                  alt={producto.nombre}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 1,
                    }}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {producto.nombre}
                    </Typography>
                    <Chip
                      label={producto.categoria}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {producto.descripcion}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" color="primary" fontWeight="bold">
                      ${producto.precio.toLocaleString("es-MX")}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<ShoppingCart />}
                    onClick={handleBuyNowClick}
                  >
                    Comprar ahora
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
