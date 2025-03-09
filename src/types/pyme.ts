import { Contactabilidad } from "./contactabilidad";
import { Product } from "./product";

export interface Pyme{
    idCliente: string;
    nombre: string;
    ruc: string;
    descripcion: string;
    logo: string;
    categoria?: string;
    calificacion?: string;
    Contactabilidad?:Contactabilidad;
    Product?:Product;
  }