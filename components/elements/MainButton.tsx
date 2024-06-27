type Props = {
    title: string;
}

export default function MainButton({title}:Props){
    return(
        <>
            <div className=" bg-cyan-900 rounded-full w-5/6 p-4 mx-auto">
                <p className="text-lg font-bold text-center text-white">{title}</p>
            </div>
        </>
    )
}