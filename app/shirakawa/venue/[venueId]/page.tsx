import Link from "next/link";
import { getSheetsData } from "@/utils/getSheetData"
import { FiChevronLeft } from "react-icons/fi";
import Header from "@/components/layouts/Header"
import Subtitle from "@/components/elements/Subtitle"

export default async function Page({ params }: { params: { venueId: string } }) {
    const data = await getSheetsData()
    const eventData = data[0]

    // URLのパラーメータを使用できるように変換
    const venueId = parseInt(params.venueId, 10)

    return (
        <>
            <Header title="Demo: Shirakawa Festival" />
            <div className="pt-28 px-5">
                <Link href={"/shirakawa"} className="flex">
                    <FiChevronLeft size={30} color="#666" />
                    <p className="text-lg font-semibold text-[#666]">戻る</p>
                </Link>
            </div>
            <div className="mt-10">
                {eventData && eventData[venueId] && <Subtitle subtitle={eventData[venueId][0]} color="" />}
            </div>
            <div className="w-4/5 h-40 mx-auto mt-16 rounded-md bg-slate-200">
                
            </div>
        </>
    )
}
