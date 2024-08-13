import Link from "next/link"
import { getSheetsData } from "@/utils/getSheetData"
import { FiChevronLeft } from "react-icons/fi"
import Header from "@/components/layouts/Header"
import Subtitle from "@/components/elements/Subtitle"

export default async function Page({ params }: { params: { venueId: string } }) {
    let data
    try {
        data = await getSheetsData()
    } catch (error) {
        console.error('Failed to fetch sheets data:', error)
        // エラーハンドリング
        return <div>Error loading data. Please try again later.</div>
    }

    const eventData = data[0]
    const eventDetailData = [
        "本町一帯 ライトアップ装飾",
        "恐竜きぐるみレンタル",
        "木製遊具ゲームコーナー",
        "協賛セール",
        "割引券等のガチャガチャ"
    ]

    // URLのパラーメータを使用できるように変換
    const venueId = parseInt(params.venueId, 10)

    return (
        <>
            <Header title="Demo: Suito Festival" />
            <div className="pt-28 px-5">
                <Link href={`/Suito`} className="flex">
                    <FiChevronLeft size={30} color="#666" />
                    <p className="text-lg font-semibold text-[#666]">戻る</p>
                </Link>
            </div>
            <div className="mt-10 mx-10">
                {eventData && eventData[venueId] && <Subtitle subtitle={eventData[venueId][0]} color="" />}
            </div>
            <div className="w-4/5 h-40 mx-auto mt-10 rounded-md bg-slate-200">

            </div>
            <div className="mt-10 mx-10">
                {eventDetailData.map((eventDetail, index) => (
                    <p key={index}>{eventDetail}</p>
                ))}
            </div>
        </>
    )
}
