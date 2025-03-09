import apiPyme from "../api/apiPyme";
import { Data } from "../types/data";
import { Pyme } from "../types/pyme";

/*const mockContactabilidad: Contactabilidad = {
  pais: "Ecuador",
  ciudad: "Guayaquil",
  provincia: "Guayas",
  calle_principal: "Av. 9 de Octubre",
  calle_secundaria: "Av. Malecon"
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

const mockProductos: Producto[] = [
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
  info: mockInfo
};

const mockRespuesta: Respuesta = {
  code: 200,
  traceId: "0HM1V2JL",
  data: mockData
};



function simulateApiResponse<T>(data: T, delay = 1000): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

export const getPymesSimulate = async (): Promise<Data[]> => {
  return simulateApiResponse([mockRespuesta.data]);
};*/

export const getPymes = async (
  query: string = "",
  pais: string = "",
  ciudad: string = "",
  provincia: string = ""
): Promise<Data[]> => {
  try {
    const response = await apiPyme.get<Data[]>("/buscar-empresas", {
      params: { query, pais, ciudad, provincia }
    });
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.error("Error en la petición:", error);
    throw new Error("No se pudieron obtener las pymes");
  }
};
