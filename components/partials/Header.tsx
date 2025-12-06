'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { icons } from "@/utils/icons";
import { useRouter } from "next/navigation";
const { IoMdHeartEmpty, MdOutlineArrowDropDown, PiNotePencilFill, BsBoxArrowInLeft, MdOutlinePayment, BiUser, CiLock, PiBagSimpleLight, CiCircleList, ImStatsDots } = icons;


const data = [
    {
        id: 0,
        name: 'Nhà đất bán',
        link: '/'
    },
    {
        id: 1,
        name: 'Nhà đất cho thuê',
        link: '/'
    },
    {
        id: 2,
        name: 'Dự án',
        link: '/'
    },
    {
        id: 3,
        name: 'Tin tức',
        link: '/'
    },
    {
        id: 4,
        name: 'Phân tích đánh giá',
        link: '/'
    },
    {
        id: 5,
        name: 'Danh bạ',
        link: '/'
    },

]

export default function Header() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
    const [isUser, setUser] = useState<boolean>(false);
    const [isLike, setLike] = useState<boolean>(false);
    const router = useRouter();

    const handdleUser = () => {
        setLike(false);
        setUser(!isUser);
    }

    const handdleLike = () => {
        setUser(false);
        setLike(!isLike);
    }

    return <header className="flex items-center w-[90%] m-auto h-24 py-5">
        <div className="flex justify-between items-center text-[13px] w-full">
            <div className="flex items-center gap-2.5">
                <div className="h-[50px]">
                    <Link href={'/'}>
                        <Image src={"https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"} alt="logo" className="object-cover object-center h-full w-full" width={50} height={50} />
                    </Link>
                </div>
                <ul className="flex font-semibold">
                    {data && data.length > 0 && data?.map((item, index) => {
                        return <Link key={index} href={item?.link} className="px-4 py-2">
                            <li>
                                {item?.name}
                            </li>
                        </Link>
                    })}
                </ul>
            </div>
            <ul className="flex items-center font-semibold">
                <Link href={'/'} className={`px-4 py-2 relative ${isLoggedIn ? '' : 'hidden'}`}>
                    <li title="Tin đã thích" onClick={handdleLike} className="text-gray-800 flex items-center gap-2">
                        <IoMdHeartEmpty size={20} />
                        Yêu thích
                    </li>
                    {isLike && <ul className="absolute right-0 top-10 bg-white rounded-md shadow-2xl min-w-[300px] max-w-[250px] flex justify-center flex-col">
                        <li className="flex items-center justify-center gap-2 py-4 border-b">
                            <div>
                                Tin đăng đã lưu
                            </div>
                        </li>
                        <div className="flex items-center w-full py-6 justify-center">
                            <Image src={'/images/like.png'} width={100} height={80} className="w-[100px] h-full object-cover object-center" alt="like" />
                        </div>
                    </ul>}
                </Link>
                <Link href={'/'} className={`px-4 py-2 ${isLoggedIn ? 'hidden' : ''}`}>
                    <li>
                        Đăng ký
                    </li>
                </Link>
                <Link href={'/'} className={`px-4 py-2 ${isLoggedIn ? 'hidden' : ''}`}>
                    <li>
                        Đăng nhập
                    </li>
                </Link>

                <li onClick={handdleUser} className={`flex gap-3 items-center cursor-pointer relative px-4 py-2 text-gray-800 ${isLoggedIn ? '' : 'hidden'}`}>
                    <div className="h-10 w-10 rounded-full border border-red-500 bg-[#74150F] text-white flex items-center justify-center">
                        N
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                            Nguyễn Trung Kiên
                        </div>
                        <MdOutlineArrowDropDown size={18} />
                    </div>
                    {isUser && <ul className="absolute top-[50px] right-0 bg-white rounded-md shadow-2xl min-w-[250px] max-w-[250px] flex flex-col">

                        <li onClick={() => router.push("/seller")} className="flex items-center gap-2 px-6 py-2 hover:bg-gray-200">
                            <ImStatsDots size={16} />
                            <div>
                                Tổng quan
                            </div>
                        </li>

                        <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-200">
                            <CiCircleList size={16} />
                            <div>
                                Quản lý tin đăng
                            </div>
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-200">
                            <BiUser size={16} />
                            <div>
                                Thay đổi thông tin cá nhân
                            </div>
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 hover:bg-gray-200">
                            <CiLock size={16} />
                            <div>
                                Thay đổi mật khẩu
                            </div>
                        </li>
                        <li className="flex relative items-center gap-2 px-6 py-2 hover:bg-gray-200">
                            <PiBagSimpleLight size={16} />
                            <div>
                                Môi giới chuyên nghiệp
                            </div>
                            <div className="absolute right-3 bg-red-500 text-white px-2 py-0.5 text-[9px] flex items-center justify-center font-semibold rounded-md">Sắp có</div>
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 border-b hover:bg-gray-200">
                            <MdOutlinePayment size={16} />
                            <div>
                                Nạp tiền
                            </div>
                        </li>
                        <li className="flex items-center gap-2 my-1 px-6 py-2 hover:bg-gray-200 ">
                            <BsBoxArrowInLeft size={16} />
                            <div>
                                Đăng xuất
                            </div>
                        </li>
                    </ul>}
                </li>

                <Link href={'/'} className={`px-4 py-2 border rounded-md border-gray-400 text-gray-800 ${isLoggedIn ? '' : 'hidden'}`}>
                    <li title="Đăng tin ngay" className="flex items-center gap-2">
                        <PiNotePencilFill size={18} />
                        <div>
                            Đăng tin
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    </header>
}