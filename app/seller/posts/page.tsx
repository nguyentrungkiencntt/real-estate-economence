'use client';
import Header from "@/components/partials/Sellers/Header";
import { icons } from "@/utils/icons";
import { dataListToolAlterForPost } from "@/utils/path";
import { useState } from "react";
const { IoSearch,
    CiFilter, AiOutlineDownload } = icons;


export default function SellerPosts() {

    const [posAlter, setPosAlter] = useState<{ id: number }>({ id: 0 })

    const handdleChoice = (id: number) => {
        setPosAlter({ id: id });
    }

    return <div>
        <Header title="Quản lý tin" type="" />
        <main>
            <div className="py-4 w-[90%] m-auto flex flex-col gap-2.5 bg-white">
                <div className="flex justify-between w-full">
                    <div className="flex gap-3">
                        <div className="flex gap-2 border px-4 items-center">
                            <IoSearch size={20} />
                            <input spellCheck={false} className="min-w-[350px] outline-none" placeholder="Nhập mã tin hoặc nội dung tiêu đề bài viết ..." />
                        </div>
                        <div className="flex cursor-pointer hover:bg-black hover:text-white items-center border gap-1 font-semibold shadow-2xl px-4 py-2 rounded-full">
                            <CiFilter size={18} />
                            <div>Lọc</div>
                        </div>
                    </div>
                    <div className="flex hover:bg-black hover:text-white items-center cursor-pointer gap-2 border px-4 py-2">
                        <AiOutlineDownload size={18} />
                        <div>Xuất file Excel</div>
                    </div>
                </div>
                <ul className="flex gap-4 text-[13px]">
                    {dataListToolAlterForPost?.map((item, index) => {
                        return <li key={index} onClick={() => handdleChoice(index)} className={`px-4 py-2 border cursor-pointer ${posAlter?.id === index ? 'bg-black text-white' : ''} rounded-md`}>
                            {item?.name} ({item?.count})
                        </li>
                    })}


                </ul>

            </div>
            <div className="bg-[#eff1f5] h-[300px]">

            </div>
        </main>
    </div>
}