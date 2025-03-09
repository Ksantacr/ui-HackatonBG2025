import { Data } from "./data";

export interface Respuesta {
    code: number;
    traceId: string;
    data: Data;
}