import Link from "next/link";
import { getSheetsData } from "@/utils/getSheetData"
import { FiChevronLeft } from "react-icons/fi";
import Header from "@/components/layouts/Header"
import Subtitle from "@/components/elements/Subtitle"
import NewsButton from "@/components/elements/NewsButton";

export default async function Page({ params }: { params: { newsId: string } }) {

    const data = await getSheetsData()
    const newsData = data[1]

    // URLのパラーメータを使用できるように変換
    const newsId = parseInt(params.newsId, 10)

    return (
        <>
            <Header title="Demo: Shirakawa Festival" />
            <div className="pt-28 px-5">
                <Link href={"/shirakawa/news"} className="flex">
                    <FiChevronLeft size={30} color="#666" />
                    <p className="text-lg font-semibold text-[#666]">戻る</p>
                </Link>
            </div>
            <div className="mt-10">
                <Subtitle subtitle="NEWS" color="" />
            </div>
            {newsData &&
                <div className="mx-8 mt-16">
                    <p className="text-lg font-bold text-gray-700">{newsData[newsId][2]}</p>
                    <div className="flex gap-6">
                        <p className="text-sm  text-slate-400 ">{newsData[newsId][1]}</p>
                        <div className={`${newsData[newsId][1] === '重要' ? 'bg-red-400' : 'bg-amber-300'} w-28 rounded-sm`}>
                            <p className="text-white text-sm font-semibold text-center ">{newsData[newsId][1] === '重要' ? '重要' : 'お知らせ'}</p>
                        </div>
                    </div>
                    <hr className="my-4 h-1 bg-slate-300 mx-auto rounded" />
                    <p className="text-sm text-gray-700">{newsData[newsId][3]}</p>
                </div>             
            }
        </>
    )
}