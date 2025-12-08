'use client';
import { icons } from "@/utils/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const { FaMapMarkedAlt,IoSearch } = icons;

export default function SearchEstate({ type }: { type: string }) {
    return <div>
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
    </div>
}