import { Contactabilidad } from "./contactabilidad";

export interface Info{
  idCliente: number;
  nombre: string;
  ruc: string;
  descripcion: string;
  logo: string;
  categoria: string;
  calificacion: number;
  contactabilidad: Contactabilidad;
}