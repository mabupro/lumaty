import Header from "@/components/layouts/Header";
import Subtitle from "@/components/elements/Subtitle";
import EventPeriod from "@/components/elements/EventPeriod";
import NewsButton from "@/components/elements/NewsButton";
import MainButton from "@/components/elements/MainButton";

export default function Shirakawa() {
    return (
        <>
            <Header title="Demo: Shirakawa Festival" />
            <div className=" bg-teal-500 pt-20">
                <img className="mx-auto mt-8 w-4/5 h-80 justify-center rounded-lg bg-white" />
                <div className="mt-8 pb-3">
                    <Subtitle subtitle="開催期間" color="white" />
                    <EventPeriod festival="白川まつり" stDate="7.12" stDayOfWeek="Fri" endDate="7.14" endDayOfWeek="Sun" />
                </div>
            </div>
            <div className=" bg-white py-12">
                <Subtitle subtitle="NEWS" color="black" />
                <div className="mt-12">
                    <NewsButton type="notice" fulldate="2024.5.17" title="神輿があああああああああああ" />
                    <NewsButton type="important" fulldate="2024.5.17" title="神輿" />
                    <NewsButton type="notice" fulldate="2024.5.17" title="神輿" />
                </div>
                <div className="mt-12">
                    <MainButton title="News一覧はコチラ" />
                </div>
            </div>
            <div className="bg-teal-500 py-12">
                <Subtitle subtitle="アクセス" color="white" />
                <img className="mx-auto mt-8 w-4/5 h-80 justify-center rounded-md bg-white" />
                <div className="mt-12">
                    <MainButton title="アクセスの詳細はコチラ" />
                </div>
            </div>
            <div className="bg-white py-12">
                <Subtitle subtitle="白川まつりについて" color="" />
                <div className=" cursor-pointer">
                    <img className="mx-auto mt-8 w-4/5 h-48 justify-center rounded-md bg-slate-300" />
                    <p className=" text-xl font-semibold text-center pr-36 mt-3  ">白川まつりの歴史</p>
                </div>
                <div className=" cursor-pointer">
                    <img className="mx-auto mt-8 w-4/5 h-48 justify-center rounded-md bg-slate-300" />
                    <p className=" text-xl font-semibold text-center pr-36 mt-3 ">白川まつりの概要</p>
                </div>
            </div>
        </>
    );
}

