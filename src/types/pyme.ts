export interface Pyme{
    id_cliente: string;
    nombre: string;
    ruc: string;
    descripcion: string;
    logo?: string;
    categoria?: string;
    calificacion: string;
    Contactabilidad:Contactabilidad;
    Product:Product;
  }