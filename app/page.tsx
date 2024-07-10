import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen mt-96">
        <Link href={"/shirakawa"}>
          <p className="font-bold text-2xl text-center my-auto">デモページへ行く⇒</p>
        </Link>
        <br />
        <Link href={"/map"}>
          <p className="font-bold text-2xl text-center my-auto">マップページへ行く⇒</p>
        </Link>
      </div>

    </>
  );
}
