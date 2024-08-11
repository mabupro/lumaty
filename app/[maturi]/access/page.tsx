import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import Header from "@/components/layouts/Header"
import Subtitle from "@/components/elements/Subtitle"
import MapMenuButton from "@/components/elements/MapMenuButton"
import GoogleMap from "@/components/elements/GoogleMap";

export default function Access() {

    return (
        <>
            <Header title="Demo: Suito Festival" />
            <div className="pt-28 px-5">
                <Link href={"/maturi"} className="flex">
                    <FiChevronLeft size={30} color="#666" />
                    <p className="text-lg font-semibold text-[#666]">戻る</p>
                </Link>
            </div>
            <div className="">
                <Subtitle subtitle="アクセス" color="" />
            </div>
            <div className="mx-auto mt-8 w-80 h-80 justify-center rounded-md bg-slate-300">
                <GoogleMap />
            </div>
            <div className="my-2 p-10 ">
                <div className="grid grid-cols-3 gap-3">
                    <MapMenuButton menuTitle="駐車場" />
                    <MapMenuButton menuTitle="トイレ" />
                    <MapMenuButton menuTitle="避難場所" />
                    <MapMenuButton menuTitle="駐車場" />
                    <MapMenuButton menuTitle="駐車場" />
                    <MapMenuButton menuTitle="駐車場" />
                </div>
            </div>
        </>
    )
}