import { StaticImageData } from "next/image";

export interface ProductProps {
    id:number,
    productName: string,
    src: string,
    price: number,
    options: string,
    quantity: string    
}