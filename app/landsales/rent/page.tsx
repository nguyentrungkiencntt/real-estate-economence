'use client';
import AlterEstate from "@/components/ItemComponents/AlterEstate";
import AlterEstateTopic from "@/components/ItemComponents/AlterEstateTopic";
import LandEstate from "@/components/ItemComponents/LandEstate";
import SearchEstate from "@/components/ItemComponents/SearchEstate";

export default function Page() {
    return <div className="my-5 w-[60%] m-auto">
        <SearchEstate type="rent" />
        <AlterEstate type="rent" />
        <div className="flex gap-2">
            <div className="w-[75%] text-[12px] flex flex-col gap-3 my-3">
                <div className="flex gap-2 items-center">
                    <div className="flex text-gray-400">
                        Bán
                    </div>
                    {`>`}
                    <div className="font-semibold">
                        Tất cả BĐS trên toàn quốc
                    </div>
                </div>
                <LandEstate countNews={216433} title="Cho thuê nhà đất trên toàn quốc" type="rent" />
            </div>
            <AlterEstateTopic type="rent" />
        </div>
    </div>
}