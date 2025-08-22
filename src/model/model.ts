export type Product = {
    id: number;
    imageUrl:string;
    title:string;
    price:number;
    description:string;
    category: string;
    quantity: number;
}

export type  CartState = {
    items: Product[];
    allProducts: Product[];
    totalPrice: number;
    totalCount: number;
}
