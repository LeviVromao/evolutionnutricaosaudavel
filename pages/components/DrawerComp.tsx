import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

export default function DrawerComp(){
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
         <p onClick={() => null}>Menor preço</p>
         <p onClick={() => null}>Maior preço</p>
         <p onClick={() => null}>A-Z</p>
         <p onClick={() => null}>Z-A</p>
        </div>
      </DrawerContent>
    </Drawer>
  )
}