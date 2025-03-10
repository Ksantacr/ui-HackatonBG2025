"use client"

import type React from "react"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Pagination,
  Paper,
  Select,
  type SelectChangeEvent,
  TextField,
  Typography,
  useTheme,
} from "@mui/material"
import { Email, FilterList, FmdGood, LocalHospital, Phone, Search } from "@mui/icons-material"
import HeroSection from "../components/hero-section"
import { getPymes } from '../services/pymeServices';
import { Data } from "../types/data";
// Datos de ejemplo de pymes en el sector médico
/*const pymesMedicas = [
  {
    id: 1,
    nombre: "Clínica San Rafael",
    rubro: "Medicina",
    especialidad: "Clínica general",
    ubicacion: "Ciudad de México",
    telefono: "+52 (55) 1234-5678",
    email: "contacto@clinicasanrafael.mx",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion:
      "Centro médico con servicios integrales de salud para toda la familia. Atención personalizada y tecnología de vanguardia.",
  },
  {
    id: 2,
    nombre: "Laboratorios Médicos Especializados",
    rubro: "Medicina",
    especialidad: "Análisis clínicos",
    ubicacion: "Guadalajara",
    telefono: "+52 (33) 9876-5432",
    email: "info@labmedicos.mx",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion:
      "Laboratorio especializado en análisis clínicos con la más alta precisión y resultados en tiempo récord.",
  },
  {
    id: 3,
    nombre: "Farmacia del Bienestar",
    rubro: "Medicina",
    especialidad: "Farmacéutica",
    ubicacion: "Monterrey",
    telefono: "+52 (81) 2345-6789",
    email: "ventas@farmaciadelbienestar.mx",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion: "Cadena de farmacias con medicamentos a precios accesibles y atención farmacéutica personalizada.",
  },
  {
    id: 4,
    nombre: "Centro de Rehabilitación Física Integral",
    rubro: "Medicina",
    especialidad: "Fisioterapia",
    ubicacion: "Puebla",
    telefono: "+52 (22) 3456-7890",
    email: "citas@rehabilitacionintegral.mx",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion:
      "Especialistas en rehabilitación física con terapeutas certificados y equipamiento de última generación.",
  },
  {
    id: 5,
    nombre: "Consultorio Dental Sonrisas",
    rubro: "Medicina",
    especialidad: "Odontología",
    ubicacion: "Querétaro",
    telefono: "+52 (44) 5678-9012",
    email: "citas@sonrisasdental.mx",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion: "Clínica dental especializada en tratamientos estéticos y restaurativos con tecnología de punta.",
  },
  {
    id: 6,
    nombre: "Centro Oftalmológico Visión Clara",
    rubro: "Medicina",
    especialidad: "Oftalmología",
    ubicacion: "Mérida",
    telefono: "+52 (99) 6789-0123",
    email: "info@visionclara.mx",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion:
      "Especialistas en salud visual con diagnósticos precisos y tratamientos personalizados para cada paciente.",
  },
  {
    id: 7,
    nombre: "Distribuidora de Equipos Médicos",
    rubro: "Medicina",
    especialidad: "Equipamiento médico",
    ubicacion: "Tijuana",
    telefono: "+52 (66) 7890-1234",
    email: "ventas@equiposmedicos.mx",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion: "Venta y distribución de equipamiento médico de alta calidad para hospitales y consultorios.",
  },
  {
    id: 8,
    nombre: "Centro de Diagnóstico por Imágenes",
    rubro: "Medicina",
    especialidad: "Radiología",
    ubicacion: "León",
    telefono: "+52 (47) 8901-2345",
    email: "citas@centrodiagnostico.mx",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion: "Servicios de diagnóstico por imágenes con equipos de última generación y médicos especialistas.",
  },
  {
    id: 9,
    nombre: "Clínica de Nutrición y Bienestar",
    rubro: "Medicina",
    especialidad: "Nutrición",
    ubicacion: "Cancún",
    telefono: "+52 (99) 8765-4321",
    email: "citas@nutribienestar.mx",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion:
      "Asesoramiento nutricional personalizado para mejorar la salud y calidad de vida de nuestros pacientes.",
  },
  {
    id: 10,
    nombre: "Servicios de Ambulancias Rápidas",
    rubro: "Medicina",
    especialidad: "Servicios de emergencia",
    ubicacion: "Toluca",
    telefono: "+52 (72) 2345-6789",
    email: "emergencias@ambulanciasrapidas.mx",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion:
      "Servicio de ambulancias con atención inmediata y personal médico altamente capacitado para emergencias.",
  },
  {
    id: 11,
    nombre: "Laboratorio de Prótesis Dentales",
    rubro: "Medicina",
    especialidad: "Odontología",
    ubicacion: "Morelia",
    telefono: "+52 (44) 3456-7890",
    email: "info@protesisdentales.mx",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion: "Fabricación de prótesis dentales personalizadas con materiales de alta calidad y precisión.",
  },
  {
    id: 12,
    nombre: "Centro de Salud Mental Equilibrio",
    rubro: "Medicina",
    especialidad: "Psiquiatría",
    ubicacion: "Veracruz",
    telefono: "+52 (22) 9876-5432",
    email: "citas@equilibriomental.mx",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion:
      "Atención psicológica y psiquiátrica integral con enfoque en el bienestar emocional y la salud mental.",
  },
]*/

