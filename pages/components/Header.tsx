import { RxHamburgerMenu } from "react-icons/rx";
import { HiMagnifyingGlass } from "react-icons/hi2";
import NavCategories from "./NavCategories";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

export default function Header(){
  const handleSearchButton = useCallback(() => {
    const searchBTN = document.querySelector('.searchBTN') as HTMLInputElement
    const carousel = document.querySelector('.carousel') as HTMLDivElement
    carousel.classList.toggle('toggleCarousel')
    searchBTN.classList.toggle('toggleSearchBTN')
  }, [])

  return (
    <div className="mb-6">
        <div className="flex items-center gap-2.5 px-4">
          <RxHamburgerMenu className="text-2xl"/>
          <Link href={'/'}>
            <Image 
              src='/logo_first_loja_suple.jpg' 
              className="rounded-full w-12"
              priority
              height={100} 
              width={100} 
              alt="logo of the website"
            />
          </Link>
        </div>
        <div className="pl-4 flex gap-2.5 relative">
          <HiMagnifyingGlass className="text-2xl cursor-pointer" onClick={handleSearchButton}/>
          <input 
            type="search" 
            placeholder="O que você procura?"
            className="searchBTN w-[90%] focus:outline-none 
            opacity-0 absolute left-[50px] duration-600
            transition-all"
          />
          <NavCategories carousel="carousel"/>
        </div>
    </div>
  )
}