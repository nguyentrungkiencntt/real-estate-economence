'use client';
import { icons } from "@/utils/icons";
import Link from "next/link";
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
import Image from "next/image";
const { TiArrowRight, FaImage, MdOutlineSlowMotionVideo } = icons;

export default function RealEstateEnterprise() {
    return <div className="w-[80%] py-10 m-auto flex flex-col gap-3">
        <div className="flex justify-between items-center">
            <div className="font-semibold text-[20px]">Dự án bất động sản nổi bật</div>
            <Link href={"/"} className="flex items-center gap-2">
                <div className="text-[13px]">
                    Xem tất cả
                </div>
                <TiArrowRight size={20} />
            </Link>
        </div>
        <div className="">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                className='w-full'
            >
                <SwiperSlide className='min-h-full'>
                    <div className='flex min-w-[262px] h-full rounded-md border flex-col gap-3'>
                        <div className='relative min-h-[164px] overflow-hidden max-h-[164px]'>
                            <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765005606/center/vljims8ze0v2vhoejwzi.jpg"} width={262} height={164} className='w-full min-h-[164px] rounded-tl-md rounded-tr-md shadow object-cover object-center' alt='anh' />
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
                        <div className='flex flex-col px-4 py-1 pb-4 justify-center gap-3 cursor-pointer'>
                            <div className="flex">
                                <div className="text-[#07A35D] px-2 py-1 rounded-md bg-[#E7FFF4] font-semibold text-[14px]">
                                    Đang mở bán
                                </div>
                            </div>
                            <div className="text-[16px] font-semibold">
                                Noble Palace Tây Thăng Long
                            </div>
                            <div className="text-[14px] font-semibold">76,99 ha</div>
                            <div className="text-[14px]">
                                Đan Phượng, Hà Nội
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='min-h-full'>
                    <div className='flex min-w-[262px] h-full rounded-md border flex-col gap-3'>
                        <div className='relative min-h-[164px] overflow-hidden max-h-[164px]'>
                            <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765005606/center/vljims8ze0v2vhoejwzi.jpg"} width={262} height={164} className='w-full min-h-[164px] rounded-tl-md rounded-tr-md shadow object-cover object-center' alt='anh' />
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
                        <div className='flex flex-col px-4 py-1 pb-4 justify-center gap-3 cursor-pointer'>
                            <div className="flex">
                                <div className="text-[#07A35D] px-2 py-1 rounded-md bg-[#E7FFF4] font-semibold text-[14px]">
                                    Đang mở bán
                                </div>
                            </div>
                            <div className="text-[16px] font-semibold">
                                Noble Palace Tây Thăng Long
                            </div>
                            <div className="text-[14px] font-semibold">76,99 ha</div>
                            <div className="text-[14px]">
                                Đan Phượng, Hà Nội
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='min-h-full'>
                    <div className='flex min-w-[262px] h-full rounded-md border flex-col gap-3'>
                        <div className='relative min-h-[164px] overflow-hidden max-h-[164px]'>
                            <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765005606/center/vljims8ze0v2vhoejwzi.jpg"} width={262} height={164} className='w-full min-h-[164px] rounded-tl-md rounded-tr-md shadow object-cover object-center' alt='anh' />
                            <div className="absolute bottom-2 text-white right-2 flex items-center gap-2">
                            
                                <div><FaImage size={14} /></div>
                                <div className="text-[14px]">
                                    12
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col px-4 py-1 pb-4 justify-center gap-3 cursor-pointer'>
                            <div className="flex">
                                <div className="text-[#07A35D] px-2 py-1 rounded-md bg-[#E7FFF4] font-semibold text-[14px]">
                                    Đang mở bán
                                </div>
                            </div>
                            <div className="text-[16px] font-semibold">
                                Noble Palace Tây Thăng Long
                            </div>
                            <div className="text-[14px] font-semibold">76,99 ha</div>
                            <div className="text-[14px]">
                                Đan Phượng, Hà Nội
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='min-h-full'>
                    <div className='flex min-w-[262px] h-full rounded-md border flex-col gap-3'>
                        <div className='relative min-h-[164px] overflow-hidden max-h-[164px]'>
                            <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765005606/center/vljims8ze0v2vhoejwzi.jpg"} width={262} height={164} className='w-full min-h-[164px] rounded-tl-md rounded-tr-md shadow object-cover object-center' alt='anh' />
                            <div className="absolute bottom-2 text-white right-2 flex items-center gap-2">
                               
                                <div><FaImage size={14} /></div>
                                <div className="text-[14px]">
                                    12
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col px-4 py-1 pb-4 justify-center gap-3 cursor-pointer'>
                            <div className="flex">
                                <div className="text-[#07A35D] px-2 py-1 rounded-md bg-[#E7FFF4] font-semibold text-[14px]">
                                    Đang mở bán
                                </div>
                            </div>
                            <div className="text-[16px] font-semibold">
                                Noble Palace Tây Thăng Long
                            </div>
                            <div className="text-[14px] font-semibold">76,99 ha</div>
                            <div className="text-[14px]">
                                Đan Phượng, Hà Nội
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='min-h-full'>
                    <div className='flex min-w-[262px] h-full rounded-md border flex-col gap-3'>
                        <div className='min-h-[164px] relative overflow-hidden max-h-[164px]'>
                            <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765005606/center/vljims8ze0v2vhoejwzi.jpg"} width={262} height={164} className='w-full min-h-[164px] rounded-tl-md rounded-tr-md shadow object-cover object-center' alt='anh' />
                            <div className="absolute bottom-2 text-white right-2 flex items-center gap-2">
                                
                                <div><FaImage size={14} /></div>
                                <div className="text-[14px]">
                                    5
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col px-4 py-1 pb-4 justify-center gap-3 cursor-pointer'>
                            <div className="flex">
                                <div className="text-[#845D9C] px-2 py-1 rounded-md bg-[#F0EAF4] font-semibold text-[14px]">
                                    Đã bàn giao
                                </div>
                            </div>
                            <div className="text-[16px] font-semibold">
                                Noble Palace Tây Thăng Long
                            </div>
                            <div className="text-[14px] font-semibold">76,99 ha</div>
                            <div className="text-[14px]">
                                Đan Phượng, Hà Nội
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
};