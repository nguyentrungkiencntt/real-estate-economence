'use client';
import { Button } from "@/components/ui/button";
import { icons } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
const { TiArrowRight, FaImage, IoLocationOutline, IoMdHeartEmpty, FiArrowDown } = icons;

export default function RealEstatePopular() {
  return <div className="bg-[#FAFAFA] py-10">
    <div className="flex flex-col gap-3 w-[80%] m-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold text-[20px]">
          Bất động sản dành cho bạn
        </div>
        <div className="text-[14px] flex h-full items-center gap-2">
          <div className="hover:text-gray-500 cursor-pointer">Tin nhà đất mới bán</div>
          <div className="h-full rounded-md"><TiArrowRight size={14} /></div>
          <div className="hover:text-gray-500 cursor-pointer">Tin nhà đất cho thuê mới nhất</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <div className="flex flex-col bg-white shadow-xl rounded-md">
          <div className="min-h-[162px] max-h-[162px] overflow-hidden relative">
            <Image src={"https://file4.batdongsan.com.vn/crop/393x222/2025/08/21/20250821234831-d4de_wm.jpg"} className="object-cover object-center h-full w-full rounded-tl-md rounded-tr-md" height={162} width={300} alt="logo" />
            <div className="absolute text-white bottom-2.5 right-2.5 flex items-center gap-2">
              <FaImage size={18} />
              <div>3</div>
            </div>
          </div>
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link href={'/'}>
              <div className="flex items-center hover:text-gray-400 gap-2 font-semibold text-justify">
                {'Bán CC 2PN, 1WC tại Sài Đồng, Long Biên, Hà Nội, 1.3 tỷ, 12m2, view đẹp, giá tốt'.slice(0, 60) + ' ...'}
              </div>
            </Link>
            <div className="font-semibold flex text-blue-500 items-center gap-5">
              <div>1,69 tỷ</div>
              <div>122 m2</div>
            </div>
            <div className="flex items-center gap-2 text-[12px]">
              <IoLocationOutline size={18} />
              <div>Long Biên, Hà Nội</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-gray-300 font-semibold italic text-[12px]">
                Đăng hôm qua
              </div>
              <div className="border rounded-md p-2 hover:bg-gray-300 cursor-pointer">
                <IoMdHeartEmpty size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white shadow-xl rounded-md">
          <div className="min-h-[162px] max-h-[162px] overflow-hidden relative">
            <Image src={"https://file4.batdongsan.com.vn/crop/393x222/2025/08/21/20250821234831-d4de_wm.jpg"} className="object-cover object-center h-full w-full rounded-tl-md rounded-tr-md" height={162} width={300} alt="logo" />
            <div className="absolute text-white bottom-2.5 right-2.5 flex items-center gap-2">
              <FaImage size={18} />
              <div>3</div>
            </div>
          </div>
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link href={'/'}>
              <div className="flex items-center hover:text-gray-400 gap-2 font-semibold text-justify">
                {'Bán CC 2PN, 1WC tại Sài Đồng, Long Biên, Hà Nội, 1.3 tỷ, 12m2, view đẹp, giá tốt'.slice(0, 60) + ' ...'}
              </div>
            </Link>
            <div className="font-semibold flex text-blue-500 items-center gap-5">
              <div>1,69 tỷ</div>
              <div>122 m2</div>
            </div>
            <div className="flex items-center gap-2 text-[12px]">
              <IoLocationOutline size={18} />
              <div>Long Biên, Hà Nội</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-gray-300 font-semibold italic text-[12px]">
                Đăng hôm qua
              </div>
              <div className="border rounded-md p-2 hover:bg-gray-300 cursor-pointer">
                <IoMdHeartEmpty size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white shadow-xl rounded-md">
          <div className="min-h-[162px] max-h-[162px] overflow-hidden relative">
            <Image src={"https://file4.batdongsan.com.vn/crop/393x222/2025/08/21/20250821234831-d4de_wm.jpg"} className="object-cover object-center h-full w-full rounded-tl-md rounded-tr-md" height={162} width={300} alt="logo" />
            <div className="absolute text-white bottom-2.5 right-2.5 flex items-center gap-2">
              <FaImage size={18} />
              <div>3</div>
            </div>
          </div>
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link href={'/'}>
              <div className="flex items-center hover:text-gray-400 gap-2 font-semibold text-justify">
                {'Bán CC 2PN, 1WC tại Sài Đồng, Long Biên, Hà Nội, 1.3 tỷ, 12m2, view đẹp, giá tốt'.slice(0, 60) + ' ...'}
              </div>
            </Link>
            <div className="font-semibold flex text-blue-500 items-center gap-5">
              <div>1,69 tỷ</div>
              <div>122 m2</div>
            </div>
            <div className="flex items-center gap-2 text-[12px]">
              <IoLocationOutline size={18} />
              <div>Long Biên, Hà Nội</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-gray-300 font-semibold italic text-[12px]">
                Đăng hôm qua
              </div>
              <div className="border rounded-md p-2 hover:bg-gray-300 cursor-pointer">
                <IoMdHeartEmpty size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white shadow-xl rounded-md">
          <div className="min-h-[162px] max-h-[162px] overflow-hidden relative">
            <Image src={"https://file4.batdongsan.com.vn/crop/393x222/2025/08/21/20250821234831-d4de_wm.jpg"} className="object-cover object-center h-full w-full rounded-tl-md rounded-tr-md" height={162} width={300} alt="logo" />
            <div className="absolute text-white bottom-2.5 right-2.5 flex items-center gap-2">
              <FaImage size={18} />
              <div>3</div>
            </div>
          </div>
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link href={'/'}>
              <div className="flex items-center hover:text-gray-400 gap-2 font-semibold text-justify">
                {'Bán CC 2PN, 1WC tại Sài Đồng, Long Biên, Hà Nội, 1.3 tỷ, 12m2, view đẹp, giá tốt'.slice(0, 60) + ' ...'}
              </div>
            </Link>
            <div className="font-semibold flex text-blue-500 items-center gap-5">
              <div>1,69 tỷ</div>
              <div>122 m2</div>
            </div>
            <div className="flex items-center gap-2 text-[12px]">
              <IoLocationOutline size={18} />
              <div>Long Biên, Hà Nội</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-gray-300 font-semibold italic text-[12px]">
                Đăng hôm qua
              </div>
              <div className="border rounded-md p-2 hover:bg-gray-300 cursor-pointer">
                <IoMdHeartEmpty size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white shadow-xl rounded-md">
          <div className="min-h-[162px] max-h-[162px] overflow-hidden relative">
            <Image src={"https://file4.batdongsan.com.vn/crop/393x222/2025/08/21/20250821234831-d4de_wm.jpg"} className="object-cover object-center h-full w-full rounded-tl-md rounded-tr-md" height={162} width={300} alt="logo" />
            <div className="absolute text-white bottom-2.5 right-2.5 flex items-center gap-2">
              <FaImage size={18} />
              <div>3</div>
            </div>
          </div>
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link href={'/'}>
              <div className="flex items-center hover:text-gray-400 gap-2 font-semibold text-justify">
                {'Bán CC 2PN, 1WC tại Sài Đồng, Long Biên, Hà Nội, 1.3 tỷ, 12m2, view đẹp, giá tốt'.slice(0, 60) + ' ...'}
              </div>
            </Link>
            <div className="font-semibold flex text-blue-500 items-center gap-5">
              <div>1,69 tỷ</div>
              <div>122 m2</div>
            </div>
            <div className="flex items-center gap-2 text-[12px]">
              <IoLocationOutline size={18} />
              <div>Long Biên, Hà Nội</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-gray-300 font-semibold italic text-[12px]">
                Đăng hôm qua
              </div>
              <div className="border rounded-md p-2 hover:bg-gray-300 cursor-pointer">
                <IoMdHeartEmpty size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button className="bg-blue-500 hover:bg-blue-400 cursor-pointer flex gap-2 items-center">
          <FiArrowDown size={18} />
          Mở rộng
        </Button>
      </div>
    </div>
  </div>
};