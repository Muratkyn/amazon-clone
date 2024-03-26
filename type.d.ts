export interface ProductProps {
    id:number,
    productName: string,
    productImage: ImgHTMLAttributes<HTMLImageElement>.src?: string | undefined,
    price: number,
}