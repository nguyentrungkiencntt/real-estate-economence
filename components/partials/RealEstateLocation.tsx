'use client';

export default function RealEstateLocation() {
    return <div className="w-[80%] m-auto flex flex-col gap-3">
        <div className="font-semibold text-[20px]">
            Bất động sản theo địa điểm
        </div>
        <div className="flex gap-2 min-h-[410px] max-h-[410px] justify-between w-full">
            <div className="flex-1 min-h-full rounded-md bg-gray-600">
                <div className="flex gap-1 flex-col text-white pt-5 pl-5">
                    <div className="font-semibold text-[22px] hover:text-gray-400 cursor-pointer">
                        TP. Hồ Chí Minh
                    </div>
                    <div>88.211 tin đăng</div>
                </div>
            </div>
            <div className="flex-0.5 grid grid-cols-2 gap-2">
                <div className="flex-0.5 grid grid-cols-1 gap-2">
                    <div className="min-w-[262px] max-w-[262px]  rounded-md shadow-2xs bg-gray-700">
                        <div className="flex gap-1 flex-col text-white pt-5 pl-5">
                            <div className="font-semibold text-[22px] hover:text-gray-400 cursor-pointer">
                                Hà Nội
                            </div>
                            <div>66.132 tin đăng</div>
                        </div>
                    </div>
                    <div className="min-w-[262px] max-w-[262px]  rounded-md shadow-2xs bg-gray-700">
                        <div className="flex gap-1 flex-col text-white pt-5 pl-5">
                            <div className="font-semibold text-[22px] hover:text-gray-400 cursor-pointer">
                                Bình Dương
                            </div>
                            <div>9.131 tin đăng</div>
                        </div>
                    </div>
                </div>
                <div className="flex-0.5 grid grid-cols-1 gap-2">
                    <div className="min-w-[262px] max-w-[262px]  rounded-md shadow-2xs bg-gray-700">
                        <div className="flex gap-1 flex-col text-white pt-5 pl-5">
                            <div className="font-semibold text-[22px] hover:text-gray-400 cursor-pointer">
                                Đà Nẵng
                            </div>
                            <div>10.588 tin đăng</div>
                        </div>
                    </div>
                    <div className="min-w-[262px] max-w-[262px]  rounded-md shadow-2xs bg-gray-700">
                        <div className="flex gap-1 flex-col text-white pt-5 pl-5">
                            <div className="font-semibold text-[22px] hover:text-gray-400 cursor-pointer">
                                Đồng Nai
                            </div>
                            <div>4.265 tin đăng</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="grid grid-cols-6 gap-2">
            <div className="px-4 cursor-pointer py-1 rounded-md text bg-[#F2F2F2] text-gray-900">
                Vinhomes Central Park
            </div>

        </div>
    </div>
}