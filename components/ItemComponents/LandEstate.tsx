'use client';

import { Switch } from "@/components/ui/switch";
import { icons } from "@/utils/icons";
const { LuBellDot } = icons;
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function LandEstate({ title, countNews, type }: { title: string, countNews: number, type: string }) {


    console.log(type);

    return <div className="my-2 flex flex-col gap-2">
        <div className="text-[20px] font-semibold">{title}</div>
        <div className="text-[12px]">Hiện có {countNews} bất động sản.</div>
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <div><LuBellDot size={18} /></div>
                <div>Nhận email tin mới</div>
                <Switch id="airplane-mode" />
            </div>
            <div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Mặc định" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Lọc theo</SelectLabel>
                            <SelectItem value="apple">Mặc định</SelectItem>
                            <SelectItem value="banana">Tin xác thực xếp trước</SelectItem>
                            <SelectItem value="blueberry">Giá thấp đến cao</SelectItem>
                            <SelectItem value="grapes">Giá cao đến thấp</SelectItem>
                            <SelectItem value="pineapple">Diện tích nhỏ đến diện tích lớn</SelectItem>
                            <SelectItem value="pineapple">Diện tích lớn đến diện tích nhỏ</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
        <div className="my-4 flex flex-col gap-2">
            <div className="flex flex-col rounded-md border">
                <div className="">

                </div>
            </div>
        </div>
    </div>
};