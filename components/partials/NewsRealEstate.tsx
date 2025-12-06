'use client';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function NewsRealEstate() {
    return <div className="w-[80%] m-auto flex flex-col gap-3 py-10">
        <div className='font-semibold text-[20px]'>
            Tin tức bất động sản
        </div>


        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            className='w-full'
        >
            <SwiperSlide className='min-h-full'>
                <div className='flex flex-col gap-3'>
                    <div className='min-w-[360px] min-h-[202px] rounded-md max-h-[202px]'>
                        <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765005606/center/vljims8ze0v2vhoejwzi.jpg"} width={360} height={202} className='h-full w-full rounded-md shadow object-cover object-center' alt='anh' />
                    </div>
                    <div className='font-semibold flex justify-center gap-3 cursor-pointer'>
                        <div className='text-[40px] text-gray-600 '>01</div>
                        <div className='text-[18px] text-gray-800 text-justify hover:text-gray-400'>{`Giá Chung Cư Đi Ngang, Lãi Suất Tăng: Nhà Đầu Tư Lướt Sóng Đứng Ngồi Không Yên`.slice(0, 72) + ' ...'}</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='min-h-full'>
                <div className='flex flex-col gap-3'>
                    <div className='min-w-[360px] min-h-[202px] rounded-md max-h-[202px]'>
                        <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765005606/center/vljims8ze0v2vhoejwzi.jpg"} width={360} height={202} className='h-full w-full rounded-md shadow object-cover object-center' alt='anh' />
                    </div>
                    <div className='font-semibold flex justify-center gap-3 cursor-pointer'>
                        <div className='text-[40px] text-gray-600 '>01</div>
                        <div className='text-[18px] text-gray-800 text-justify hover:text-gray-400'>{`Giá Chung Cư Đi Ngang, Lãi Suất Tăng: Nhà Đầu Tư Lướt Sóng Đứng Ngồi Không Yên`.slice(0, 72) + ' ...'}</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='min-h-full'>
                <div className='flex flex-col gap-3'>
                    <div className='min-w-[360px] min-h-[202px] rounded-md max-h-[202px]'>
                        <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765005606/center/vljims8ze0v2vhoejwzi.jpg"} width={360} height={202} className='h-full w-full rounded-md shadow object-cover object-center' alt='anh' />
                    </div>
                    <div className='font-semibold flex justify-center gap-3 cursor-pointer'>
                        <div className='text-[40px] text-gray-600 '>01</div>
                        <div className='text-[18px] text-gray-800 text-justify hover:text-gray-400'>{`Giá Chung Cư Đi Ngang, Lãi Suất Tăng: Nhà Đầu Tư Lướt Sóng Đứng Ngồi Không Yên`.slice(0, 72) + ' ...'}</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='min-h-full'>
                <div className='flex flex-col gap-3'>
                    <div className='min-w-[360px] min-h-[202px] rounded-md max-h-[202px]'>
                        <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1765005606/center/vljims8ze0v2vhoejwzi.jpg"} width={360} height={202} className='h-full w-full rounded-md shadow object-cover object-center' alt='anh' />
                    </div>
                    <div className='font-semibold flex justify-center gap-3 cursor-pointer'>
                        <div className='text-[40px] text-gray-600 '>01</div>
                        <div className='text-[18px] text-gray-800 text-justify hover:text-gray-400'>{`Giá Chung Cư Đi Ngang, Lãi Suất Tăng: Nhà Đầu Tư Lướt Sóng Đứng Ngồi Không Yên`.slice(0, 72) + ' ...'}</div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>


    </div>
};