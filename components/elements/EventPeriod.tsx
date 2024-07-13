import Link from "next/link"
import { FiChevronRight } from "react-icons/fi"

type Props = {
    festival: string | null
    stDate: string | null
    stDayOfWeek: string | null
    endDate: string | null
    endDayOfWeek: string | null
    index: number
}

export default function EventPeriod({ festival, stDate, stDayOfWeek, endDate, endDayOfWeek, index }: Props) {
    return (
        <>
            <Link href={`/shirakawa/venue/${index}`}>
                <div className="relative border-2 border-slate-200 mx-auto my-12 w-5/6 h-32 justify-center rounded-lg bg-teal-500 cursor-pointer transition hover:opacity-60">
                    <div className="w-40 h-10 mx-auto -my-5 bg-teal-500">
                        <p className="pt-1 text-lg text-center font-semibold text-white">{festival}</p>
                    </div>
                    <div className="flex justify-center pt-7">
                        <p className="text-4xl sm:text-5xl font-semibold tracking-wider text-white">{stDate}</p>
                        <p className="pt-5 text-lg font-semibold tracking-wider text-white">[{stDayOfWeek}]</p>
                        <p className="px-2 pt-2 text-2xl font-semibold tracking-wider text-white">-</p>
                        <p className="text-4xl sm:text-5xl font-semibold tracking-wider text-white">{endDate}</p>
                        <p className="pt-5 text-lg font-semibold tracking-wider text-white">[{endDayOfWeek}]</p>
                    </div>
                    <div className="absolute right-4 bottom-2">
                        <FiChevronRight size={30} color="#fff" />
                    </div>
                </div>
            </Link>

        </>
    )
}
