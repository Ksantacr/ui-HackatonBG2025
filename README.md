# UI Hackaton BG2025

Este proyecto es parte de la Hackaton BG2025 y consiste en una aplicación web desarrollada con **React**. La aplicación utiliza **React Router v6** para el manejo de rutas y **Material UI (MUI)** para la interfaz de usuario. Además, se conecta con **AWS Cognito** para la autenticación de usuarios y consume una API desarrollada en **.NET** para obtener datos y funcionalidades adicionales.

## Descripción

La aplicación cuenta con las siguientes características principales:

- **Autenticación con AWS Cognito:**
  Gestión de inicio de sesión y cierre de sesión a través de AWS Cognito. Los usuarios autenticados tienen acceso a rutas protegidas, mientras que las páginas públicas (como el login) se muestran sin el layout principal.

- **Consumo de API en .NET:**
  La aplicación se integra con una API desarrollada en .NET para consumir datos y funcionalidades necesarias para el funcionamiento de la plataforma. Mas información: https://github.com/Ksantacr/HackatonBG2025

- **Routing con React Router v6:**
  Uso de rutas anidadas para aplicar un layout específico a las páginas protegidas. Esto permite que la página de login se muestre sin el encabezado y el pie de página definidos en el layout principal.

- **Interfaz de usuario con Material UI:**
  Utilización de MUI para diseñar una interfaz moderna, con temas que permiten ajustar colores y estilos de manera coherente en toda la aplicación.

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Ksantacr/ui-HackatonBG2025.git
   cd ui-HackatonBG2025

2. **Instalar las dependencias:**

Utiliza npm o yarn:

```bash
npm install
```

O

```bash
yarn install
```

3. **Ejecutar la aplicación en modo desarrollo:**

```bash
npm run dev
```

## Tecnologías utilizadas
- React
- React Router
- Material UI (MUI)
- TypeScript (según la extensión de archivos y prácticas observadas)
- Integración con Cognito
- Axios

## Licencia

Este proyecto se distribuye bajo la [Licencia Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0).
