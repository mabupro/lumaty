import { Lalezar } from "next/font/google"
import HumbergerButton from "../elements/HumbergerButton"

const LalezarFont = Lalezar({
    weight: "400",
    subsets: ["latin"],
})

export default function Header() {
    return (
        <div className="fixed top-0 left-0 w-full shadow-md rounded-b-lg bg-white z-50">
            <div className="relative flex justify-between">
                <div className="pt-4 pb-3 px-6 gap-3 flex">
                    <img className="h-10" src="/images/logo.png" alt="Logo" loading="lazy" />
                    <div className="text-xl py-2 text-[#333333]">
                        <p className={LalezarFont.className}>LUMATY</p>
                    </div>
                </div>
                <div className="my-auto mx-6 pt-1">
                    <HumbergerButton />
                </div>
            </div>
        </div>
    )
}
