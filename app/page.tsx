import Link from "next/link";
// import { getSheetsData } from "@/utils/getSheetData";

export default async function Home() {

  // const data = await getSheetsData()
  // console.log("data: ", data)

  return (
    <>
      <div className="h-screen">
        <Link href={"/shirakawa"}>
          <p className="font-bold p-5 text-2xl text-center my-auto">デモページへ行く⇒</p>
        </Link>
        <Link href={"/form"}>
          <p className="font-bold p-5 text-2xl text-center my-auto">フォームページへ行く⇒</p>
        </Link>
      </div>


    </>
  );
}
