import axios from "axios";
const apiUrlMain = "https://9887-181-198-17-31.ngrok-free.app/";
//const apiUrlMain = "https://localhost:44395"
const apiPyme= axios.create({
  baseURL: apiUrlMain,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para manejar errores (opcional)
apiPyme.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error en la API:", error);
    return Promise.reject(error);
  }
);

export default apiPyme;