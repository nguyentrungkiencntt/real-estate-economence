'use client';
import { toolNavNotification } from "@/utils/path";
import Image from "next/image";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { icons } from "@/utils/icons";
// import { Button } from "@/components/ui/button";
const { IoCheckmarkDoneOutline, IoSettingsOutline, MdOutlineArrowDropDown, BsBoxArrowInLeft,
    CiLock, PiBellLight, GiTwoCoins, MdOutlinePayment, RiBitCoinFill, } = icons;


export default function Header({ title, type }: { title: string, type: string }) {

    const [isUser, setIsUser] = useState<boolean>(false);
    const [isCoin, setIsCoin] = useState<boolean>(false);
    const [isCheck, setIsCheck] = useState<{ id: number }>({ id: 0 });
    const [isBell, setIsBell] = useState<boolean>(false);


    const handdleTag = (id: number) => {
        setIsCheck({ id: id })
    }

    const handdleIsBell = () => {
        setIsBell(!isBell);
    }

    const handdleUser = () => {
        setIsUser(!isUser);
    }
    const handdleCoin = () => {
        setIsCoin(!isCoin);
    }

    return <header className="h-[88px] flex items-center border-b border-gray-300 px-14">
        <div className="flex items-center justify-between w-full">
            <div className={`flex gap-5 items-center ${type === "seller" ? "relative" : ""}`}>
                {type === "seller" && <div className="h-10 w-10 rounded-full border border-red-500 bg-[#74150F] text-white flex items-center justify-center">
                    N
                </div>}
                {type === "seller" && <div className="flex flex-col">
                    <div>Xin chào,</div>
                    <div onClick={handdleUser} className="cursor-pointer flex items-center gap-2">
                        <div className="font-semibold">
                            Nguyễn Trung Kiên
                        </div>
                        <MdOutlineArrowDropDown size={18} />
                    </div>
                </div>}
                {isUser && <ul className="absolute top-[75px] left-0 bg-white rounded-md shadow-2xl min-w-[250px] max-w-[250px] flex flex-col border">
                    <li className="flex items-center gap-2 cursor-pointer px-6 py-2 hover:bg-gray-200">
                        <CiLock size={16} />
                        <div>
                            Thay đổi mật khẩu
                        </div>
                    </li>
                    <li className="flex items-center cursor-pointer gap-2 px-6 py-2 hover:bg-gray-200 ">
                        <BsBoxArrowInLeft size={16} />
                        <div>
                            Đăng xuất
                        </div>
                    </li>
                </ul>}
                {type !== "seller" && <div className="font-semibold text-2xl">{title}</div>}
            </div>
            <ul className="flex items-center gap-2">
                <li className="flex relative items-center gap-3 mr-6">
                    <div onClick={handdleCoin} className="flex cursor-pointer items-center gap-2">
                        <GiTwoCoins size={18} />
                        <div className="text-[14px] font-semibold">1.000.000 vnđ</div>
                        <MdOutlineArrowDropDown size={18} />
                    </div>
                    <div>
                        <button className="cursor-pointer flex gap-2 items-center px-4 py-2 text-[12px] bg-black text-white rounded-md">
                            <MdOutlinePayment size={18} />
                            Nạp tiền
                        </button>
                    </div>
                    {isCoin && <ul className="absolute top-[50px] right-[100px] bg-white rounded-md shadow-2xl min-w-[300px] max-w-[300px] flex flex-col border">
                        <li className="flex items-center justify-between gap-2 px-6 py-2">
                            <div className="text-[12px] flex gap-2 items-center">
                                <GiTwoCoins size={18} />
                                <div>Số dư tài khoản :</div>
                            </div>
                            <div className="font-semibold">
                                1.000.000
                            </div>
                        </li>
                        <li className="flex items-center justify-between gap-2 px-6 py-2 border-b border-gray-300">
                            <div className="text-[12px] flex items-center gap-2">
                                <RiBitCoinFill size={18} />
                                <div>
                                    Số coin (tích):
                                </div>
                            </div>
                            <div className="font-semibold ">
                                1.000
                            </div>
                        </li>
                        <li className="flex items-center justify-between gap-2 px-6 py-2">
                            <div className="flex font-semibold text-[14px] items-center gap-2">
                                <div>
                                    TK Tin đăng:
                                </div>
                            </div>
                            <div className="font-semibold">
                                1.001.000 VNĐ
                            </div>
                        </li>
                        <li className="flex items-center justify-between gap-2 px-6 py-2">
                            <div className="flex font-semibold text-[14px] items-center gap-2">
                                <div>
                                    TK Khuyến mãi:
                                </div>
                            </div>
                            <div className="font-semibold">
                                0
                            </div>
                        </li>
                    </ul>}
                </li>
                <li className="relative flex flex-col items-center gap-1 cursor-pointer">
                    <PiBellLight onClick={handdleIsBell} size={18} />
                    <div onClick={handdleIsBell} className="text-[12px] font-semibold">
                        Thông báo
                    </div>
                    {isBell && <div className="absolute top-10 right-0 bg-white rounded-md shadow-2xl min-w-[550px] max-w-[550px] flex flex-col border">
                        <div className="flex items-center justify-between gap-3">
                            <div className="px-6 py-4 font-semibold">
                                Thông báo
                            </div>
                            <div className="px-6 py-2 flex items-center gap-6">
                                <div className="flex gap-2 items-center">
                                    <Switch id="airplane-mode" className="cursor-pointer" />
                                    <Label htmlFor="airplane-mode">Chưa đọc</Label>
                                </div>
                                <div title="Chọn toàn bộ đã đọc" className="text-gray-500"><IoCheckmarkDoneOutline size={16} /></div>
                                <div title="Cài đặt thông báo"><IoSettingsOutline size={16} /></div>
                            </div>
                        </div>
                        <ul className="px-4 font-semibold flex items-center border-b text-gray-400">
                            {toolNavNotification?.map((item, index) => {
                                return <li onClick={() => handdleTag(index)} key={index} className={`px-5 py-2 ${isCheck.id === index ? 'border-b-2 text-red-500 border-red-500' : ''}`}>{item?.name}</li>
                            })}
                        </ul>
                        <div className="flex justify-center items-center min-h-[300px] max-h-[300px] w-full">
                            <Image src={'/images/no-notification.png'} alt="no-notification" height={80} width={150} className="w-[200px] object-cover object-center" />
                        </div>
                    </div>}
                </li>
            </ul>
        </div>
    </header>
}