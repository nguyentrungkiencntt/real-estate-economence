'use client';
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import NewsRealEstate from "@/components/partials/NewsRealEstate";
import RealEstateAdvertisement from "@/components/partials/RealEstateAdvertisement";
import RealEstateEnterprise from "@/components/partials/RealEstateEnterprise";
import RealEstateFooter from "@/components/partials/RealEstateFooter";
import RealEstateLocation from "@/components/partials/RealEstateLocation";
import RealEstatePopular from "@/components/partials/RealEstatePopular";
import { useState } from "react";
import { icons } from "@/utils/icons";
import Image from "next/image";
const { FaArrowRight, WiTime3 } = icons;
const toolNews = [
  {
    id: 0,
    name: 'Tin nổi bật',
  },
  {
    id: 1,
    name: 'Tin tức',
  },
  {
    id: 2,
    name: 'BĐS TPHCM',
  },
  {
    id: 3,
    name: 'BĐS Hà Nội',
  },
]

export default function Home() {

  const [newsChoice, setNewsChoice] = useState<{ id: number }>({ id: 0 });

  const handdleNewsChoice = (index: number) => {
    setNewsChoice({ id: index });
  }

  return (
    <div className="flex flex-col">
      <div className="border-b">
        <Header />
      </div>
      <RealEstateAdvertisement />
      <main className="bg-white w-[80%] m-auto py-10">
        <header className="flex justify-between items-center border-b">
          <ul className="flex items-center text-[18px] font-semibold">
            {toolNews?.map((item, index) => {
              return <li key={index} onClick={() => handdleNewsChoice(index)} className={`px-4 py-2 cursor-pointer ${newsChoice.id === index ? 'text-blue-600 border-b-2 border-b-blue-600' : 'text-gray-400'}`}>{item?.name}</li>
            })}
          </ul>
          <div className="text-[16px] cursor-pointer flex items-center gap-2 text-blue-500">Xem thêm <FaArrowRight size={16} /></div>
        </header>
        <main className="my-3 flex gap-6">
          <div className="grid grid-cols-2 gap-6 w-[80%]">
            <div className="w-full flex flex-col gap-3">
              <div className="min-h-[300px] max-h-[300px]">
                <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1764784916/center/rmwbuz8edhxasl4cz6mg.jpg"} alt="anh" width={1000} height={200} className="object-cover object-center h-full w-full rounded-md" />
              </div>
              <div className="text-justify font-semibold text-[20px] cursor-pointer hover:text-gray-500">
                Dân Số Già Thúc Đẩy Bất Động Sản Dưỡng Lão Phát Triển
              </div>
              <div className="text-[12px] font-semibold flex items-center gap-1 text-gray-300">
                <WiTime3 size={16} />
                12 ngày trước
              </div>
            </div>
            <ul className="flex flex-col">
              <li className="py-2 border-b hover:text-gray-500 cursor-pointer">
                Nguồn Cung Nhà Ở Xã Hội TP.HCM Tăng Trong Bối Cảnh Giá Nhà Lập Đỉnh
              </li>
              <li className="py-2 border-b hover:text-gray-500 cursor-pointer">
                Thị Trường Bất Động Sản Phía Nam: Dự Án Mới Rầm Rộ Bung Hàng Cuối Năm
              </li>
              <li className="py-2 border-b hover:text-gray-500 cursor-pointer">
                Nguồn Cung Nhà Ở Xã Hội TP.HCM Tăng Trong Bối Cảnh Giá Nhà Lập Đỉnh
              </li>
              <li className="py-2 border-b hover:text-gray-500 cursor-pointer">
                Nguồn Cung Nhà Ở Xã Hội TP.HCM Tăng Trong Bối Cảnh Giá Nhà Lập Đỉnh
              </li>
              <li className="py-2 border-b hover:text-gray-500 cursor-pointer">
                Nguồn Cung Nhà Ở Xã Hội TP.HCM Tăng Trong Bối Cảnh Giá Nhà Lập Đỉnh
              </li>
            </ul>
          </div>
          <div className="w-[20%] flex flex-col gap-2">
            <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1764784916/center/rmwbuz8edhxasl4cz6mg.jpg"} width={200} height={300} className="object-cover object-center h-full w-full" alt="logo" />
            <Image src={"https://res.cloudinary.com/dp6cr7ea5/image/upload/v1764784916/center/rmwbuz8edhxasl4cz6mg.jpg"} width={200} height={300} className="object-cover object-center h-full w-full" alt="logo" />
          </div>
        </main>
      </main>
      <RealEstatePopular />
      <RealEstateEnterprise />
      <RealEstateLocation />
      <NewsRealEstate />
      <RealEstateFooter />
      <Footer />
    </div>
  );
}
