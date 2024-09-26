import {createContext, useState, ReactNode} from "react"
import { IProductsProps, IProductContext } from "@/services/interfaces"

export const ProductContext = createContext<IProductContext | undefined>(undefined)

export default async function ProductProvider({children}: {children: ReactNode}){
  const [productsContext, setProductsContext] = useState<IProductsProps[]>([])
  const addFeature = (newProducts: IProductsProps[]) => {
    setProductsContext([...newProducts])
  }

  return (
    <ProductContext.Provider 
      value={
    {
      productsContext, 
      setProductsContext, 
      addFeature
    }
    }>
      {children}
    </ProductContext.Provider>
  )
}