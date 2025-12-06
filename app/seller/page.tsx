'use client';
import Header from "@/components/partials/Sellers/Header";
import { Button } from "@/components/ui/button";
import { icons } from "@/utils/icons";
import { toolsAlter } from "@/utils/path";
import Image from "next/image";
import { useState } from "react";
const { 
    CiCircleList, MdOutlineKeyboardArrowRight, BiUser, IoTicketSharp, FaFire, IoIosAdd, LuNewspaper,
} = icons;


export default function Seller() {

    const [isCheckAlter, setIsCheckAlter] = useState<{ id: number }>({ id: 0 });
    
    const handdleIsCheckAlter = (id: number) => {
        setIsCheckAlter({ id: id });
    }

    return <div>
        <Header title="" type="seller"/>
        <main className="w-[90%] flex flex-col gap-3 py-10 m-auto">
            <div className="flex flex-col gap-3">
                <div className="text-[24px] font-semibold">Tổng quan tài khoản</div>
                <div className="grid grid-cols-3 gap-3">
                    <div className="py-4 px-6 bg-gray-200 rounded-md">
                        <header className="flex gap-4 items-center text-[12px] font-semibold">
                            <CiCircleList size={18} />
                            <div className="text-[14px]">Tin đăng</div>
                        </header>
                        <main className="font-semibold text-[22px]">
                            0  tin
                        </main>
                        <div className="text-[14px]">
                            Đang hiển thị
                        </div>
                        <footer>
                            <div className="flex gap-2 cursor-pointer hover:underline items-center text-red-500 font-semibold">
                                <div>Đăng tin</div>
                                <MdOutlineKeyboardArrowRight size={16} />
                            </div>
                        </footer>
                    </div>
                    <div className="py-4 px-6 bg-gray-200 rounded-md">
                        <header className="flex gap-4 items-center text-[12px] font-semibold">
                            <BiUser size={18} />
                            <div className="text-[14px]">Người dùng</div>
                        </header>
                        <main className="font-semibold text-[22px]">
                            0  người
                        </main>
                        <div className="text-green-700 font-semibold text-[12px]">
                            + 0 vào ngày hôm nay
                        </div>
                    </div>
                    <div className="py-4 px-6 bg-gray-200 rounded-md">
                        <header className="flex gap-4 items-center text-[12px] font-semibold">
                            <IoTicketSharp size={18} />
                            <div className="text-[14px]">Vé khuyến mãi</div>
                        </header>
                        <main className="font-semibold text-[22px]">
                            0  vé
                        </main>
                        <div className="text-[14px] text-pink-600 font-semibold">
                            Đang sử dụng
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-6">
                <div className="text-[24px] font-semibold">Thông tin dành riêng cho bạn</div>
                <div className="flex items-center gap-3">
                    {toolsAlter?.map((item, index) => {
                        return <div key={index} onClick={() => handdleIsCheckAlter(index)} className={`flex gap-2 ${isCheckAlter.id === index ? 'bg-black text-white' : ''} border rounded-md px-4 py-2 items-center justify-center cursor-pointer`}>
                            {item?.icon}
                            <div> {item.name}</div>
                        </div>
                    })}
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <div className="flex flex-col gap-2 p-5 bg-gray-200 rounded-md">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2 items-center ">
                                <FaFire size={18} color="#c20000" />
                                <div className="flex gap-2 font-semibold">
                                    Bài đăng
                                </div>
                            </div>
                            <div className="px-2 py-0.5 font-semibold text-[12px] text-white bg-[#c20000] rounded-full">3</div>
                        </div>
                        <div className="bg-[#c20000] rounded-md py-20 flex flex-col gap-2 items-center justify-center">
                            <Image src={'/images/notpost.png'} width={100} height={100} alt="notpost" />
                            <div className="text-[20px] font-semibold text-white">Quà tặng 1 tin thường 30 ngày</div>
                            <Button className="bg-white text-black cursor-pointer hover:bg-gray-200 hover:text-black">
                                <IoIosAdd size={18} />
                                Tạo tin đăng đầu tiên
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 p-5 bg-gray-200 rounded-md">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2 items-center ">
                                <LuNewspaper size={18} color="blue" />
                                <div className="flex gap-2 font-semibold text-blue-500">
                                    Thông tin
                                </div>
                            </div>
                            <div className="px-2 py-0.5 font-semibold text-[12px] text-white bg-blue-400 rounded-full">3</div>
                        </div>
                        <ul className="flex flex-col gap-2">
                            <li className="flex gap-2 items-center bg-white shadow-2xs rounded-md px-4 py-2">
                                <div className="min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] rounded-full bg-black overflow-hidden">
                                    <Image src={'/images/notpost.png'} height={50} className="w-full h-full" width={50} alt="logo" />
                                </div>
                                <div>Bạn đã cập nhật tất cả thông tin của ngày hôm nay 👏</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </div>
}