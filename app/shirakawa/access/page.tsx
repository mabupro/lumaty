import Header from "@/components/layouts/Header"
import Subtitle from "@/components/elements/Subtitle"
import MapMenuButton from "@/components/elements/MapMenuButton"

export default function Access() {
    return (
        <>
            <Header title="Demo: Shirakawa Festival" />
            <div className="pt-28">
                <Subtitle subtitle="アクセス" color="" />
            </div>
            <div className="mx-auto mt-8 w-80 h-80 justify-center rounded-md bg-slate-300">

            </div>
            <div className="my-2 p-10 ">
                <div className="grid grid-cols-3 gap-3">
                    <MapMenuButton menuTitle="駐車場" />
                    <MapMenuButton menuTitle="トイレ" />
                    <MapMenuButton menuTitle="駐車場" />
                    <MapMenuButton menuTitle="駐車場" />
                    <MapMenuButton menuTitle="駐車場" />
                    <MapMenuButton menuTitle="駐車場" />

                </div>
            </div>
        </>
    )
}