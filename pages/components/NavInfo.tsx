import { IControllersContent } from "@/services/interfaces";

export default function NavInfo({pathName}: IControllersContent){
  return (
    <div className="hidden md:flex flex-col w-96 gap-6">
    <h1 className="whitespace-nowrap font-suse">Home / {pathName}</h1>
    <div>
      <p className="font-suse font-semibold text-lg">Marcas</p>
      <ul className="border-b pl-2">
        <li>AQUI</li>
        <li>AQUI</li>
        <li>AQUI</li>
      </ul>
    </div>
    <div>
      <p className="font-suse font-semibold text-lg">Categorias</p>
      <p className="pl-2">Aminoaciados (2)</p>
    </div>
    <div>
      <p className="font-suse font-semibold text-lg">Preços</p>
      <p className="font-suse pl-2 cursor-pointer">Até R$ 137,89</p>
      <p className="font-suse pl-2 cursor-pointer">De R$ 138,90 à R$ 213,89</p>
      <p className="font-suse pl-2 cursor-pointer">De R$ 175,90 à R$ 213,89</p>
      <p className="font-suse pl-2 cursor-pointer">Acima de R$ 213,90</p>
    </div>
    <button className="hover:bg-gray-900 duration-800 transition-all bg-black text-white font-suse text-center text-sm h-10 rounded-md">FILTRAR</button>
  </div>
  )
}