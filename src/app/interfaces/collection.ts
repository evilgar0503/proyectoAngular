import { Ropa } from "./ropa";

export interface Collection {
    id: number;
    title: string;
    portada: string;
    route: string;
    ropa: Ropa[];
}
