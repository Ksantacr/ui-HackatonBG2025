import apiPyme from "../api/apiPyme";
import { Contactabilidad } from "../types/contactabilidad";
import { Data } from "../types/data";
import { Info } from "../types/info";
import { Product } from "../types/product";
import { Pyme } from "../types/pyme";
import { Respuesta } from "../types/respuesta";

const mockContactabilidad: Contactabilidad = {
    pais: "Ecuador",
    ciudad: "Guayaquil",
    provincia: "Guayas",
    calle_principal: "Av. 9 de Octubre",
    calle_secundaria: "Av. Malecon",
    numero: "1234",
    referencia: "Frente al parque",
    latitud: -2.203816,
    longitud: -79.897453,
    email1: "info@contoso.com",
    email2: "ventas@contoso.com",
    telefono1: "0991234567",
    telefono2: "0421234567"
  };

  const mockInfo: Info = {
    idCliente: 156464,
    nombre: "Contoso S.A.",
    ruc: "0987654321001",
    descripcion: "Descripcion de la empresa",
    logo: "s3://hackathon-bg/Servicios-de-seguro-medico-859x639 (1).jpg",
    categoria: "Medicina",
    calificacion: 4.5,
    contactabilidad: mockContactabilidad
  };

  const mockProductos: Product[] = [
    {
      idProducto: "f7b3b2b1-5b7b-4b3b-8b7b-2b1b3b4b5b7b",
      nombre: "Producto 1",
      precio: 100,
      stock: 10,
      descripcion: "Descripcion del producto 1",
      categoria: "Medicina"
    },
    {
      idProducto: "f7b3b2b1-5b7b-4b3b-8b7b-2b1b3b4b5b7b2",
      nombre: "Producto 2",
      precio: 200,
      stock: 20,
      descripcion: "Descripcion del producto 2",
      categoria: "Medicina"
    },
    {
      idProducto: "f7b3b2b1-5b7b-4b3b-8b7b-2b1b3b4b5b7b3",
      nombre: "Producto 3",
      precio: 300,
      stock: 30,
      descripcion: "Descripcion del producto 3",
      categoria: "Medicina"
    }
  ];

  const mockData: Data = {
    info: mockInfo,
    productos: mockProductos
  };

  const mockRespuesta: Respuesta = {
    code: 200,
    traceId: "0HM1V2JL",
    data: mockData
  };

  console.log(mockRespuesta);


function simulateApiResponse<T>(data: T, delay = 1000): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  }

export const getProductsSimulation = async (): Promise<Data[]> => {
    return simulateApiResponse([mockRespuesta.data]);
  };

  export const getProducts = async (codigo_cliente: string): Promise<Data[]> => {
    console.log('codigo cliente:', codigo_cliente);
    try {
        const response = await apiPyme.get<Data[]>(`/info-perfil`, {
            headers: { "codigo_cliente": codigo_cliente.toString() }, // Enviar en el header
        });
        console.log('response:', response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return []; // Retorna un array vacío en caso de error
    }
};
