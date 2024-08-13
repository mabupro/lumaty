import { Lalezar } from "next/font/google";
import HumbergerButton from "../elements/HumbergerButton";
import Image from "next/image";

const LalezarFont = Lalezar({
    weight: "400",
    subsets: ["latin"],
});

type Props = {
    title: string;
};

export default function Header({ title }: Props) {
    return (
        <div className="fixed top-0 left-0 w-full shadow-md rounded-b-lg bg-white z-50">
            <div className="relative flex justify-between">
                <div className="pt-4 pb-3 px-6 gap-3 flex">
                    <Image
                        className="h-10"
                        src="/images/logo.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        loading="lazy"
                    />
                    <div className="text-xl py-2 text-gray-700">
                        <p className={LalezarFont.className}>{title}</p>
                    </div>
                </div>
                <div className="my-auto mx-6 pt-1">
                    <HumbergerButton />
                </div>
            </div>
        </div>
    );
}
