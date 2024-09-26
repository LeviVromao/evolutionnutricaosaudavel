import DrawerComp from "./DrawerComp"
import {IControllersContent} from "@/services/interfaces"
export default function ControllersContent({pathName}: IControllersContent) {
  return (
    <>
      <div className="flex justify-between px-4 mb-6">
      <h1 
        className="border-2 text-green-600
        font-bold border-gray-300 px-2 py-1 
        w-fit rounded-lg text-sm"
       >
        {pathName}
      </h1>
        <DrawerComp />
      </div></>
  )
}