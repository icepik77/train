import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <div className="flex flex-col overflow-visible">
        <div className="bg-sky-500 border-4 border-blue-500 w-full h-20">
          What?
        </div>
        <div className="bg-sky-500 border-4 border-blue-500 w-full h-20">
          <Image
            src="/soc/tg.png"
            width={24}
            height={24}
            alt="Telegram"
          />
          <Image
            src="/svgItem.svg"
            width={500}
            height={500}
            alt="Telegram"
          />
        </div>
        <div className="bg-sky-500 border-4 border-blue-500 w-full h-20"></div>
        <div className="bg-sky-500 border-4 border-blue-500 w-full h-20 relative">
          <div className="bg-violet-500 border-2 border-violet-500 w-40 h-10 absolute top-0 right-0 relative">
            <div className="absolute bottom-0 right-0 bg-red-600 border-2 border-lime-600 w-7 h-7 translate-y-1/2">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
