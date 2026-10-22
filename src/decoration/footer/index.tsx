"use client"
import { dmSans, outfit } from "@/decoration/font/font"
import Link from "next/link"

const link = [
    {id:"1", url:"/menu", nama:"Menu"},
    {id:"2", url:"/our-story", nama:"Cerita Kami"},
    {id:"3", url:"/location", nama:"Lokasi"},
]


export default function Footer(){
    return(
        <div className={`${outfit.className} site-footer`}>
            {/* tampilan desktop */}
            <div>
                <div className="bg-[#084f2b]">
                    <div className="p-20">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col gap-y-1">
                                <div>
                                    <img src="/logo/matcha.webp" className="h-5" alt="" />
                                </div>
                                <div className="pt-10">
                                    <h1>matchain perjelananmu di </h1>
                                </div>
                                <div className="flex flex-row gap-x-3">
                                    <span>Blok M</span>
                                    <span>Sarinah</span>
                                    <span>Kota Kasablanka</span>
                                    <span>Central Park</span>
                                    <span>Pacific Place</span>
                                    <span>Agora</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-y-2 text-lg">
                                    <div>
                                        <Link
                                            href="https://wa.me/628970052654?text=aku%20mau%20buat%20website%20untuk%20usaha%20matcha%20ku"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            WhatsApp
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            href="https://www.instagram.com/inside.kamar320/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Instagram
                                        </Link>
                                    </div>
                                    <div className="border-t"/>
                                    <div className="flex flex-col">
                                        {
                                            link.map((x) => {
                                                return (
                                                    <div key={x.id}>
                                                        <Link href={x.url}>
                                                            {x.nama}
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-20">
                            <div className="flex w-full justify-center items-center">
                                <h1 className="text-sm opacity-70">ini mrupkn portfolio kmr320 yah, smua dlmnya fiktif & dibntu ilustrsi oleh AI heheh</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* tampilan mobile */}
        </div>
    )
}