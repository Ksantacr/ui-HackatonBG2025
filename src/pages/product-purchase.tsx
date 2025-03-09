"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Alert,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  Link as MuiLink,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Typography,
  useTheme,
} from "@mui/material"
import {
  ArrowBack,
  ArrowForward,
  CheckCircle,
  CreditCard,
  LocalHospital,
  Lock,
  Payment,
  Receipt,
  Schedule,
  Store,
  Verified,
  Wallet,
} from "@mui/icons-material"

// Datos de ejemplo de productos
const productos = {
  101: {
    id: 101,
    nombre: "Consulta Médica General",
    descripcion:
      "Evaluación médica completa con un médico general certificado. Incluye historial médico, examen físico y recomendaciones de tratamiento.",
    descripcionLarga:
      "La consulta médica general es una evaluación integral de su estado de salud realizada por un médico general certificado. Durante la consulta, el médico realizará un historial médico completo, un examen físico detallado y proporcionará recomendaciones de tratamiento personalizadas.",
    precio: 800,
    precioRegular: 950,
    imagen: "https://blog.humana.med.ec/hs-fs/hubfs/empresa-beneficios-plan-medico-y-salud-medicina-prepagada-contratar-plan-empresarial-corporativo.jpg?width=800&name=empresa-beneficios-plan-medico-y-salud-medicina-prepagada-contratar-plan-empresarial-corporativo.jpg",
    categoria: "Consultas",
    disponibilidad: "Inmediata",
    duracion: "30 minutos",
    destacado: true,
    pymeId: 1,
    pymeName: "Clínica San Rafael",
    pymeLogo: "/placeholder.svg?height=100&width=100",
    beneficios: [
      "Atención personalizada con médicos certificados",
      "Historial médico digital para seguimiento continuo",
      "Recomendaciones de tratamiento basadas en evidencia",
      "Posibilidad de referencias a especialistas si es necesario",
    ],
    preparacion: "No se requiere preparación especial. Se recomienda traer estudios previos si los tiene.",
    contraindicaciones: "No aplica",
    incluye: [
      "Consulta de 30 minutos con médico general",
      "Historial médico digital",
      "Receta médica (si es necesario)",
      "Recomendaciones de seguimiento",
    ],
    noIncluye: ["Medicamentos", "Estudios de laboratorio o gabinete", "Consultas de seguimiento"],
    politicaCancelacion:
      "Cancelación gratuita hasta 24 horas antes de la cita. Cancelaciones con menos de 24 horas de anticipación tienen un cargo del 50% del valor de la consulta.",
  },
  201: {
    id: 201,
    nombre: "Perfil Bioquímico Completo",
    descripcion:
      "Análisis completo que incluye 27 parámetros para evaluar el funcionamiento de órganos vitales como hígado, riñones y páncreas.",
    descripcionLarga:
      "El Perfil Bioquímico Completo es un conjunto de pruebas de laboratorio que evalúa el funcionamiento de órganos vitales como el hígado, los riñones y el páncreas. Este análisis incluye 27 parámetros diferentes que proporcionan una visión integral de su estado de salud metabólica. Los resultados de estas pruebas pueden ayudar a detectar condiciones como diabetes, enfermedades hepáticas, problemas renales, trastornos metabólicos y desequilibrios electrolíticos, incluso antes de que aparezcan los síntomas. Es una herramienta valiosa tanto para la prevención como para el seguimiento de condiciones crónicas ya diagnosticadas.",
    precio: 1800,
    precioRegular: 2200,
    imagen: "/placeholder.svg?height=400&width=600",
    categoria: "Análisis Sanguíneos",
    disponibilidad: "24 horas",
    preparacion: "Ayuno de 8-12 horas",
    destacado: true,
    pymeId: 2,
    pymeName: "Laboratorios Médicos Especializados",
    pymeLogo: "/placeholder.svg?height=100&width=100",
    beneficios: [
      "Evaluación completa del estado metabólico",
      "Detección temprana de problemas de salud",
      "Resultados precisos con tecnología de última generación",
      "Interpretación médica de resultados disponible",
    ],

    contraindicaciones: "No aplica",
    incluye: [
      "Toma de muestra sanguínea",
      "Análisis de 27 parámetros bioquímicos",
      "Resultados digitales en 24 horas",
      "Acceso a plataforma en línea para consultar resultados",
    ],
    noIncluye: [
      "Interpretación médica de resultados (disponible con costo adicional)",
      "Pruebas adicionales no incluidas en el perfil",
    ],
    politicaCancelacion:
      "Cancelación gratuita hasta 12 horas antes de la cita. No se realizan reembolsos por inasistencia sin previo aviso.",
  },
}

