import apiProduct from "../api/apiProduct";
import { Product } from "../types/product";

// Datos simulados
const mockProducts: Product[] = [
    { Id: 1, Nombre: "Producto A", Precio: 100, Stock: 100, Descripcion: "test" , Categoria: "mediano"  },
    { Id: 2, Nombre: "Producto B", Precio: 200 , Stock: 100 , Descripcion: "test", Categoria: "mediano" },
    { Id: 3, Nombre: "Producto C", Precio: 300 , Stock: 100 , Descripcion: "test", Categoria: "mediano" }
  ];
function simulateApiResponse<T>(data: T, delay = 1000): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  }

// Obtener todos los productos
export const getProducts = async (): Promise<Product[]> => {
  //const response = await apiProduct.get<Product[]>("/products");
  //return response.data;
  return simulateApiResponse<Product[]>(mockProducts);
};

// Obtener un produtos por ID
export const getProductById = async (id: number): Promise<Product> => {
  const response = await apiProduct.get<Product>(`/products/${id}`);
  return response.data;
};

// Crear un producto
export const createProduct = async (userData: Partial<Product>): Promise<Product> => {
  const response = await apiProduct.post<Product>("/products", userData);
  return response.data;
};

// Actualizar un usuario
export const updateProduct = async (id: number, userData: Partial<Product>): Promise<Product> => {
  const response = await apiProduct.put<Product>(`/products/${id}`, userData);
  return response.data;
};

// Eliminar un usuario
export const deleteProduct = async (id: number): Promise<void> => {
  await apiProduct.delete(`/products/${id}`);
};
