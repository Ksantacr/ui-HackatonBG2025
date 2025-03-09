"use client"

import type React from "react"
import { useState,useEffect } from "react"
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
import { getPymes } from '../services/pymeServices';

// Datos de ejemplo de pymes en el sector médico
const pymesMedicas1 = [
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
]

export default function Community() {
  const theme = useTheme()
  const [searchTerm, setSearchTerm] = useState("")
  const [especialidadFilter, setEspecialidadFilter] = useState("")
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [selectedPyme, setSelectedPyme] = useState<any>(null)
  const [page, setPage] = useState(1)
  const itemsPerPage = 6
  const [selectedPymesData, setSelectedPymesData] = useState<Data[]>([]);


  // Obtener lista única de especialidades para el filtro
  //const especialidades = [...new Set(pymesMedicas.map((pyme) => pyme.especialidad))]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPymes();
        setSelectedPymesData(data);
      } catch (error) {
        console.error("Error fetching pymes data:", error);
      }
    };

    fetchData();
  }, []);
  

  

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setPage(1) // Reset to first page on new search
  }

  const handleEspecialidadChange = (event: SelectChangeEvent) => {
    setEspecialidadFilter(event.target.value)
    setPage(1) // Reset to first page on new filter
  }

  const handleContactClick = (pyme: any) => {
    setSelectedPyme(pyme)
    setContactDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setContactDialogOpen(false)
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }


  
  

  const filteredPymes = selectedPymesData.filter((pyme) => {
    const matchesSearch =
      pyme.info.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pyme.info.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (pyme.ubicacion ? pyme.ubicacion.toLowerCase().includes(searchTerm.toLowerCase()) : false); // Verifica si ubicacion existe
  
    const matchesEspecialidad =
      especialidadFilter === "" || (pyme.especialidad && pyme.especialidad === especialidadFilter); // Verifica si especialidad existe
  
    return matchesSearch && matchesEspecialidad;
  });
  
  // Paginación
  const totalPages = Math.ceil(filteredPymes.length / itemsPerPage);
  const paginatedPymes = filteredPymes.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  
  

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          Directorio de PyMEs Médicas
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Encuentra y contacta con pequeñas y medianas empresas del sector médico
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
                {selectedPymesData.map((especialidad) => (
                  <MenuItem key={especialidad} value={especialidad}>
                    {especialidad}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {filteredPymes.length >= 0 ? (
        <>
          <Grid container spacing={3}>
            {paginatedPymes.map((pyme) => (
              <Grid item xs={12} sm={6} md={4} key={pyme.id}>
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
                  <CardMedia component="img" height="160" image={pyme.info.imagen} alt={pyme.info.nombre} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {pyme.info.nombre}
                    </Typography>
                    {/*<Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <LocalHospital fontSize="small" color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {pyme.rubro} - {pyme.especialidad}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <FmdGood fontSize="small" color="action" sx={{ mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {pyme.ubicacion}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {pyme.descripcion.length > 100 ? `${pyme.descripcion.substring(0, 100)}...` : pyme.descripcion}
                    </Typography>*/}
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between", p: 2, pt: 0 }}>
                    <Button variant="outlined" size="small" href={`mailto:${pyme.email}`} startIcon={<Email />}>
                      Email
                    </Button>
                    <Button variant="contained" size="small" onClick={() => handleContactClick(pyme)}>
                      Contactar
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

      {/* Diálogo de contacto */}
      <Dialog open={contactDialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Contactar a {selectedPyme?.nombre}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              {selectedPyme && (
                <img
                  src={selectedPyme.imagen || "/placeholder.svg"}
                  alt={selectedPyme.nombre}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={8}>
              {selectedPyme && (
                <>
                  <Typography variant="h6" gutterBottom>
                    {selectedPyme.nombre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {selectedPyme.descripcion}
                  </Typography>
                  <List dense>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemAvatar sx={{ minWidth: 40 }}>
                        <LocalHospital fontSize="small" color="primary" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${selectedPyme.rubro} - ${selectedPyme.especialidad}`}
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItem>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemAvatar sx={{ minWidth: 40 }}>
                        <FmdGood fontSize="small" color="action" />
                      </ListItemAvatar>
                      <ListItemText primary={selectedPyme.ubicacion} primaryTypographyProps={{ variant: "body2" }} />
                    </ListItem>
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemAvatar sx={{ minWidth: 40 }}>
                        <Phone fontSize="small" color="action" />
                      </ListItemAvatar>
                      <ListItemText primary={selectedPyme.telefono} primaryTypographyProps={{ variant: "body2" }} />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemAvatar sx={{ minWidth: 40 }}>
                        <Email fontSize="small" color="action" />
                      </ListItemAvatar>
                      <ListItemText primary={selectedPyme.email} primaryTypographyProps={{ variant: "body2" }} />
                    </ListItem>
                  </List>
                </>
              )}
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Typography variant="subtitle1" gutterBottom>
            Enviar mensaje
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tu nombre"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            id="email"
            label="Tu correo electrónico"
            type="email"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            id="message"
            label="Mensaje"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={handleCloseDialog} variant="outlined">
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleCloseDialog}>
            Enviar mensaje
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

