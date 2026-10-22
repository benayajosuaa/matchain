"use client";

import NavigationBar from "@/decoration/navbar";
import { dmSans, outfit } from "@/decoration/font/font";
import Footer from "@/decoration/footer";


const menu = [
    {id:"1", nama:"Matcha Latte", harga:"Rp35.000", desc:"Matcha lembut berpadu susu creamy, dengan manis yang ringan.", img:"/menu/1.webp"},
    {id:"2", nama:"Pure Matcha", harga:"Rp33.000", desc:"Matcha lembut berpadu susu creamy, dengan manis yang ringan.", img:"/menu/2.webp"},
    {id:"3", nama:"Strawberry Matcha", harga:"Rp42.000", desc:"Matcha lembut berpadu susu creamy, dengan manis yang ringan.", img:"/menu/3.webp"},
    {id:"4", nama:"Mango Matcha", harga:"Rp45.000", desc:"Matcha lembut berpadu susu creamy, dengan manis yang ringan.", img:"/menu/4.webp"},
    {id:"5", nama:"Aren Matcha", harga:"Rp36.000", desc:"Matcha lembut berpadu susu creamy, dengan manis yang ringan.", img:"/menu/5.webp"},
    {id:"6", nama:"Matcha Espresso", harga:"Rp45.000", desc:"Matcha lembut berpadu susu creamy, dengan manis yang ringan.", img:"/menu/6.webp"},
]


export default function OurStoryPage() {
    return (
        <div className={`${dmSans.className} bg-white menu-page`}>
            {/* NAVBAR */}
            <div className="fixed inset-x-0 top-0 z-50">
                <NavigationBar />
            </div>

            {/* Title */}
            <div className="bg-white text-[#084f2b]">
                <div className="page-heading p-20 pt-40">
                    <span className={outfit.className}>
                        <h1 className="text-5xl font-semibold">Kami matchain kamu dengan</h1>
                    </span>
                </div>
            </div>


            {/* Daftar menu */}
            <div className="menu-content pl-20 pr-20 pb-40 text-[#084f2b]">
                <div className="menu-grid grid grid-cols-4 gap-10 gap-y-20">
                    {
                        menu.map((x) => {
                            return (
                                <div key={x.id} className="flex flex-col">
                                    <div>
                                        {/* Catatan: h-100 bukan class bawaan Tailwind. Gunakan h-96 atau h-[100px] */}
                                        <img src={x.img} className="h-80 object-cover" alt="" />
                                    </div>
                                    <div className="menu-caption flex flex-row pt-3 justify-between items-center">
                                        <div>
                                            <span className={outfit.className}>
                                                <h1 className="text-xl">
                                                    {x.nama}
                                                </h1>
                                            </span>
                                        </div>
                                        <div>
                                            <h1 className="text-xl">
                                                {x.harga}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <p className="text-sm">
                                            {x.desc}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* FOOTER */}
            <div>
                <Footer />
            </div>
        </div>
    );
}