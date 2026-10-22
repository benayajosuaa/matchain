import { dmSans, outfit } from "@/decoration/font/font"
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link"

const location = [
    {id:"1", mall:"Blok M", detail:"Ground Floor, Unit G-12, Dekat pintu masuk utama"},
    {id:"2", mall:"Sarinah", detail:"Lantai 1, Unit 1-08, Dekat eskalator menuju lantai dasar"},
    {id:"3", mall:"Kota Kasablanka", detail:"Lower Ground, Unit LG-25, Area kuliner, dekat atrium"},
    {id:"4", mall:"Central Park", detail:"Lower Ground, Unit LG-18, Dekat akses menuju taman"},
    {id:"5", mall:"Pacific Place", detail:"Lantai 4, Unit 4-10, Area restoran dan kafe"},
    {id:"6", mall:"Agora", detail:"Ground Floor, Unit G-09, Dekat lobi utama"},
]

export default function LocationMatcha(){
    return (
        <div className={`${dmSans.className} location-summary`}>
            <div className="bg-white pt-30 pb-20">
                <div className="w-full text-[#084f2b]">
                    <div className="p-10">
                        <div className="flex flex-col gap-y-10">
                            
                            <div className="flex items-center justify-center">
                                <span className={outfit.className}>
                                    <h1 className="text-4xl">
                                        kamu bisa nge-matchain dirimu di
                                    </h1>
                                </span>
                            </div>

                            <div className="flex flex-wrap justify-center gap-x-5 gap-y-6">
                                {location.map((x) => (
                                    <div
                                        key={x.id}
                                        className="
                                            flex flex-col items-center justify-center
                                            rounded-full bg-[#084f2b]
                                            px-8 py-4
                                            text-center text-white
                                        "
                                    >
                                        <span className="text-lg font-semibold">
                                            {x.mall}
                                        </span>

                                        <span className="text-sm text-white/80">
                                            {x.detail}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-14 pb-10">
                                <Link href="/">
                                    <div className="flex flex-row gap-x-2 justify-center items-center text-xl">
                                        <span>Lihat detail toko</span>
                                        <span><GoArrowUpRight /></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


