'use client';
import { Switch } from "@/components/ui/switch"
import { icons } from "@/utils/icons";
import { useState } from "react";
const { CiFilter, RiArrowDropDownLine } = icons;
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

export default function AlterEstate({ type }: { type: string }) {

    const [choiceTool, setChoiceTool] = useState<{ id: number }>({ id: -1 })

    const handdleChoiceTool = (id: number) => {
        setChoiceTool({ id: id })
    }

    return <div className="flex items-center gap-2.5 mt-5 pb-5 border-b">
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
}