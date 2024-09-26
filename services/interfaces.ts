export interface IProductsProps {
    id: string,
    image: string,
    name: string,
    type: string,
    price: number
}

export interface IProductContext {
    setProductsContext: (products: IProductsProps[]) => void
    productsContext: IProductsProps[]
    addFeature: (newProducts: IProductsProps[]) => void
}