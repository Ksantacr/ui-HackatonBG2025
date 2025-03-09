import axios from "axios";
//const apiUrlMain = process.env.REACT_APP_URL_MAIN;
const apiUrlMain = "https://localhost:44395"
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