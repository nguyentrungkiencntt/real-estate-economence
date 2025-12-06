import Header from "@/components/partials/LayoutSub/Header";
import "../globals.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@/utils/icons";
const { IoLocationOutline, BiSolidPhone, HiOutlineInformationCircle, MdOutlineMail, FaFacebookSquare, IoLogoWhatsapp, FaTelegram, } = icons;
export default function SellerLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <div className="w-[8%] min-h-screen">
                <Header />
            </div>
            <div className="w-[92%]">
                {children}
                <footer className="bg-[#eff1f5] border-t border-gray-300 text-[12px] font-semibold">
                    <div className="py-10 grid grid-cols-3 w-[90%] gap-40 m-auto">
                        <div className="flex flex-col gap-2">
                            <div className="w-[150px]">
                                <Image src={"https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"} alt="logo" className="object-cover object-center h-full w-full" width={150} height={50} />
                            </div>
                            <div className="text-[16px]">CÔNG TY CỔ PHẦN PROPERTYGURU VIỆT NAM</div>
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <IoLocationOutline size={18} />
                                    <div>
                                        Tầng 31, Keangnam Hanoi Landmark, Phạm Hùng, Nam Từ Liêm, Hà Nội
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <BiSolidPhone size={18} />
                                    <div>
                                        0336099317 - 0386800231
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div>
                                    <Button className="bg-red-500 hover:bg-red-400 cursor-pointer">
                                        <BiSolidPhone size={12} />
                                        0336099317</Button>
                                </div>
                                <div className="flex cursor-pointer px-4 py-2 gap-2 items-center justify-center rounded-md border">
                                    <HiOutlineInformationCircle size={18} />
                                    <div>trogiup.batdongsan.net</div>
                                </div>
                                <div className="flex px-4 py-2 gap-2 cursor-pointer items-center justify-center rounded-md border">
                                    <MdOutlineMail size={18} />
                                    <div>nguyenkiencnttltv@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="uppercase text-[20px]">
                                Hướng dẫn
                            </div>
                            <ul className="flex flex-col gap-2">
                                <Link href={'/'} className="hover:underline">
                                    <li>
                                        Về chúng tôi
                                    </li>
                                </Link>
                                <Link href={'/'} className="hover:underline">
                                    <li>
                                        Báo cáo & hỗ trợ
                                    </li>
                                </Link>
                                <Link href={'/'} className="hover:underline">
                                    <li>
                                        Câu hỏi thường gặp
                                    </li>
                                </Link>
                                <Link href={'/'} className="hover:underline">
                                    <li>
                                        Góp ý báo lỗi
                                    </li>
                                </Link>

                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="uppercase text-[20px]">
                                Quy định
                            </div>
                            <ul className="flex flex-col gap-2">
                                <Link href={'/'} className="hover:underline">
                                    <li>
                                        Quy định đăng tin
                                    </li>
                                </Link>
                                <Link href={'/'} className="hover:underline">
                                    <li>
                                        Quy định sử dụng website
                                    </li>
                                </Link>
                                <Link href={'/'} className="hover:underline">
                                    <li>
                                        Điều khoản & thảo thuận
                                    </li>
                                </Link>
                                <Link href={'/'} className="hover:underline">
                                    <li>
                                        Lấy token
                                    </li>
                                </Link>

                            </ul>
                        </div>
                    </div>
                    <div className="w-[90%] py-5 border-t flex items-center justify-between m-auto">
                        <div>
                            Copyright by Nguyen Trung Kien {new Date().getFullYear()}
                        </div>
                        <ul className="flex items-center gap-2">
                            <li className="cursor-pointer hover:text-gray-400">
                                <MdOutlineMail size={18} />
                            </li>
                            <li className="cursor-pointer hover:text-gray-400">
                                <FaFacebookSquare size={18} />
                            </li>
                            <li className="cursor-pointer hover:text-gray-400">
                                <IoLogoWhatsapp size={18} />
                            </li>
                            <li className="cursor-pointer hover:text-gray-400">
                                <FaTelegram size={18} />
                            </li>
                        </ul>
                    </div>

                </footer>
            </div>
        </div>
    );
}
