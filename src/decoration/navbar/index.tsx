"use client"
import { outfit } from "../font/font"
import Link from "next/link"

const linknavbar = [
    {id:"1", url:"/menu", nama:"Menu"},
    {id:"2", url:"/our-story", nama:"Cerita Kami"},
    {id:"3", url:"/location", nama:"Lokasi"},
]


export default function NavigationBar(){
    return (
        <div className={outfit.className}>
            <div className="mobile-navigation">
                <Link href="/" aria-label="Matchain — beranda">
                    <img src="/logo/matcha-hijau.webp" className="h-5 w-auto" alt="Matchain" />
                </Link>
                <details className="mobile-menu">
                    <summary aria-label="Buka atau tutup navigasi">Menu <span aria-hidden="true">☰</span></summary>
                    <nav aria-label="Navigasi utama">
                        {linknavbar.map((item) => (
                            <Link key={item.id} href={item.url} onClick={(event) => {
                                event.currentTarget.closest("details")?.removeAttribute("open")
                            }}>{item.nama}</Link>
                        ))}
                        <div className="mobile-hours">
                            <strong>Jam Operasional</strong>
                            <span>Senin - Minggu, 10 am - 10 pm</span>
                        </div>
                    </nav>
                </details>
            </div>
            {/* Laptop */}
            <div>
                <div className="desktop-navigation bg-white text-[#084f2b] px-10 py-2 w-screen">
                    <div className="flex flex-row items-center w-full justify-between">
                        <div>
                            <div className="flex flex-row gap-x-3 text-base">
                                {
                                    linknavbar.map((x) => {
                                        return (
                                            <div key={x.id} className="flex flex-row gap-x-3 text-base">
                                                <div>
                                                    <Link href={x.url}>
                                                        {x.nama}
                                                    </Link>
                                                </div>    
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>


                        <div className="pr-20">
                            <div>
                                <Link href="/">
                                    <img src="/logo/matcha-hijau.webp" className="h-5 w-auto" alt="/" />
                                </Link>
                            </div>
                        </div>
                        
                        

                        <div>
                            <div className="flex flex-col gap-x-5 text-lg">
                                <div className="font-semibold">Jam Oprasional</div>
                                <div className="text-sm">Senin - Minggu, 10 am - 10 pm</div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}