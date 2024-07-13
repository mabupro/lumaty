import Link from "next/link"
import { FiChevronRight } from "react-icons/fi"

type Props = {
    type: '重要' | 'お知らせ'
    fulldate: string
    title: string
    index: number
};

export default function NewsButton({ type, fulldate, title, index }: Props) {
    return (
        <>
            <Link href={`/shirakawa/news/${index}`}>
                <div className="cursor-pointer mx-16 mt-6">
                    <div className="flex gap-4">
                        <div className={`${type === '重要' ? 'bg-red-400' : 'bg-amber-300'} w-28 rounded-sm`}>
                            <p className="text-white font-semibold text-center">{type === '重要' ? '重要' : 'お知らせ'}</p>
                        </div>
                        <p className="font-bold tracking-wider text-gray-400">{fulldate}</p>
                    </div>
                    <div className="px-2 mt-2 flex">
                        <p className="font-bold tracking-wider text-2xl">{title}</p>
                        <div className="ml-auto pt-9">
                            <FiChevronRight size={30} color="" />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