export default function Community() {
  const theme = useTheme()
  const [searchTerm, setSearchTerm] = useState("")
  const [especialidadFilter, setEspecialidadFilter] = useState("")
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [selectedPyme, setSelectedPyme] = useState<any>(null)
  const [page, setPage] = useState(1)
  const itemsPerPage = 6
  const [selectedPymesData, setSelectedPymesData] = useState<Data[]>([]);
  useEffect(() => {

    let transformedData: Data[] = [
      {
        info: {
          idCliente: 156464,
          nombre: "Contoso S.A.",
          ruc: "",
          descripcion: "Descripción de la empresa.",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJtBus7afumof5kfZW27n62LkUN-wdvoakA&s",
          categoria: "Medicina",
          calificacion: 4.5,
          contactabilidad: {
            pais: "Ecuador",
            ciudad: "Guayaquil",
            provincia: "Guayas",
            calle_principal: "Av. 9 de Octubre",
            calle_secundaria: "Av. Malecon",
            numero: "123",
            referencia: "Frente al parque central",
            latitud: -2.1894,
            longitud: -79.8891,
            email1: "contacto@contoso.com",
            email2: "soporte@contoso.com",
            telefono1: "+593987654321",
            telefono2: "+593123456789"
          }
        },
        productos: [
          {
            idProducto: "P001",
            nombre: "Producto A",
            precio: 25.99,
            stock: 100,
            descripcion: "Un producto de alta calidad.",
            categoria: "Medicina"
          },
          {
            idProducto: "P002",
            nombre: "Producto B",
            precio: 15.49,
            stock: 50,
            descripcion: "Otro producto de excelente rendimiento.",
            categoria: "Medicina"
          }
        ]
      },
      {
        info: {
          idCliente: 789123,
          nombre: "FarmaCorp Ltda.",
          ruc: "1234567890",
          descripcion: "Proveedor líder en insumos médicos.",
          logo: "https://cdn.prod.website-files.com/62a85c75feb9bdf4905f9f24/66f568a04cf5275fd7481aef_668f809f2232881730d50130_hero.jpeg",
          categoria: "Salud",
          calificacion: 4.8,
          contactabilidad: {
            pais: "Perú",
            ciudad: "Lima",
            provincia: "Lima",
            calle_principal: "Av. Javier Prado",
            calle_secundaria: "Calle Las Begonias",
            numero: "456",
            referencia: "Cerca del centro financiero",
            latitud: -12.0977,
            longitud: -77.0297,
            email1: "ventas@farmacorp.com",
            email2: "info@farmacorp.com",
            telefono1: "+51123456789",
            telefono2: "+51198765432"
          }
        },
        productos: [
          {
            idProducto: "P003",
            nombre: "Producto C",
            precio: 35.75,
            stock: 200,
            descripcion: "Producto innovador para la salud.",
            categoria: "Salud"
          },
          {
            idProducto: "P004",
            nombre: "Producto D",
            precio: 20.99,
            stock: 80,
            descripcion: "Producto confiable y eficiente.",
            categoria: "Salud"
          }
        ]
      },
      {
        info: {
          idCliente: 156469,
          nombre: "TravelEcuador S.A.",
          ruc: "",
          descripcion: "Empresa de turismo en Ecuador",
          logo: "https://img.goraymi.com/2021/06/29/892be3651314ca15cd17b6480f0fd3ae_xl.jpg",
          categoria: "Turismo",
          calificacion: 4.5,
          contactabilidad: {
            pais: "Ecuador",
            ciudad: "Quito",
            provincia: "Pichincha",
            calle_principal: "Av. Amazonas",
            calle_secundaria: "Av. Nayon",
            numero: "123",
            referencia: "Frente al parque central",
            latitud: -2.1894,
            longitud: -79.8891,
            email1: "contacto@contoso.com",
            email2: "soporte@contoso.com",
            telefono1: "+593987654321",
            telefono2: "+593123456789"
          }
        },
        productos: [
          {
            idProducto: "P001",
            nombre: "Producto A",
            precio: 25.99,
            stock: 100,
            descripcion: "Un producto de alta calidad.",
            categoria: "Medicina"
          },
          {
            idProducto: "P002",
            nombre: "Producto B",
            precio: 15.49,
            stock: 50,
            descripcion: "Otro producto de excelente rendimiento.",
            categoria: "Medicina"
          }
        ]
      },
    ];

    setSelectedPymesData(transformedData);

    // const apiUrl = "https://9887-181-198-17-31.ngrok-free.app/";
    // console.log('apiUrl',apiUrl);
    // const fetchData = async () => {
    //   try {
    //     const data = await getPymes();
    //     console.log('data',data)
    //     setSelectedPymesData(data);
    //   } catch (error) {
    //     console.error("Error fetching pymes data:", error);
    //   }
    // };

    // fetchData();
  }, []);


  const filteredPymes = selectedPymesData.filter((pyme) => {
    const matchesSearch =
      pyme.info.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pyme.info.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (pyme.info.contactabilidad.provincia ? pyme.info.contactabilidad.pais.toLowerCase().includes(searchTerm.toLowerCase()) : false); // Verifica si ubicacion existe

    // const matchesEspecialidad =
    //   especialidadFilter === "" || (pyme.especialidad && pyme.especialidad === especialidadFilter); // Verifica si especialidad existe

    return matchesSearch; //&& matchesEspecialidad;
  });

  // Paginación
  const totalPages = Math.ceil(filteredPymes.length / itemsPerPage);
  const paginatedPymes = filteredPymes.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setPage(1) // Reset to first page on new search
  }

  const handleEspecialidadChange = (event: SelectChangeEvent) => {
    setEspecialidadFilter(event.target.value)
    setPage(1) // Reset to first page on new filter
  }

  const handleContactClick = (pyme) => {
    console.log('a pyme details',pyme);
    setSelectedPyme(pyme)
    navigate(`/pyme-details/${pyme.idCliente}`);
    //navigate(`/pyme-details`);
  }

  const handleCloseDialog = () => {
    setContactDialogOpen(false)
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const navigate = useNavigate();



  return (

    <Container maxWidth="lg" sx={{ py: 4 }}>
       <HeroSection
        title="Comunidad de Pymes"
        subtitle="Descubre productos y servicios de calidad ofrecidos por pequeñas y medianas empresas ecuatorianas. Apoya el emprendimiento local."
        backgroundImage="https://www.bancoguayaquil.com/static/f809ace18c9a6a782e6f2f61970b5b52/70f2d/Desktop6_2916x1489x150px.webp"
        primaryButtonText="Explorar Productos"
        secondaryButtonText="Vender en el Marketplace"
        overlay={0.75}
        children={
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 3,
              mt: 4,
              p: 3,
              bgcolor: "rgba(22, 15, 65, 0.7)",
              borderRadius: 2,
              backdropFilter: "blur(10px)",
              maxWidth: { xs: "100%", md: "600px" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ fontSize: 40, mr: 2, color: "primary.main" }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  +5,000
                </Typography>
                <Typography variant="body2">Productos disponibles</Typography>
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ fontSize: 40, mr: 2, color: "primary.main" }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  +500
                </Typography>
                <Typography variant="body2">PyMEs registradas</Typography>
              </Box>
            </Box>
          </Box>
        }
      />
      <Box sx={{ mb: 4 , py:4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          Comunidad Pymes
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Encuentra y contacta con pequeñas y medianas empresas de cualquier sector
        </Typography>
      </Box>

      <Paper sx={{ mb: 4, p: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel htmlFor="search-pymes">Buscar</InputLabel>
              <OutlinedInput
                id="search-pymes"
                value={searchTerm}
                onChange={handleSearchChange}
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
                label="Buscar"
                placeholder="Buscar por nombre, ubicación o descripción"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <InputLabel id="especialidad-filter-label">Filtrar por Especialidad</InputLabel>
              <Select
                labelId="especialidad-filter-label"
                id="especialidad-filter"
                value={especialidadFilter}
                label="Filtrar por Especialidad"
                onChange={handleEspecialidadChange}
                startAdornment={
                  <InputAdornment position="start">
                    <FilterList />
                  </InputAdornment>
                }
              >
                <MenuItem value="">Todas las especialidades</MenuItem>
                {/* {selectedPymesData.map((especialidad) => (
                  <MenuItem key={especialidad} value={especialidad} >
                    {especialidad}
                  </MenuItem>
                ))} */}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {filteredPymes.length > 0 ? (
        <>
          <Grid container spacing={3}>
            {paginatedPymes.map((pyme) => (
              <Grid item xs={12} sm={6} md={4} key={pyme.info.idCliente}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia component="img" height="160" image={pyme.info.logo} alt={pyme.info.nombre} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                    {pyme.info.nombre}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <LocalHospital fontSize="small" color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {/* {pyme.info.rubro} - {pyme.especialidad} */}
                        Rubro - Especialidad
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <FmdGood fontSize="small" color="action" sx={{ mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                      {pyme.info.contactabilidad.ciudad}, {pyme.info.contactabilidad.provincia}, {pyme.info.contactabilidad.pais}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {pyme.info.descripcion.length > 100 ? `${pyme.info.descripcion.substring(0, 100)}...` : pyme.info.descripcion}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between", alignSelf:"center", p: 2, pt: 0 }}>
                    <Button variant="contained" size="small" onClick={() => handleContactClick(pyme)}>
                      Ver productos
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {totalPages > 1 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Pagination count={totalPages} page={page} onChange={handlePageChange} color="primary" size="large" />
            </Box>
          )}
        </>
      ) : (
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            No se encontraron resultados
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Intenta con otros términos de búsqueda o filtros
          </Typography>
        </Paper>
      )}

    </Container>
  )
}

