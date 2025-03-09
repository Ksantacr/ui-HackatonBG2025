"use client"

import React, { useState } from "react"
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material"
import {
  Business,
  CreditCard,
  Email,
  FiberManualRecord,
  InsertChart,
  LocationOn,
  Phone,
  Star,
  AttachMoney,
} from "@mui/icons-material"



interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export default function MyPyme() {
  const [tabValue, setTabValue] = useState(0)
  const theme = useTheme()

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    
    <Container maxWidth="lg" sx={{ py: 4 }}>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              mb: 3,
              alignItems: { md: "center" },
            }}
          >
            <Avatar
              src="/placeholder.svg?height=96&width=96"
              alt="Logo de la empresa"
              sx={{ width: 80, height: 80, border: `1px solid ${theme.palette.divider}` }}
            />
            <Box>
              <Typography variant="h4" component="h1" fontWeight="bold">
                Tecnología Innovadora S.A.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Soluciones tecnológicas para empresas
              </Typography>
            </Box>
          </Box>

          <Paper sx={{ width: "100%" }}>
         

          
              <Card sx={{ mb: 3 }}>
                <CardHeader title="Información de la Empresa" subheader="Detalles generales sobre la empresa" />
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="medium">
                      Descripción
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      Tecnología Innovadora S.A. es una empresa líder en el sector tecnológico, especializada en el
                      desarrollo de soluciones digitales para empresas de todos los tamaños. Fundada en 2010, nuestra
                      misión es transformar la manera en que las empresas utilizan la tecnología para mejorar sus
                      operaciones y resultados.
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="medium">
                      Industria
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      Tecnología de la Información
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="medium">
                      Tamaño de la empresa
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      51-200 empleados
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="medium">
                      Año de fundación
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      2010
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="Servicios Principales" />
                <CardContent>
                  <List dense disablePadding>
                    {[
                      "Desarrollo de software a medida",
                      "Consultoría tecnológica",
                      "Implementación de sistemas ERP",
                      "Soluciones de ciberseguridad",
                      "Servicios en la nube",
                    ].map((service, index) => (
                      <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <FiberManualRecord sx={{ fontSize: 8, color: "primary.main" }} />
                        </ListItemIcon>
                        <ListItemText primary={service} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            

           

            
          </Paper>
        </Grid>

        <Grid item xs={12} lg={4}>
        <Card sx={{ mb: 3 }}>
                <CardHeader title="Información de Crédito" subheader="Estado crediticio actual de la empresa" />
                <CardContent>
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid item xs={12} md={4}>
                      <Card variant="outlined">
                        <CardContent>
                          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <CreditCard fontSize="small" color="action" sx={{ mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              Crédito Aprobado
                            </Typography>
                          </Box>
                          <Typography variant="h5" fontWeight="bold">
                            $500,000  
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Actualizado: 15/03/2023
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card variant="outlined">
                        <CardContent>
                          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <AttachMoney fontSize="small" color="action" sx={{ mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              Tasa de Interés
                            </Typography>
                          </Box>
                          <Typography variant="h5" fontWeight="bold">
                            12.5%
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Anual
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card variant="outlined">
                        <CardContent>
                          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <Star fontSize="small" color="action" sx={{ mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              Score Crediticio
                            </Typography>
                          </Box>
                          <Typography variant="h5" fontWeight="bold">
                            780
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Excelente
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                      <Typography variant="body2" fontWeight="medium">
                        Utilización de Crédito
                      </Typography>
                      <Typography variant="body2">25%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={25} sx={{ height: 6, borderRadius: 3 }} />
                  </Box>
                </CardContent>
                <CardActions>
                  <Button variant="contained" fullWidth>
                    Solicitar Aumento de Crédito
                  </Button>
                </CardActions>
              </Card>

          <Card sx={{ mb: 3 }}>
                <CardHeader title="Información de Contacto" />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <Business />
                      </ListItemIcon>
                      <ListItemText
                        primary="Dirección"
                        secondary={
                          <>
                            Av. Reforma 123, Col. Juárez
                            <br />
                            Ciudad de México, CP 06600
                            <br />
                            México
                          </>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Phone />
                      </ListItemIcon>
                      <ListItemText primary="Teléfono" secondary="+52 (55) 1234-5678" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Email />
                      </ListItemIcon>
                      <ListItemText primary="Correo Electrónico" secondary="contacto@tecnologiainnovadora.mx" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions>
                  <Button variant="contained" fullWidth>
                    Contactar
                  </Button>
                </CardActions>
              </Card>

              <Card>
                <CardHeader title="Representante de Cuenta" />
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src="/placeholder.svg?height=64&width=64"
                      alt="Representante"
                      sx={{ width: 64, height: 64 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="medium">
                        Carlos Rodríguez
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gerente de Cuentas Corporativas
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        carlos.rodriguez@tecnologiainnovadora.mx
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        +52 (55) 1234-5678 ext. 123
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>


          
        </Grid>
      </Grid>
    </Container>
  )
}



