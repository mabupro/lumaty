export default function Page({ params }: { params: { newsId: number } }) {
    return (
        <>
            <div>News Number: {params.newsId}</div>
            
        </>
    )
}