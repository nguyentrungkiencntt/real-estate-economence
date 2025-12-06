'use client';
import { toolHeaders } from "@/utils/path";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



export default function Header() {

    const [isCheck, setIsCheck] = useState<{ id: number }>({ id: 0 });

    const handdleChioce = (id:number) => {
        setIsCheck({id:id});
    }

    return <header className="w-full flex border-r justify-center h-full">
        <ul className="flex flex-col items-center gap-6 font-semibold">
            <Link href={'/'}>
                <li className="h-[50px] p-4 mb-10">
                    <Image src={"https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"} alt="logo" className="object-cover object-center h-[50px] w-[50px]" width={50} height={50} />
                </li>
            </Link>
            {toolHeaders?.map((item, index) => {
                return <Link onClick={()=>handdleChioce(index)} key={index} href={item?.link}>
                    <li className={`p-4 flex flex-col gap-2 items-center justify-center hover:bg-gray-200 hover:rounded-md ${isCheck?.id === index ? "text-red-500 font-bold" : ""}`}>
                        {item?.icon}
                        <div className="text-[12px]">
                            {item?.name}
                        </div>
                    </li>
                </Link>
            })}


        </ul>
    </header>
}