// Datos de ejemplo de crédito disponible
const creditoDisponible = {
  monto: 10000,
  tasaInteres: 12.5,
  plazos: [3, 6, 12, 18, 24],
}

// Datos de ejemplo de bancos para transferencia
const bancos = [
  {
    id: 1,
    nombre: "Banco Nacional",
    clabe: "012345678901234567",
    cuenta: "1234567890",
    titular: "Clínica San Rafael S.A.",
  },
  {
    id: 2,
    nombre: "Banco Comercial",
    clabe: "987654321098765432",
    cuenta: "0987654321",
    titular: "Clínica San Rafael S.A.",
  },
]

export default function ProductPurchase({ productId = 101}) {
  const theme = useTheme()
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeStep, setActiveStep] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState("credit")
  const [quantity, setQuantity] = useState(1)
  const [creditPeriod, setCreditPeriod] = useState(3)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
    transferDate: "",
    transferReference: "",
    acceptTerms: false,
  })
  const [formErrors, setFormErrors] = useState<any>({})
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")


  useEffect(() => {

    // En un caso real, aquí harías una llamada a la API para obtener los datos
    // basados en el ID del producto
    const productoEncontrado = productos[productId as keyof typeof productos]
    if (productoEncontrado) {
      setProduct(productoEncontrado)
      setLoading(false)
    }
  }, [productId])

  const handleNext = () => {
    if (activeStep === 0) {
      setActiveStep(1)
    } else if (activeStep === 1) {
      // Validar formulario según método de pago
      const errors: any = {}

      // Validaciones comunes
      if (!formData.nombre) errors.nombre = "El nombre es requerido"
      if (!formData.email) errors.email = "El email es requerido"
      if (!formData.telefono) errors.telefono = "El teléfono es requerido"

      // Validaciones específicas por método de pago
      if (paymentMethod === "card") {
        if (!formData.cardNumber) errors.cardNumber = "El número de tarjeta es requerido"
        if (!formData.cardName) errors.cardName = "El nombre en la tarjeta es requerido"
        if (!formData.cardExpiry) errors.cardExpiry = "La fecha de expiración es requerida"
        if (!formData.cardCvv) errors.cardCvv = "El código de seguridad es requerido"
      } else if (paymentMethod === "transfer") {
        if (!formData.transferDate) errors.transferDate = "La fecha de transferencia es requerida"
        if (!formData.transferReference) errors.transferReference = "La referencia de transferencia es requerida"
      }

      if (!formData.acceptTerms) {
        errors.acceptTerms = "Debes aceptar los términos y condiciones"
      }

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors)
        return
      }

      // Simular procesamiento de pago
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setActiveStep(2)
        setOrderComplete(true)
        setOrderNumber(`ORD-${Math.floor(100000 + Math.random() * 900000)}`)
      }, 2000)
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value)
    // Limpiar errores al cambiar método de pago
    setFormErrors({})
  }

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number.parseInt(event.target.value))
  }

  const handleCreditPeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreditPeriod(Number.parseInt(event.target.value))
  }

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Limpiar error del campo
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      })
    }
  }

  // Calcular montos
  const calculateSubtotal = () => {
    return product ? product.precio * quantity : 0
  }

  const calculateTax = () => {
    return calculateSubtotal() * 0.16 // 16% IVA
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax()
  }

  const calculateMonthlyPayment = () => {
    if (paymentMethod !== "credit" || !creditPeriod) return 0

    const total = calculateTotal()
    const monthlyInterest = creditoDisponible.tasaInteres / 100 / 12
    const monthlyPayment =
      (total * monthlyInterest * Math.pow(1 + monthlyInterest, creditPeriod)) /
      (Math.pow(1 + monthlyInterest, creditPeriod) - 1)

    return monthlyPayment
  }

  if (loading && !product) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="h5" sx={{ mt: 2 }}>
          Cargando información del producto...
        </Typography>
      </Container>
    )
  }

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5">Producto no encontrado</Typography>
        <Button  variant="contained" sx={{ mt: 2 }}>
          Volver al directorio
        </Button>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs y botón de regreso */}
      <Box sx={{ mb: 3, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Breadcrumbs aria-label="breadcrumb">


          <Typography color="text.primary">{product.nombre}</Typography>
        </Breadcrumbs>
        <Button

          href={`/pyme/${product.pymeId}`}
          startIcon={<ArrowBack />}
          variant="outlined"
          size="small"
        >
          Volver a la PyME
        </Button>
      </Box>

      {/* Stepper */}
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        <Step>
          <StepLabel>Información del producto</StepLabel>
        </Step>
        <Step>
          <StepLabel>Método de pago</StepLabel>
        </Step>
        <Step>
          <StepLabel>Confirmación</StepLabel>
        </Step>
      </Stepper>

      {/* Contenido según el paso activo */}
      {activeStep === 0 && (
        <Grid container spacing={4}>
          {/* Información del producto */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ mb: 3, overflow: "hidden" }}>
              <Box sx={{ position: "relative" }}>
                <img
                  src={product.imagen || "/placeholder.svg"}
                  alt={product.nombre}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
                />

              </Box>
              <Box sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar src={product.pymeLogo} alt={product.pymeName} sx={{ width: 40, height: 40, mr: 2 }} />
                  <Typography variant="subtitle1" color="text.secondary">
                    {product.pymeName}
                  </Typography>
                </Box>

                <Typography variant="h4" component="h1" gutterBottom>
                  {product.nombre}
                </Typography>



                <Typography variant="body1" paragraph>
                  {product.descripcionLarga}
                </Typography>

                <Grid container spacing={3}>


                </Grid>




              </Box>
            </Paper>
          </Grid>

          {/* Resumen de compra */}
          <Grid item xs={12} md={5}>
            <Card sx={{ position: "sticky", top: 20 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Resumen de compra
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    ${product.precio.toLocaleString("es-MX")}
                  </Typography>

                </Box>

                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel id="quantity-label">Cantidad</InputLabel>
                  <Select
                    labelId="quantity-label"
                    id="quantity"
                    value={quantity}
                    label="Cantidad"
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                    <Typography variant="body1">Subtotal</Typography>
                    <Typography variant="body1">${calculateSubtotal().toLocaleString("es-MX")} </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                    <Typography variant="body1">IVA (16%)</Typography>
                    <Typography variant="body1">${calculateTax().toLocaleString("es-MX")} </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold">
                    Total
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" color="primary">
                    ${calculateTotal().toLocaleString("es-MX")}
                  </Typography>
                </Box>

                <Button variant="contained" size="large" fullWidth onClick={handleNext} endIcon={<ArrowForward />}>
                  Continuar al pago
                </Button>

                <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
                  <Chip icon={<Verified />} label="Garantía de calidad" />
                  <Chip icon={<Lock />} label="Pago seguro" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {activeStep === 1 && (
        <Grid container spacing={4}>
          {/* Formulario de pago */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Información de pago
              </Typography>

              <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
                Método de pago
              </Typography>
              <FormControl component="fieldset" sx={{ width: "100%" }}>
                <RadioGroup
                  aria-label="payment-method"
                  name="payment-method"
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                >
                  <Paper variant="outlined" sx={{ mb: 2, p: 2 }}>
                    <FormControlLabel
                      value="credit"
                      control={<Radio />}
                      label={
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Wallet color="primary" sx={{ mr: 1 }} />
                          <Typography variant="body1">Pago con fondo de crédito</Typography>
                        </Box>
                      }
                    />
                    {paymentMethod === "credit" && (
                      <Box sx={{ pl: 4, mt: 2 }}>
                        <Alert severity="info" sx={{ mb: 2 }}>
                          <Typography variant="body2">
                            Crédito disponible: ${creditoDisponible.monto.toLocaleString("es-MX")}
                          </Typography>
                          <Typography variant="body2">
                            Tasa de interés anual: {creditoDisponible.tasaInteres}%
                          </Typography>
                        </Alert>

                        <FormControl fullWidth sx={{ mb: 2 }}>
                          <FormLabel id="credit-period-label">Plazo de pago</FormLabel>
                          <RadioGroup
                            aria-labelledby="credit-period-label"
                            name="credit-period"
                            value={creditPeriod}
                            onChange={handleCreditPeriodChange}
                            row
                          >
                            {creditoDisponible.plazos.map((plazo) => (
                              <FormControlLabel
                                key={plazo}
                                value={plazo}
                                control={<Radio />}
                                label={`${plazo} meses`}
                              />
                            ))}
                          </RadioGroup>
                        </FormControl>

                        <Box sx={{ bgcolor: theme.palette.primary.main, color: "white", p: 2, borderRadius: 1 }}>
                          <Typography variant="subtitle1">
                            Pago mensual estimado: ${calculateMonthlyPayment().toFixed(2)}
                          </Typography>
                          <Typography variant="body2">
                            Total a pagar: ${(calculateMonthlyPayment() * creditPeriod).toFixed(2)}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </Paper>

                  <Paper variant="outlined" sx={{ mb: 2, p: 2 }}>
                    <FormControlLabel
                      value="transfer"
                      control={<Radio />}
                      label={
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Payment color="primary" sx={{ mr: 1 }} />
                          <Typography variant="body1">Transferencia bancaria</Typography>
                        </Box>
                      }
                    />
                    {paymentMethod === "transfer" && (
                      <Box sx={{ pl: 4, mt: 2 }}>
                        <Alert severity="info" sx={{ mb: 2 }}>
                          <Typography variant="subtitle2">Instrucciones para transferencia:</Typography>
                          <Typography variant="body2">1. Realiza la transferencia al siguiente banco:</Typography>
                          <Box sx={{ mt: 1, mb: 1 }}>
                            {bancos.map((banco) => (
                              <Paper key={banco.id} variant="outlined" sx={{ p: 1, mb: 1 }}>
                                <Typography variant="body2">
                                  <strong>Banco:</strong> {banco.nombre}
                                </Typography>
                                <Typography variant="body2">
                                  <strong>Titular:</strong> {banco.titular}
                                </Typography>
                                <Typography variant="body2">
                                  <strong>CLABE:</strong> {banco.clabe}
                                </Typography>
                                <Typography variant="body2">
                                  <strong>Cuenta:</strong> {banco.cuenta}
                                </Typography>
                              </Paper>
                            ))}
                          </Box>
                          <Typography variant="body2">2. Usa como concepto: PAGO-{product.id}</Typography>
                          <Typography variant="body2">
                            3. Ingresa los datos de tu transferencia a continuación.
                          </Typography>
                        </Alert>

                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label="Fecha de transferencia"
                              name="transferDate"
                              type="date"
                              value={formData.transferDate}
                              onChange={handleFormChange}
                              InputLabelProps={{ shrink: true }}
                              error={!!formErrors.transferDate}
                              helperText={formErrors.transferDate}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label="Referencia de transferencia"
                              name="transferReference"
                              value={formData.transferReference}
                              onChange={handleFormChange}
                              error={!!formErrors.transferReference}
                              helperText={formErrors.transferReference}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                  </Paper>

                  <Paper variant="outlined" sx={{ mb: 2, p: 2 }}>
                    <FormControlLabel
                      value="card"
                      control={<Radio />}
                      label={
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <CreditCard color="primary" sx={{ mr: 1 }} />
                          <Typography variant="body1">Tarjeta de crédito/débito</Typography>
                        </Box>
                      }
                    />
                    {paymentMethod === "card" && (
                      <Box sx={{ pl: 4, mt: 2 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Número de tarjeta"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleFormChange}
                              placeholder="1234 5678 9012 3456"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <CreditCard />
                                  </InputAdornment>
                                ),
                              }}
                              error={!!formErrors.cardNumber}
                              helperText={formErrors.cardNumber}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Nombre en la tarjeta"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleFormChange}
                              placeholder="Como aparece en la tarjeta"
                              error={!!formErrors.cardName}
                              helperText={formErrors.cardName}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label="Fecha de expiración"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleFormChange}
                              placeholder="MM/AA"
                              error={!!formErrors.cardExpiry}
                              helperText={formErrors.cardExpiry}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label="Código de seguridad (CVV)"
                              name="cardCvv"
                              value={formData.cardCvv}
                              onChange={handleFormChange}
                              type="password"
                              error={!!formErrors.cardCvv}
                              helperText={formErrors.cardCvv}
                            />
                          </Grid>
                        </Grid>
                        <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                          <Lock fontSize="small" color="action" sx={{ mr: 1 }} />
                          <Typography variant="caption" color="text.secondary">
                            Tus datos de pago están seguros y encriptados
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </Paper>
                </RadioGroup>
              </FormControl>

              <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
                Información de contacto
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Nombre completo"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleFormChange}
                    error={!!formErrors.nombre}
                    helperText={formErrors.nombre}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Teléfono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleFormChange}
                    error={!!formErrors.telefono}
                    helperText={formErrors.telefono}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Dirección"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleFormChange}
                    multiline
                    rows={2}
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 3 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleFormChange}
                      color="primary"
                    />
                  }
                  label="Acepto los términos y condiciones"
                />
                {formErrors.acceptTerms && <FormHelperText error>{formErrors.acceptTerms}</FormHelperText>}
              </Box>

              <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={handleBack} startIcon={<ArrowBack />}>
                  Volver
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <ArrowForward />}
                  disabled={loading}
                >
                  {loading ? "Procesando..." : "Completar compra"}
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Resumen de compra */}
          <Grid item xs={12} md={5}>
            <Card sx={{ position: "sticky", top: 20 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Resumen de compra
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <img
                    src={product.imagen || "/placeholder.svg"}
                    alt={product.nombre}
                    style={{
                      width: 80,
                      height: 80,
                      objectFit: "cover",
                      borderRadius: 8,
                      marginRight: 16,
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {product.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.pymeName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cantidad: {quantity}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                    <Typography variant="body1">Subtotal</Typography>
                    <Typography variant="body1">${calculateSubtotal().toLocaleString("es-MX")} </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                    <Typography variant="body1">IVA (16%)</Typography>
                    <Typography variant="body1">${calculateTax().toLocaleString("es-MX")} </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold">
                    Total
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" color="primary">
                    ${calculateTotal().toLocaleString("es-MX")}
                  </Typography>
                </Box>

                {paymentMethod === "credit" && (
                  <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: theme.palette.primary.light }}>
                    <Typography variant="subtitle2" color="primary.contrastText">
                      Plan de pagos seleccionado:
                    </Typography>
                    <Typography variant="body2" color="primary.contrastText">
                      {creditPeriod} meses a ${calculateMonthlyPayment().toFixed(2)}  /mes
                    </Typography>
                  </Paper>
                )}

                <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
                  <Chip icon={<Verified />} label="Garantía de calidad" />
                  <Chip icon={<Lock />} label="Pago seguro" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {activeStep === 2 && (
        <Paper sx={{ p: 4, textAlign: "center" }}>
          {orderComplete ? (
            <>
              <CheckCircle color="success" sx={{ fontSize: 80, mb: 2 }} />
              <Typography variant="h4" gutterBottom>
                ¡Compra realizada con éxito!
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Número de orden: {orderNumber}
              </Typography>
              <Typography variant="body1" paragraph>
                Hemos enviado un correo electrónico a {formData.email} con los detalles de tu compra.
              </Typography>

              <Box sx={{ mt: 4, mb: 4 }}>
                <Paper variant="outlined" sx={{ p: 3, maxWidth: 600, mx: "auto" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Receipt color="primary" sx={{ mr: 2 }} />
                    <Typography variant="h6">Resumen de la compra</Typography>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} sx={{ textAlign: "left" }}>
                      <Typography variant="body2" color="text.secondary">
                        Producto:
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {product.nombre}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        Proveedor:
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {product.pymeName}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        Cantidad:
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {quantity}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} sx={{ textAlign: "left" }}>
                      <Typography variant="body2" color="text.secondary">
                        Método de pago:
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {paymentMethod === "credit" && "Fondo de crédito"}
                        {paymentMethod === "transfer" && "Transferencia bancaria"}
                        {paymentMethod === "card" && "Tarjeta de crédito/débito"}
                      </Typography>

                      {paymentMethod === "credit" && (
                        <>
                          <Typography variant="body2" color="text.secondary">
                            Plan de pagos:
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            {creditPeriod} meses a ${calculateMonthlyPayment().toFixed(2)}  /mes
                          </Typography>
                        </>
                      )}

                      <Typography variant="body2" color="text.secondary">
                        Total pagado:
                      </Typography>
                      <Typography variant="body1" fontWeight="bold" color="primary" gutterBottom>
                        ${calculateTotal().toLocaleString("es-MX")}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
                <Button variant="outlined" startIcon={<ArrowBack />}>
                  Volver a la PyME
                </Button>
                <Button variant="contained"  endIcon={<Store />}>
                  Explorar más PyMEs
                </Button>
              </Box>
            </>
          ) : (
            <>
              <CircularProgress size={60} sx={{ mb: 2 }} />
              <Typography variant="h5">Procesando tu compra...</Typography>
              <Typography variant="body1" color="text.secondary">
                Por favor, espera mientras completamos tu transacción.
              </Typography>
            </>
          )}
        </Paper>
      )}
    </Container>
  )
}

