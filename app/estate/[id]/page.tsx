'use client';
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Image from "next/image";
import { use } from "react";
import { icons } from "@/utils/icons";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const { SiZalo, LuPhoneCall } = icons;

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

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    return <div>
        <div className="shadow-2xl">
            <Header />
        </div>
        <main className="w-[75%] m-auto flex gap-4 my-4">
            <div className="w-[65%] flex flex-col gap-1 text-[14px]">
                <div className="flex flex-col gap-1">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        className='w-full'
                    >
                        <SwiperSlide className='min-h-full'>
                            <div className="min-h-[345px] max-h-[345px] w-full">
                                <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765119977/center/killfa1rmusyl1styuzk.jpg"} className="h-full w-full object-cover object-center" height={400} width={1000} alt="logo" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='min-h-full'>
                            <div className="min-h-[345px] max-h-[345px] w-full">
                                <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765119977/center/killfa1rmusyl1styuzk.jpg"} className="h-full w-full object-cover object-center" height={400} width={1000} alt="logo" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <ul className="flex gap-2">
                        <Swiper
                            modules={[A11y]}
                            spaceBetween={50}
                            slidesPerView={8}
                            className='w-full cursor-pointer'
                        >
                            <SwiperSlide className='min-h-full'>
                                <div className="min-h-20 max-h-20 min-w-[93px] max-w-[93px]">
                                    <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765119977/center/killfa1rmusyl1styuzk.jpg"} className="h-full w-full object-cover object-center" height={400} width={1000} alt="logo" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='min-h-full'>
                                <div className="min-h-20 max-h-20 min-w-[93px] max-w-[93px]">
                                    <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765119977/center/killfa1rmusyl1styuzk.jpg"} className="h-full w-full object-cover object-center" height={400} width={1000} alt="logo" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='min-h-full'>
                                <div className="min-h-20 max-h-20 min-w-[93px] max-w-[93px]">
                                    <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765119977/center/killfa1rmusyl1styuzk.jpg"} className="h-full w-full object-cover object-center" height={400} width={1000} alt="logo" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='min-h-full'>
                                <div className="min-h-20 max-h-20 min-w-[93px] max-w-[93px]">
                                    <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765119977/center/killfa1rmusyl1styuzk.jpg"} className="h-full w-full object-cover object-center" height={400} width={1000} alt="logo" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='min-h-full'>
                                <div className="min-h-20 max-h-20 min-w-[93px] max-w-[93px]">
                                    <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765119977/center/killfa1rmusyl1styuzk.jpg"} className="h-full w-full object-cover object-center" height={400} width={1000} alt="logo" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='min-h-full'>
                                <div className="min-h-20 max-h-20 min-w-[93px] max-w-[93px]">
                                    <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765119977/center/killfa1rmusyl1styuzk.jpg"} className="h-full w-full object-cover object-center" height={400} width={1000} alt="logo" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='min-h-full'>
                                <div className="min-h-20 max-h-20 min-w-[93px] max-w-[93px]">
                                    <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765119977/center/killfa1rmusyl1styuzk.jpg"} className="h-full w-full object-cover object-center" height={400} width={1000} alt="logo" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='min-h-full'>
                                <div className="min-h-20 max-h-20 min-w-[93px] max-w-[93px]">
                                    <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765119977/center/killfa1rmusyl1styuzk.jpg"} className="h-full w-full object-cover object-center" height={400} width={1000} alt="logo" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='min-h-full'>
                                <div className="min-h-20 max-h-20 min-w-[93px] max-w-[93px]">
                                    <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765119977/center/killfa1rmusyl1styuzk.jpg"} className="h-full w-full object-cover object-center" height={400} width={1000} alt="logo" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </ul>
                </div>
                <div className="mt-1 flex gap-2">
                    <div className="text-gray-400">Bán</div> <span className="text-gray-400">/</span>
                    <div className="text-gray-400">Bắc Giang</div> <span className="text-gray-400">/</span>
                    <div className="text-gray-400">Việt Yên</div> <span className="text-gray-400">/</span>
                    <div className="font-semibold">Bán đất tạo đường vanh đai số 4</div>
                </div>
                <div className="mt-2 font-semibold text-[22px]">
                    Cơ hội đầu tư lõi 3 KCN Quang Châu - Vân Trung
                </div>
                <div className="text-[14px] py-4 border-b">
                    Đường Vành Đai 4, Xã Vân Trung, Việt Yên, Bắc Giang
                </div>
                <div className="my-3 flex gap-2">
                   
                </div>
            </div>
            <div className="w-[25%] flex flex-col gap-3">
                <div className="border bg-white rounded-md p-4 pb-6 shadow flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="min-w-10 max-w-10 min-h-10 max-h-10">
                            <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765121170/center/ghybgs8yomzkxamdmd4b.png"} width={50} height={50} alt="avatar" className="object-cover object-center h-full w-full rounded-full border-gray-500 mt-1" />
                        </div>
                        <div className="text-[16px] font-semibold">Dương Quyên</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="px-2 py-1 border rounded-md flex items-center justify-center gap-2">
                            <div className="border rounded-md px-2 py-1.5 bg-blue-500">
                                <SiZalo size={18} color="#fff" />
                            </div>
                            <div>Chat qua Zalo</div>
                        </div>
                        <div className="px-2 py-2 border rounded-md flex items-center justify-center gap-2 bg-[#009BA1] border-[#009BA1] text-white">
                            <LuPhoneCall size={18} />
                            <div>0336099*** Hiện số</div>
                        </div>
                    </div>
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
            </div>
        </main>
        <div>
            <Footer />
        </div>
    </div>

}