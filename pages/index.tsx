import { useContext, useEffect, useState } from "react";
import ControllersContent from "./components/ControllersContent";
import Header from "./components/Header";
import axios from "axios"
import { IProductsProps } from "@/services/interfaces";
import Products from "./components/Products";
import { GetServerSideProps } from "next";
import NavInfo from "./components/NavInfo";
import { ProductContext } from "./components/ProductContext";

export default function Home(products: {data: IProductsProps[]}) {
  const [pathName, setPathName] = useState('')
  const productContext = useContext(ProductContext)
  if(!productContext) {
    throw new Error("useContext(ProductContext) must be used within a CartContextProvider")
  }
  const { addFeature, productsContext } = productContext
  useEffect(() => {
    addFeature(products.data)
    setPathName(window?.location.pathname === '/' ? 'TUDO' : window.location.pathname)
  },[])

  return (
    <div
      className={`select-none bg-white`}
    >
      <Header />
    <div className="md:flex justify-between md:px-20">
      <NavInfo pathName={pathName}/>
      <div>
        <ControllersContent pathName={pathName}/>
        {productsContext.length > 0 && <Products data={productsContext}/>}
      </div>
    </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("https://suplementosesportivosfloripa.vercel.app/api/getProducts")
  const data = res.data.products
  return {
    props: {
      data
    }
  }
}
