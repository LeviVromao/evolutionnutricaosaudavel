import { IProductsProps } from "@/services/interfaces"
import axios from "axios"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import Link from "next/link"
import Image from "next/image"
import ProductComponent from "../components/Product"
import { RxHamburgerMenu } from "react-icons/rx"

export default function Product(product: {data: IProductsProps[]}) {
  return (
    <div className="flex flex-col gap-10 mb-6 bg-white text-black h-full">
      <div className="flex items-center gap-2.5 text-white bg-gray-800 w-full px-4">
          <RxHamburgerMenu className="text-2xl"/>
          <Link href={'/'}>
            <Image 
              src='/evolution_logo.jpg' 
              className="rounded-full w-12 self-center"
              priority
              height={100} 
              width={100} 
              alt="logo of the website"
            />
        </Link>
      </div>
      <div className="w-full flex flex-col items-center">
        <ProductComponent data={product.data} />
      </div>
      {product.data.map((prod, index) => (
        <Link key={index} href={`https://wa.me/554888066222?text=Olá, me interessei pelo(a) ${prod.name.toLowerCase()} e gostaria de saber mais sobre seus produtos!`} target="_blank" className="self-center cursor-pointer font-suse font-semibold">
          <button style={{backgroundColor: "#25D366", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px", fontSize: "16px"}}>
            Iniciar conversa no WhatsApp
          </button>
        </Link>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const params = ctx.params
  const id = params!.prodId![0].split('-')[1]
  const res = await axios.post("https://suplementosesportivosfloripa.vercel.app/api/getProduct", {
    id
  })
  
  return {
    props: {
      data: res.data.product || []
    }
  }
}
