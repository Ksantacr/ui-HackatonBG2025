import axios from "axios";
const apiUrlMain = process.env.REACT_APP_URL_MAIN;
const apiProduct= axios.create({
  baseURL: apiUrlMain,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para manejar errores (opcional)
apiProduct.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error en la API:", error);
    return Promise.reject(error);
  }
);

export default apiProduct;
