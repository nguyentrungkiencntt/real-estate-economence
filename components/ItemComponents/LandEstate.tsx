'use client';

import { Switch } from "@/components/ui/switch";
import { icons } from "@/utils/icons";
const { LuBellDot, MdOutlineSlowMotionVideo, FaImage, LuPhoneCall, IoMdHeartEmpty } = icons;
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image";

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
            <div className="flex flex-col rounded-md border shadow">
                <div className="flex gap-1 relative">
                    <div className="h-full w-[65%]">
                        <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765119977/center/killfa1rmusyl1styuzk.jpg"} alt="anh" width={463} height={233} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="flex flex-col w-[35%] gap-1">
                        <div className="">
                            <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765120016/center/fhzrvifxcjucownkedcn.jpg"} alt="anh" width={463} height={233} className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="h-full w-full">
                                <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765120074/center/mtiaau1vpikuty1qwfwo.jpg"} alt="anh" width={463} height={233} className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="h-full w-full">
                                <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765120146/center/ighttbthludaunhorrqh.jpg"} alt="anh" width={463} height={233} className="h-full w-full object-cover object-center" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-2 text-white right-2 flex items-center gap-2">
                        <div>
                            <MdOutlineSlowMotionVideo size={18} />
                        </div>
                        <div><FaImage size={14} /></div>
                        <div className="text-[14px]">
                            12
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="font-semibold text-[20px]">
                        Cơ hội đầu tư lõi 3 KCN Quang Châu - Vân Trung
                    </div>
                    <div className="flex items-center gap-3 text-[16px]">
                        <div className="text-[#E03C31] font-semibold">5,1 tỷ</div> .
                        <div className="text-[#E03C31] font-semibold">85 m²</div>  .
                        <div className="text-gray-400">60 tr/m²</div> .
                        <div className="text-gray-400">Việt Yên,Bắc Giang</div>
                    </div>
                    <div className="mt-2 text-gray-400 text-justify">
                        {`Trung Đồng, Việt Yên. Điểm vàng tạo dòng tiền 50 - 70 triệu/tháng. Giá F0 khoảng 60 - 80 triệu/m² - 4.5-7.5ty/lô. Hỗ trợ ngân hàng đến 12 tháng.Khai thác dòng tiền khủng 50 - 70 triệu/tháng. Ngay cạnh dự án là: Khu công nghiệp Quang Châu Vân Trung Đình Trám (Foxconn, Luxshare). Dãy trọ công nhân và khu chuyên gia đang cháy phòng quanh năm. Xung quanh gần như không có khu dân cư mới nào, nguồn cung cực hiếm. Với vị trí độc tôn này, chỉ cần xây c...`.slice(0, 250) + `...`}
                    </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="min-w-8 max-w-8 min-h-8 max-h-8">
                            <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765121170/center/ghybgs8yomzkxamdmd4b.png"} width={50} height={50} alt="avatar" className="object-cover object-center h-full w-full rounded-full mt-1" />
                        </div>
                        <div className="flex flex-col ">
                            <div className="font-semibold text-[14px]">
                                Dương Quyên
                            </div>
                            <div className="text-gray-400">
                                Đăng hôm nay
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="px-4 font-semibold cursor-pointer py-2 flex gap-2 text-white rounded-md bg-[#009BA1] border-[#009BA1]">
                            <LuPhoneCall size={18} />
                            <div>0336099*** Hiện số</div>
                        </div>
                        <div className="rounded-md p-2 border hover:bg-gray-200 cursor-pointer">
                            <IoMdHeartEmpty size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};