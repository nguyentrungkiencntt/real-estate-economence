'use client';

import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { icons } from "@/utils/icons";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import LandEstate from "@/components/ItemComponents/LandEstate";
const { IoSearch, FaMapMarkedAlt, CiFilter, RiArrowDropDownLine } = icons;

const toolLands = [
    {
        id: 0,
        name: 'Lọc',
        icon: < CiFilter size={16} />
    },
    {
        id: 1,
        name: 'Tin xác thực',
        icon: ''
    },
    {
        id: 2,
        name: 'Loại nhà đất',
        icon: < RiArrowDropDownLine size={16} />
    },
    {
        id: 3,
        name: 'Khoảng giá',
        icon: < RiArrowDropDownLine size={16} />
    },
    {
        id: 4,
        name: 'Diện tích',
        icon: < RiArrowDropDownLine size={16} />
    },
]

const allter = [
    {
        id: 0,
        name: "Thoả thuận",
        link: ''
    },
    {
        id: 1,
        name: "Dưới 500 triệu",
        link: ''
    },
    {
        id: 2,
        name: "500 - 800 triệu",
        link: ''
    },
    {
        id: 3,
        name: "800 triệu - 1 tỷ",
        link: ''
    },
    {
        id: 4,
        name: "1 - 2 tỷ",
        link: ''
    },
    {
        id: 5,
        name: "2 - 3 tỷ",
        link: ''
    },
    {
        id: 6,
        name: "3 - 5 tỷ",
        link: ''
    },
    {
        id: 7,
        name: "5 - 7 tỷ",
        link: ''
    },
    {
        id: 8,
        name: "7 - 10 tỷ",
        link: ''
    },
    {
        id: 9,
        name: "10 - 20 tỷ",
        link: ''
    },
    {
        id: 10,
        name: "20 - 30 tỷ",
        link: ''
    },
    {
        id: 11,
        name: "30 - 40 tỷ",
        link: ''
    },
    {
        id: 12,
        name: "40 - 60 tỷ",
        link: ''
    },
    {
        id: 13,
        name: "Trên 60 tỷ",
        link: ''
    },
]

const allterDT = [
    {
        id: 0,
        name: "Dưới 30 m²",
        link: ''
    },
    {
        id: 1,
        name: "30 - 50 m²",
        link: ''
    },
    {
        id: 2,
        name: "50 - 80 m²",
        link: ''
    },
    {
        id: 3,
        name: "80 - 100 m²",
        link: ''
    },
    {
        id: 4,
        name: "100 - 150 m²",
        link: ''
    },
    {
        id: 5,
        name: "150 - 200 m²",
        link: ''
    },
    {
        id: 6,
        name: "200 - 250 m²",
        link: ''
    },
    {
        id: 7,
        name: "250 - 300 m²",
        link: ''
    },
    {
        id: 8,
        name: "300 - 500 m²",
        link: ''
    },
    {
        id: 9,
        name: "Trên 500 m²",
        link: ''
    },
]
const allterTP = [
    {
        id: 0,
        name: "Hồ Chí Minh",
        link: '',
        count: 122135
    },
    {
        id: 1,
        name: "Hà Nội",
        link: '',
        count: 122
    },
    {
        id: 2,
        name: "Đà Nẵng",
        link: '',
        count: 100345
    },
    {
        id: 3,
        name: "Bình Dương",
        link: '',
        count: 9099
    },
    {
        id: 4,
        name: "Khánh Hoà",
        link: '',
        count: 4921
    },
    {
        id: 5,
        name: "Đồng Nai",
        link: '',
        count: 4221
    },
    {
        id: 6,
        name: "Hải Phòng",
        link: '',
        count: 4211
    },

]
const post = [
    {
        id: 0,
        title: "Trọn Bộ Lãi Suất Vay Mua Nhà Mới Nhất Tháng 11/2025",
        link: ''
    },
    {
        id: 1,
        title: "Trọn Bộ Lãi Suất Vay Mua Nhà Mới Nhất Tháng 11/2025",
        link: ''
    },
    {
        id: 2,
        title: "Trọn Bộ Lãi Suất Vay Mua Nhà Mới Nhất Tháng 11/2025",
        link: ''
    },
]


