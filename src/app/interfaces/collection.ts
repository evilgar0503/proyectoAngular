import { Ropa } from "./ropa";

export interface Collection {
    id: number;
    title: string;
    portada: string;
    abreviatura: string;
    route: string;
    img: string;
    ropa: Ropa[];
}
