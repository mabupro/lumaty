import { getSheetsData } from "@/utils/getSheetData";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import Header from "@/components/layouts/Header"
import Subtitle from "@/components/elements/Subtitle"
import NewsButton from "@/components/elements/NewsButton"

// データの型定義
interface NewsData {
    [key: number]: string;
}

export default async function News() {

    const data = await getSheetsData();
    const newsData = data[1];

    return (
        <>
            <Header title="Demo: Suito Festival" />
            <div className="pt-28 px-5">
                <Link href={"/[maturi]"} className="flex">
                    <FiChevronLeft size={30} color="#666" />
                    <p className="text-lg font-semibold text-[#666]">戻る</p>
                </Link>
            </div>
            <div className="">
                <Subtitle subtitle="NEWS一覧" color="" />
            </div>
            <div className="mt-12"> 
                    {newsData.slice(1).map((news, index) => (
                        <NewsButton
                            key={index}
                            type={news[0]}
                            fulldate={news[1]}
                            title={news[2]}
                            index={index + 1}
                        />
                    ))}
                </div>
        </>
    )
}