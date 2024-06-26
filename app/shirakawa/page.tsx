import Header from "@/components/layouts/Header";
import Subtitle from "@/components/elements/Subtitle";
import EventPeriod from "@/components/elements/EventPeriod";

export default function Shirakawa() {
    return (
        <>
            <Header />
            <div className="h-screen bg-teal-400 pt-20">
                <img className="mx-auto my-8 w-5/6 h-3/5 justify-center rounded-lg bg-white" />
                <Subtitle subtitle="開催期間" color="white" />
                <EventPeriod festival="白川まつり" stDate="7.12" stDayOfWeek="Fri" endDate="7.14" endDayOfWeek="Sun" />
            </div>
            <div className="h-screen bg-white">
                <Subtitle subtitle="NEWS" color="black" />
            </div>
        </>
    )
}
