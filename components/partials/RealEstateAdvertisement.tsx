'use client';
import Autoplay from "embla-carousel-autoplay"
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useRef, useState } from "react";
import Image from "next/image";
import { icons } from "@/utils/icons";
import { Button } from "@/components/ui/button";
const { IoSearch } = icons;

const toolSearchAlter = [
    {
        id: 0,
        name: 'Mua bán'
    },
    {
        id: 1,
        name: 'Cho thuê'
    },
    {
        id: 2,
        name: 'Dự án'
    },
    {
        id:3,
        name:'Nhà đầu tư'
    }
]

export default function RealEstateAdvertisement() {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const [choice,setChoice] = useState<{id:number}>({id:0});

    const handdleChoice = (index:number) => {
       setChoice({id:index})
    }

    return <div className="h-[420px] overflow-hidden w-full">
        <Carousel
            plugins={[plugin.current]}
            className="w-full h-full relative"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="w-full h-full">
                            <Card className="p-0 h-full">
                                <Image width={1200} height={560} alt="banner" className="rounde-md w-full object-cover object-center" src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1764780347/center/jcjaqbweehehnykgap5r.webp"} />
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <div className="absolute w-[800px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-5 pb-10 px-15 bg-[#00000099] rounded-md">
                <div className="mb-4 w-[65%] m-auto">
                    <ul className="text-white flex items-center ">
                        {toolSearchAlter?.map((item, index) => {
                            return <li onClick={()=>handdleChoice(index)} key={index} className={`px-5 py-2 ${choice?.id === index ? 'bg-[#28262695] border-b-blue-600 text-white' : ''} hover:bg-[#282626a6] cursor-pointer border-b-2 `}>
                                {item?.name}
                            </li>
                        })}
                    </ul>
                </div>
                <div className="relative">
                    <input placeholder={`${choice.id !== 2 && choice?.id !== 3 ? 'Nhập nội dung tìm kiếm ...' : choice?.id === 2 ? 'Bạn muốn tìm dự án nào ?' : 'Tìm kiếm nhà đầu tư ...'}`} className="bg-white px-4 pl-10 pr-30 py-3 w-full outline-none rounded-md" />
                    <IoSearch size={20} color="black" className="absolute ml-2 top-[50%] translate-y-[-50%]" />
                    <Button className="absolute bg-[#E03C31] hover:bg-[#e03d31d3] cursor-pointer right-2.5 top-[50%] translate-y-[-50%]">
                        Tìm kiếm
                    </Button>
                </div>
            </div>
        </Carousel>
    </div>
};