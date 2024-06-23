import { Lalezar } from "next/font/google"
import HumbergerButton from "../elements/HumbergerButton"

const LalezarFont = Lalezar({
    weight: "400",
    subsets: ["latin"],
})

export default function Header() {
    return (
        <>
            <div className="relative flex rounded-b-lg w-full shadow-md justify-between bg-white">
                <div className="pt-4 pb-3 px-6 gap-3 flex">
                    <img className=" h-10" src="/images/logo.png" alt="Logo" loading="lazy" />
                    <div className="text-xl py-2">
                        <p className={LalezarFont.className}>LUMATY</p>
                    </div>
                </div>
                <div className="my-auto mx-6 pt-1">
                    <HumbergerButton />
                </div>
            </div>
        </>
    )
}