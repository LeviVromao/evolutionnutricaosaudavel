import { IProductsProps } from "@/services/interfaces";
import Image from "next/image";

export default function ProductComponent(product: {data: IProductsProps[]}) {
  return (
    <>
      {product.data.map((prod, index) => (
        <div key={index} className="flex font-suse flex-col items-center text-left w-3/4 hover:shadow-lg p-2 duration-600 transition-all">
          <div className="flex items-center flex-col">
            <Image src={prod.image} alt="" width={260} height={260} />
            <div className="w-full">
              <h1 className="font-semibold text-xl">{prod.name}</h1>
              <p>{prod.desc}</p>
              <p className="text-green-800 text-xl font-bold">R$ {prod.price}</p>
            </div>
          </div>
       </div>
      ))}
    </>
  )
}