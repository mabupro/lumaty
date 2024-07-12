import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import Header from "@/components/layouts/Header"
import Subtitle from "@/components/elements/Subtitle"
import MapMenuButton from "@/components/elements/MapMenuButton"

export default function News() {

    return (
        <>
            <Header title="Demo: Shirakawa Festival" />
            <div className="pt-28 px-5">
                <Link href={"/shirakawa"} className="flex">
                    <FiChevronLeft size={30} color="#666" />
                    <p className="text-lg font-semibold text-[#666]">戻る</p>
                </Link>
            </div>
            <div className="">
                <Subtitle subtitle="NEWS" color="" />
            </div>
        </>
    )
}