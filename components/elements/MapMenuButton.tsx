type Props = {
    menuTitle: string;
}

export default function MapMenuButton({ menuTitle }: Props) {
    return (
        <> 
            <button className=" mx-auto  w-20 h-20 bg-slate-300 rounded-md">{menuTitle}</button>
        </>
    )
}