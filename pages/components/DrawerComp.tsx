import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { useContext } from "react"
import { ProductContext } from "./ProductContext"

export default function DrawerComp(){
  const productContext = useContext(ProductContext)
  if(!productContext) {
    throw new Error("useContext(ProductContext) must be used within a CartContextProvider")
  }
  const {addFeature,productsContext} = productContext

  const handleLowPrice = () => {
    const sortedLowToHighPrice = productsContext.sort((a, b) => a.price - b.price)
    addFeature(sortedLowToHighPrice)
  }
  const handleHighPrice = () => {
    const sortedHighToLowPrice = productsContext.sort((a, b) => b.price - a.price)
    addFeature(sortedHighToLowPrice)
  }
  const handleSortedByNameAsceding = () => {
    const sortedByNameAscending = productsContext.sort((a, b) => a.name.localeCompare(b.name))
    addFeature(sortedByNameAscending)
  }
  const handleSortedByNameDesceding = () => {
    const sortedByNameDesceding = productsContext.sort((a,b) => b.name.localeCompare(a.name))
    addFeature(sortedByNameDesceding)
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="font-suse text-sm border-2 border-gray-500 rounded px-1">Ordenar por</button>
      </DrawerTrigger>
      <DrawerContent className="bg-black border-gray-700">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-white font-suse">Categorias</DrawerTitle>
          </DrawerHeader>
        </div>
        <div className="flex flex-col gap-2 px-4 font-suse text-white mb-6">
         <p onClick={handleLowPrice}>Menor preço</p>
         <p onClick={handleHighPrice}>Maior preço</p>
         <p onClick={handleSortedByNameAsceding}>A-Z</p>
         <p onClick={handleSortedByNameDesceding}>Z-A</p>
        </div>
      </DrawerContent>
    </Drawer>
  )
}