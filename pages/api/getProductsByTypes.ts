import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {url: productsType} = req.body
  let products = [
    {
      id: 1,
      image: "/creatina_blackskull.jpg",
      name: "CREATINA BLACK SKULL 300G",
      desc: "CREATINA",
      type: "CREATINAS",
      price: 119.00
  },
  {
      id: 2,
      image: "/maxtitanum_creatina_250.jpeg",
      name: "CREATINA CREAPURE MAXTITANIUM 250G",
      desc: "CREATINA",
      type: "CREATINAS",
      price: 175
  },
  {
      id: 3,
      image: "/creatina_monohidratada_300g.jpg",
      name: "CREATINA DUX 300G",
      desc: "CREATINA",
      type: "CREATINAS",
      price: 139.00
  },
  {
      id: 4,
      image: "/HORUS_MAXTITANIUM_LIMAO_300G.jpg",
      name: "HORUS MAXTITANIUM LIMAO 300G",
      desc: "PRÉ TREINO",
      type: "PRÉTREINOS",
      price: 129.00
  },   
   {
    "id": 5,
    "image": "/night_frutas_vermelhas.jpg",
    "name": "NIGTH TRAIN FRUTAS VERMELHAS 300G",
    desc: "PRÉ TREINO",
    type: "PRÉTREINOS",
    price: 109.00
},
{
    "id": 6,
    "image": "/fresh_whey.jpg",
    "name": "FRESH WHEY DUX CHOCOLATE BELGA E AVELA 450G",
    desc: "WHEY",
    type: "WHEYS",
    price: 159.00
}
]
  if(productsType === "TUDO") {
    return res.status(200).json({products})
  }
  products = products.filter(prod => prod.type === productsType)
  res.status(200).json({ products });
}
