"use client";

import NavigationBar from "@/decoration/navbar";
import { dmSans, outfit } from "@/decoration/font/font";
import Footer from "@/decoration/footer";

const location = [
    {id:"1", mall:"Blok M", detail:"Ground Floor, Unit G-12", hint:"Dekat pintu masuk utama", img:"/outlet/1.webp"},
    {id:"2", mall:"Sarinah", detail:"Lantai 1, Unit 1-08", hint:"Dekat eskalator menuju lantai dasar", img:"/outlet/2.webp"},
    {id:"3", mall:"Kota Kasablanka", detail:"Lower Ground, Unit LG-25", hint:"Area kuliner, dekat atrium", img:"/outlet/3.webp"},
    {id:"4", mall:"Central Park", detail:"Lower Ground, Unit LG-18", hint:"Dekat akses menuju taman", img:"/outlet/4.webp"},
    {id:"5", mall:"Pacific Place", detail:"Lantai 4, Unit 4-10", hint:"Area restoran dan kafe", img:"/outlet/5.webp"},
    {id:"6", mall:"Agora", detail:"Ground Floor, Unit G-09", hint:"Dekat lobi utama", img:"/outlet/6.webp"},
]

export default function OurStoryPage() {


    return (
        <div className={`${dmSans.className} bg-white outlets-page`}>
            {/* NAVBAR */}
            <div className="fixed inset-x-0 top-0 z-50">
                <NavigationBar />
            </div>

            <div className="bg-white text-[#084f2b]">
                <div className="page-heading p-20 pt-40">
                    <span className={outfit.className}>
                        <h1 className="text-5xl font-semibold">Outlet Kami</h1>
                    </span>
                </div>
            </div>


            {/* UTAMA */}
            <div>
                <div className="flex flex-col gap-y-10 text-[#084f2b]">
                    {
                        location.map((x) =>{
                            return (
                                <div key={x.id}>
                                    <div className="outlet-row flex flex-row">
                                        <div className="outlet-photo h-150">
                                            <img src={x.img} className="h-150 w-auto" alt="" />
                                        </div>
                                        <div className="outlet-description flex flex-col h-150 p-10 justify-center">
                                            <div className={outfit.className}>
                                                <h1 className="text-5xl font-semibold">Cabang {x.mall}</h1>
                                            </div>
                                            <div className="pt-6">
                                                {x.detail}
                                            </div>
                                            <div>
                                                {x.hint}
                                            </div>
                                        </div>
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