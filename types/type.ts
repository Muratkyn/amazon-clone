export interface ProductProps {
    id:number,
    productName: string,
    img: string,
    price: number,
    options: string,
    quantity: string    
}

export interface Props {
    title: string,
    img: string,
    link: string
  } 

  export interface NavbarProp {
    toggleNavbar: () => void,
}

