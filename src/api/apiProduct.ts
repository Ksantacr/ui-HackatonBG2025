import axios from "axios";
const apiUrlMain = "https://9887-181-198-17-31.ngrok-free.app/";
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
