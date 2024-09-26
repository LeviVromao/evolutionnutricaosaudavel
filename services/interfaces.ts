export interface IProductsProps {
    id: number,
    image: string,
    name: string,
    type: string,
    price: number,
    desc: string
}

export interface IProductContext {
    setProductsContext: (products: IProductsProps[]) => void
    productsContext: IProductsProps[]
    addFeature: (newProducts: IProductsProps[]) => void
}

export interface IControllersContent {
    pathName?: string
  }