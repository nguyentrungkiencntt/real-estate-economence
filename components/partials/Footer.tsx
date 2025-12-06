'use client';
import { icons } from "@/utils/icons";
const { LuPhoneCall, MdSupportAgent, MdOutlineContactSupport, FaLocationDot, BsSendFill } = icons;
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import { Input } from "@/components/ui/input";
const frameworks = [
  {
    value: "vn",
    label: "Việt Nam",
  },
  {
    value: "jn",
    label: "Nhật Bản",
  },
  {
    value: "us",
    label: "Mỹ",
  },
  {
    value: "fr",
    label: "Pháp",
  },
  {
    value: "ucs",
    label: "Australia",
  },
]

export default function Footer() {

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return <footer className="bg-[#f2f2f2] py-6">
    <div className="w-[90%] flex flex-col gap-6 m-auto">
      <div className="grid grid-cols-4 gap-4">
        <div className="min-h-20">
          <Image src={"https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"} alt="logo" width={200} height={80} className="object-cover object-center w-full h-20" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <div>
            <LuPhoneCall size={20} />
          </div>
          <div className="flex flex-col">
            <div className="text-gray-300 text-[12px]">Hotline</div>
            <div className="font-semibold text-[13px]">0336099317</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div>
            <MdOutlineContactSupport size={20} />
          </div>
          <div className="flex flex-col">
            <div className="text-gray-300 text-[12px]">Hỗ trợ khách hàng</div>
            <div className="font-semibold text-[13px]">hotro.batdongsan.com.vn</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div>
            <MdSupportAgent size={20} />
          </div>
          <div className="flex flex-col">
            <div className="text-gray-300 text-[12px]">Chăm sóc khách hàng</div>
            <div className="font-semibold text-[13px]">nguyenkiencnttltv@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="grid border-b pb-10 border-t pt-10 grid-cols-3 gap-2.5">
        <div className="flex flex-col gap-2">
          <div className="uppercase font-semibold">CÔNG TY CỔ PHẦN PROPERTYGURU VIỆT NAM</div>
          <ul className="flex flex-col gap-1">
            <Link href={"/"}>
              <li className="flex gap-2.5">
                <div className="mt-2"><FaLocationDot size={18} /></div>
                <div className="font-semibold text-justify">Tầng 31, Keangnam Hanoi Landmark Tower, Phường Yên Hòa, Thành phố Hà Nội, Việt Nam</div>
              </li>
            </Link>
            <Link href={"/"}>
              <li className="flex items-center gap-2.5">
                <div className="mt-2"><LuPhoneCall size={18} /></div>
                <div className="font-semibold text-justify">0336099317 - 0386800231</div>
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-2 ml-40">
          <div className="uppercase font-semibold">Hướng dẫn</div>
          <ul className="flex flex-col gap-1 text-[14px]">
            <Link href={"/"}>
              <li>
                Về chúng tôi
              </li>
            </Link>
            <Link href={"/"}>
              <li>
                Báo giá & hỗ trợ
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="uppercase font-semibold">Quy định</div>
          <ul className="flex flex-col gap-1 text-[14px]">
            <Link href={"/"}>
              <li>
                Quy định đăng tin
              </li>
            </Link>
            <Link href={"/"}>
              <li>
                Quy chế hoạt động
              </li>
            </Link>
            <Link href={"/"}>
              <li>
                Điều khoản thoả thuận
              </li>
            </Link>
            <Link href={"/"}>
              <li>
                Chính sách & bảo mật
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex gap-3 w-full items-center justify-between border-b pb-10">
        <div className="flex flex-col gap-2">
          <div className="uppercase font-semibold">Đăng ký nhận tin</div>
          <div className="flex relative items-center gap-2">
            <Input className="pr-10 outline-none px-4 py-2 border text-gray-600 rounded-md min-w-[400px]" placeholder="Nhập email nhận tin ..." spellCheck={false} />
            <button className="absolute px-3 py-2 cursor-pointer hover:bg-amber-400 rounded-md text-white right-0 mr-2 bg-amber-500"><BsSendFill size={13} /></button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Quốc gia & Ngôn ngữ</div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)?.label
                  : "Chọn quốc gia"}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Tìm quốc gia..." className="h-9" />
                <CommandList>
                  <CommandEmpty>Không có quốc gia nào được tìm thấy.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue)
                          setOpen(false)
                        }}
                      >
                        {framework.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            value === framework.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex items-center justify-center text-[12px] text-gray-700 italic">
            Copyright by Nguyễn Trung Kiên 2025 - {new Date().getFullYear()}
      </div>
    </div>
  </footer>
}