import Header from "@/components/layouts/Header"
import Subtitle from "@/components/elements/Subtitle"

export default function Page({ params }: { params: { venueId: number } }) {
    return (
        <>
            <Header title="Demo: Shirakawa Festival" />
            {/* TODO: Propsか何かで可変 */}
            <div className="mt-32">
                <Subtitle subtitle="あああ" color="" />
            </div>
        </>
    )
}