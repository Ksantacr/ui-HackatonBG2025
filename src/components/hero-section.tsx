"use client"

import type React from "react"
import { Box, Button, Container, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import { ArrowForward, KeyboardArrowDown } from "@mui/icons-material"

interface HeroSectionProps {
  title?: string
  subtitle?: string
  backgroundImage?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  showScrollIndicator?: boolean
  height?: string | number
  overlay?: number // Overlay opacity between 0 and 1
  children?: React.ReactNode // For additional content
}

export default function HeroSection({
  title = "Bienvenido a tu comunidad de pymes",
  subtitle = "Un espacio diseñado para impulsar el crecimiento y desarrollo de las pequeñas y medianas empresas, fortaleciendo la cadena de valor con el respaldo de Banco Guayaquil.",
  backgroundImage = "/placeholder.svg?height=800&width=1600",
  primaryButtonText = "Únete a la Comunidad",
  primaryButtonLink = "#",
  secondaryButtonText = "Conoce Más",
  secondaryButtonLink = "#",
  showScrollIndicator = true,
  height = "80vh",
  overlay = 0.7,
  children,
}: HeroSectionProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <Box
      sx={{
        background: `linear-gradient(rgba(0, 0, 0, ${overlay}), rgba(0, 0, 0, ${overlay})), url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: height,
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: "800px", mx: isTablet ? "auto" : "inherit", textAlign: isTablet ? "center" : "left" }}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.9,
              maxWidth: "800px",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            {subtitle}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              mb: 4,
              justifyContent: isTablet ? "center" : "flex-start",
            }}
          >
            {primaryButtonText && (
              <Button
                variant="contained"
                size="large"
                color="primary"
                href={primaryButtonLink}
                endIcon={<ArrowForward />}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                {primaryButtonText}
              </Button>
            )}

            {secondaryButtonText && (
              <Button
                variant="outlined"
                size="large"
                href={secondaryButtonLink}
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
                {secondaryButtonText}
              </Button>
            )}
          </Stack>

          {children}
        </Box>
      </Container>

      {showScrollIndicator && (
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: 0,
            width: "100%",
            textAlign: "center",
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": {
                transform: "translateY(0)",
              },
              "40%": {
                transform: "translateY(-20px)",
              },
              "60%": {
                transform: "translateY(-10px)",
              },
            },
          }}
        >
          <IconButton
            sx={{
              color: "white",
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
            }}
            onClick={handleScroll}
            aria-label="Desplazar hacia abajo"
          >
            <KeyboardArrowDown />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}

