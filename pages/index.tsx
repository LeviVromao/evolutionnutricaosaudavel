import { useEffect, useState } from "react";
import DrawerComp from "./components/DrawerComp";
import Header from "./components/Header";
import axios from "axios"
import Products from "./components/Products";
import { IProductsProps } from "@/services/interfaces";
import { GetServerSideProps } from "next";

export default function Home(products: { data:Array<IProductsProps>}) {
  const [pathName, setPathName] = useState('')
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]')
    if(metaDescription) {
      console.log(metaDescription)
    }

    if(window.location.pathname === '/') {
      return setPathName('TUDO')
    }
    setPathName(window.location.pathname)
  },[])
  return (
    <div
      className={`select-none`}
    >
      <Header />
      <div className="flex justify-between px-4 mb-6">
        <h1 
          className="border-2 text-green-600 
          font-bold border-gray-300 px-2 py-1 
          w-fit rounded-lg text-sm"
          >
          {pathName}
        </h1>
        <DrawerComp />
      </div>
      <Products data={products.data}/>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/getProducts")
  const data = res.data.products
  return {
    props: {
      data
    }
  }
}
