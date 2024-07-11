import { getSheetsData } from "@/utils/getSheetData";
import Header from "@/components/layouts/Header";
import Subtitle from "@/components/elements/Subtitle";
import EventPeriod from "@/components/elements/EventPeriod";
import NewsButton from "@/components/elements/NewsButton";
import MainButton from "@/components/elements/MainButton";

// データの型定義
interface EventData {
    [key: number]: string;
}

interface NewsData {
    [key: number]: string;
}

const Shirakawa = async () => {
    const data = await getSheetsData();
    const eventData = data[0];
    const newsData = data[1];

    return (
        <>
            <Header title="Demo: Shirakawa Festival" />
            <div className="bg-teal-500 pt-20">
                <img
                    className="mx-auto mt-8 w-4/5 h-80 justify-center rounded-lg bg-white"
                    src={eventData[1] ? eventData[1][3] : ''}
                    alt="Festival Image"
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
                        />
                    ))}
                </div>
            </div>
            <div className="bg-white py-12">
                <Subtitle subtitle="NEWS" color="black" />
                <div className="mt-12">
                    {newsData.slice(1).map((news, index) => (
                        <NewsButton
                            key={index}
                            type={news[0]}
                            fulldate={news[1]}
                            title={news[2]}
                        />
                    ))}
                </div>
                <div className="mt-12">
                    <MainButton title="News一覧はコチラ" url="" />
                </div>
            </div>
            <div className="bg-teal-500 py-12">
                <Subtitle subtitle="アクセス" color="white" />
                <img className="mx-auto mt-8 w-4/5 h-80 justify-center rounded-md bg-white" />
                <div className="mt-12">
                    <MainButton title="アクセスの詳細はコチラ" url="shirakawa/access" />
                </div>
            </div>
            <div className="bg-white py-12">
                <Subtitle subtitle="白川まつりについて" color="" />
                <div className="cursor-pointer">
                    <img className="mx-auto mt-8 w-4/5 h-48 justify-center rounded-md bg-slate-300" />
                    <p className="text-xl font-semibold text-center pr-36 mt-3">白川まつりの歴史</p>
                </div>
                <div className="cursor-pointer">
                    <img className="mx-auto mt-8 w-4/5 h-48 justify-center rounded-md bg-slate-300" />
                    <p className="text-xl font-semibold text-center pr-36 mt-3">白川まつりの概要</p>
                </div>
            </div>
        </>
    );
};

export default Shirakawa;
