import { IProductsProps } from "@/services/interfaces"
import axios from "axios"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import Header from "../components/Header"
import Products from "../components/Products"
import ControllersContent from "../components/ControllersContent"
import { useEffect, useContext } from "react"
import { ProductContext } from "../components/ProductContext"

interface ProductsByTypeProps {
    data: IProductsProps[];
    pathName?: string;
}

export default function ProductsByType({data, pathName}: ProductsByTypeProps) {
  const productContext = useContext(ProductContext)
  if(!productContext) {
    throw new Error("useContext(ProductContext) must be used within a CartContextProvider")
  }
  const {addFeature, productsContext} = productContext
  useEffect(() => {
    addFeature(data)
  }, [data])
  if(data.length < 0 || !data) {
    return <div className="w-full text-center">Ocorreu algum erro, iremos corrigi-lo</div>
  }

  return (
    <>
      <Header />
      <ControllersContent pathName={pathName}/>
      <Products data={productsContext} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const params = ctx.params
  const url = params?.prodsNames![0]
  // https://suplementosesportivosfloripa.vercel.app/
  const res = await axios.post("https://suplementosesportivosfloripa.vercel.app/api/getProductsByTypes", {
    url
  })
  return {
    props: {
        data: res.data.products || [],
        pathName: url
    }
  }
}