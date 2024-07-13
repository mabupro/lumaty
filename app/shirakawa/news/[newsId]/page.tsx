import Header from "@/components/layouts/Header"
import Subtitle from "@/components/elements/Subtitle"

export default function Page({ params }: { params: { newsId: number } }) {
    return (
        <>
            <Header title="Demo: Shirakawa Festival" />
            <div className="mt-32">
                <Subtitle subtitle="あああ" color="" />
            </div>         
        </>
    )
}