export default function Page() {

    const [choiceTool, setChoiceTool] = useState<{ id: number }>({ id: -1 })

    const handdleChoiceTool = (id: number) => {
        setChoiceTool({ id: id })
    }

    return <div>
        <div className="shadow-2xl">
            <Header />
        </div>
        <main className="my-5 w-[60%] m-auto">
            <div className="flex items-center justify-between gap-2">
                <div className="relative h-[50px] w-[85%] bg-white rounded-md">
                    <Input className="py-2 pl-10 h-full w-full" placeholder="Nhập nội dung tìm kiếm ..." spellCheck={false} />
                    <div className="absolute top-[50%] translate-x-[50%] translate-y-[-50%]"><IoSearch size={20} /></div>
                    <Button className="bg-[#E03C31] absolute text-white top-[50%] translate-x-[50%] translate-y-[-50%] hover:bg-[#E03C31] cursor-pointer right-[60px]">
                        Tìm kiếm
                    </Button>
                </div>
                <div className="w-[15%]">
                    <Button className="bg-[#009BA1] h-[45px] flex gap-2 text-white hover:bg-[#009BA1] cursor-pointer">
                        <div><FaMapMarkedAlt size={20} /></div>
                        <div>Xem bản đồ</div>
                    </Button>
                </div>
            </div>
            <div className="flex items-center gap-2.5 mt-5 pb-5 border-b">
                {toolLands?.map((item, index) => {
                    return <div onClick={() => handdleChoiceTool(index)} key={index} className={`px-4 py-2 border text-gray-400 cursor-pointer rounded-md flex ${choiceTool?.id === index ? 'text-white bg-blue-500' : ''}`}>
                        <div className="flex gap-2 items-center">
                            {item?.name === "Lọc" && item.icon}
                            <div className="">{item?.name}</div>
                            {item?.name === "Tin xác thực" && <Switch />}
                            {item?.name !== "Lọc" && item.icon}
                        </div>
                    </div>
                })}
            </div>
            <div className="flex gap-2">
                <div className="w-[75%] text-[12px] flex flex-col gap-3 my-3">
                    <div className="flex gap-2 items-center">
                        <div className="flex text-gray-400">
                            Bán
                        </div>
                        {`>`}
                        <div className="font-semibold">
                            Tất cả BĐS trên toàn quốc
                        </div>
                    </div>
                    <LandEstate countNews={122334} title="Mua bán nhà đất trên toàn quốc" type="landslase" />
                </div>
                <div className="w-[25%] mt-5 flex flex-col gap-4">
                    <div className="rounded-md min-w-full border flex flex-col p-4 gap-2">
                        <div className="text-[18px] font-semibold">
                            Lọc theo khoảng giá
                        </div>
                        <ul className="flex flex-col gap-2">
                            {allter?.map((item, index) => {
                                return <li key={index} className="cursor-pointer text-[14px]">
                                    {item?.name}
                                </li>
                            })}
                        </ul>

                    </div>
                    <div className="rounded-md min-w-full border flex flex-col p-4 gap-2">
                        <div className="text-[18px] font-semibold">
                            Lọc theo diện tích
                        </div>
                        <ul className="flex flex-col gap-2">
                            {allterDT?.map((item, index) => {
                                return <li key={index} className="cursor-pointer text-[14px]">
                                    {item?.name}
                                </li>
                            })}
                        </ul>

                    </div>
                    <div className="rounded-md min-w-full border flex flex-col p-4 gap-2">
                        <div className="text-[18px] mb-2 font-semibold">
                            Mua bán nhà đất
                        </div>
                        <ul className="flex flex-col gap-2">
                            {allterTP?.map((item, index) => {
                                return <li key={index} className="cursor-pointer text-[14px]">
                                    {item?.name} ({item?.count})
                                </li>
                            })}
                        </ul>

                    </div>
                    <div className="rounded-md min-w-full border flex flex-col p-4 gap-2">
                        <div className="text-[18px] mb-2 font-semibold pb-2 border-b">
                            Bài viết được quan tâm
                        </div>
                        <ul className="flex flex-col gap-2">
                            {post?.map((item, index) => {
                                return <li key={index} className="cursor-pointer flex gap-2 text-[14px]">
                                    <div className="text-[12px]">
                                        <div className="bg-[#FFECEB] rounded-full text-[#74150F] px-2.5 mt-2 py-1 font-semibold">{item?.id + 1}</div>
                                    </div>
                                    <div className="font-semibold">{item?.title}</div>
                                </li>
                            })}
                        </ul>

                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
}