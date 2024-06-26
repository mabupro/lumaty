type Props = {
    subtitle: string | null;
    color: string | null;
}

export default function Subtitle({ subtitle, color }: Props) {

    return (
        <>
            <div className={color=="white" ? " text-white" : " text-[#333333]"}>
                <h2 className="text-3xl font-bold text-center mt-12">{subtitle}</h2>
            </div>
        </>
    )
}