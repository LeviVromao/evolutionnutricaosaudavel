import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Link from "next/link"
import { useState } from "react"

const categories = [
  'TUDO',
  'CREATINAS',
  'PRÉ TREINOS',
  'WHEYS',
  'VITAMINAS',
  'HIPERCALÓRICOS',
  'BARRAS PROTEICAS',
  'CAFEÍNAS',
  'REGATAS'
]

interface NavCategoriesProps {
  carousel: string
}

export default function NavCategories(props: NavCategoriesProps){
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <Carousel
      opts={{
        align: "start"
      }}
      className={`${props.carousel} w-[90%] transition-all 
      duration-600`}
    >
      <CarouselContent>
        {categories.map((category, index) => (
          <CarouselItem 
            key={index}
            className="basis-1/8"
          >
            <Link 
              href={`/products/${category.replace(/\s+/g, '')}`}
              className={`flex font-suse font-semibold
               text-gray-500 ${selectedIndex === index? 
                'border-b-4 rounded border-gray-800': null}`}
                onClick={() => setSelectedIndex(index)}
              >
                {category}
              </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}