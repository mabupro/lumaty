import { getSheetsData } from "@/utils/getSheetData"
import Header from "@/components/layouts/Header"
import Subtitle from "@/components/elements/Subtitle"
import EventPeriod from "@/components/elements/EventPeriod"
import NewsButton from "@/components/elements/NewsButton"
import MainButton from "@/components/elements/MainButton"
// import GoogleMap from "@/components/elements/GoogleMap"
import Image from "next/image"

// データの型定義
interface EventData {
    [key: number]: string
}
interface NewsData {
    [key: number]: string
}

const formatDriveUrl = (url: string) => {
    if (!url) return ''

    // https://zenn.dev/collabostyle/articles/2060bfc3fd68be 解決方法
    const fileIdMatch = url.match(/(?<=id=)[-\w]{25,}/)
    return fileIdMatch ? `https://lh3.googleusercontent.com/d/${fileIdMatch[0]}` : url
}

export default async function Maturi({ params }: { params: { maturi: string } }) {
    let data
    try {
        data = await getSheetsData()
    } catch (error) {
        console.error('Failed to fetch sheets data:', error)
        // エラーハンドリング
        return <div>Error loading data. Please try again later.</div>
    }
    const eventData = data[0]
    const newsData = data[1]

    // TODO: データが存在する時だけ表示したい
    if (params.maturi === "Suito") {
        return (
            <>
                {/* TODO: Header名を動的にしたい */}
                <Header title="Demo: Suito Festival" />
                <div className="bg-teal-500 pt-20">
                    <Image
                        className="mx-auto mt-8 w-4/5 h-72 justify-center rounded-2xl bg-white"
                        src={eventData[1] ? formatDriveUrl(eventData[1][3]) : ''} // Provide a default image path
                        alt="Festival Image"
                        width={400}
                        height={200}
                    />
                    <div className="mt-8 pb-3">
                        <Subtitle subtitle="開催期間" color="white" />
                        {eventData.slice(1).map((event, index) => (
                            <EventPeriod
                                key={index}
                                festival={event[0]}
                                stDate={event[1]}
                                stDayOfWeek={event[4]}
                                endDate={event[2]}
                                endDayOfWeek={event[5]}
                                index={index + 1}
                            />
                        ))}
                    </div>
                </div>
                <div className="bg-white py-12">
                    <Subtitle subtitle="NEWS" color="black" />
                    <div className="mt-12">
                        {newsData.slice(1, 4).map((news, index) => (
                            <NewsButton
                                key={index}
                                type={news[0]}
                                fulldate={news[1]}
                                title={news[2]}
                                index={index + 1}
                            />
                        ))}
                    </div>
                    <div className="mt-12">
                        {/* TODO: urlを動的にしたい */}
                        <MainButton title="News一覧はコチラ" url="Suito/news" />
                    </div>
                </div>
                <div className="bg-teal-500 py-12">
                    <Subtitle subtitle="アクセス" color="white" />
                    <div className="mx-auto mt-8 w-80 h-80 justify-center rounded-md bg-slate-300">
                        {/* <GoogleMap /> */}
                    </div>
                    <div className="mt-12">
                        {/* TODO: urlを動的にしたい */}
                        <MainButton title="アクセスの詳細はコチラ" url="Suito/access" />
                    </div>
                </div>
                <div className="bg-white py-12">
                    <Subtitle subtitle="まつりについて" color="" />
                    {/* TODO: 必要かどうかや、名前も動的にしたい */}
                    <div className="cursor-pointer">
                        <Image className="mx-auto mt-8 w-4/5 h-48 justify-center rounded-md bg-slate-300" alt="祭りの歴史" src="/images/640x360.png" width={640} height={360} />
                        <p className="text-xl font-semibold text-center pr-36 mt-3 text-gray-700">水都まつりの歴史</p>
                    </div>
                    {/* TODO: 必要かどうかや、名前も動的にしたい */}
                    <div className="cursor-pointer">
                        <Image className="mx-auto mt-8 w-4/5 h-48 justify-center rounded-md bg-slate-300" alt="祭りの概要" src="/images/640x360.png" width={640} height={360} />
                        <p className="text-xl font-semibold text-center pr-36 mt-3 text-gray-700">水都まつりの概要</p>
                    </div>
                </div>
            </>
        )
    }
}
