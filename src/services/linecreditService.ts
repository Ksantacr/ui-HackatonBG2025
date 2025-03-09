import apiPyme from "../api/apiPyme";

export const getLineCredit = async (codigo_cliente: number): Promise<Data[]> => {
    console.log('codigo cliente getLineCredit:', codigo_cliente);
    try {
        const response = await apiPyme.get<Data[]>(`/linea-credito`, {
            headers: { "codigo_cliente": codigo_cliente.toString() }, // Enviar en el header
        });
        console.log('response:', response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return []; // Retorna un array vacío en caso de error
    }
};