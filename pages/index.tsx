import { useEffect, useState } from "react";
import DrawerComp from "./components/DrawerComp";
import Header from "./components/Header";
//import axios from "axios"
import Products from "./components/Products";
//import { IProductsProps } from "@/services/interfaces";
import { GetServerSideProps } from "next";

export default function Home() {
  const [pathName, setPathName] = useState('')
  const products = [
    {
      id: 1,
      image: "/creatina_blackskull.jpg",
      name: "CREATINA BLACK SKULL 300G",
      type: "CREATINA",
      price: 119.00
  },
  {
      id: 2,
      image: "/maxtitanum_creatina_250.jpeg",
      name: "CREATINA CREAPURE MAXTITANIUM 250G",
      type: "CREATINA",
      price: 175
  },
  {
      id: 3,
      image: "/creatina_monohidratada_300g.jpg",
      name: "CREATINA DUX 300G",
      type: "CREATINA",
      price: 139.00
  },
  {
      id: 4,
      image: "/HORUS_MAXTITANIUM_LIMAO_300G.jpg",
      name: "HORUS MAXTITANIUM LIMAO 300G",
      type: "PRÉTREINO",
      price: 129.00
  },
  ]
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
      <Products data={products}/>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
    }
  }
}
