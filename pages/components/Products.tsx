import Image from "next/image"
import Link from "next/link"
import { IProductsProps } from "@/services/interfaces"

export default function Products({data = []}: { data: IProductsProps[]}){
  if(!data.length) {
    return <div>Nenhum produto encontrado.</div>
  }
    return (
    <div className="flex flex-col items-center gap-6">
      {data.length > 0 && (
        data.map((prod, index) => (
          <div key={index} className="flex font-suse flex-col items-center text-left w-3/4 hover:shadow-lg p-2 duration-600 transition-all">
            <Link href={`/product/${prod.name.toLowerCase().replace(/\s+/g, "_")}-${prod.id}`} className="flex items-center flex-col">
              <Image src={prod.image} alt="" width={260} height={260} />
              <div className="w-full">
                <h1 className="font-semibold text-xl">{prod.name}</h1>
                <p>{prod.desc}</p>
                <p className="text-green-800 text-xl font-bold">R$ {prod.price}</p>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  )
}