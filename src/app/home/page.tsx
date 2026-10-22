"use client"
import { useEffect, useState } from "react"
import NavigationBar from "@/decoration/navbar"
import { dmSans, outfit } from "@/decoration/font/font"
import { GoArrowUpRight } from "react-icons/go";
import Footer from "@/decoration/footer";
import TahapanMatcha from "@/decoration/tahapan"
import LocationMatcha from "@/decoration/location";
import Link from "next/link"


const image = [
    {id:"1", image:"/matchain-1/5.webp"},
    {id:"2", image:"/matchain-1/4.webp"}
]


export default function HomePage(){
    const [indexGambar, setIndexGambar] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndexGambar((indexSebelumnya) => {
                return (indexSebelumnya + 1) % image.length
            }) 
        }, 5000)

        return () => clearInterval(timer)
    }, [])


    return(
        <div className="home-page">
            <div>
                {/* Navbar */}
                <div className="left-0 w-full flex z-20 fixed top-0">
                    <NavigationBar/>
                </div>

                {/* SECTION: 1 */}
                <div className="relative flex z-10">
                    <div>
                        <img
                            src={image[indexGambar].image}
                            className="home-hero w-screen h-200 object-cover"
                            alt="Matchain"
                        />
                    </div>
                </div>

                {/* SECTION: ____ */}
                <div className="home-about bg-white pt-30">
                    <div className={dmSans.className}>
                        <div className="home-about-inner p-30 pt-10 text-[#084f2b]">
                            <div className="home-about-columns flex flex-row gap-x-10 gap-y-10">
                                <div className="basis-1/2 pt-5">
                                    <div className={outfit.className}>
                                        <div>
                                            <h1 className="italic">tentang</h1>
                                        </div>
                                        <div>
                                            <h1 className="text-8xl font-semibold">
                                                matchain 
                                            </h1>
                                        </div>
                                        <div className="pt-10">
                                            <img src="/matchain-1/6..webp" className="h-50 w-full object-cover object-[center_60%]" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="basis-1/2">
                                    <div className={dmSans.className}>
                                        <div className="flex flex-col gap-y-5">
                                            <span>
                                                <p className="text-2xl">
                                                    matchain berangkat dari ide sederhana: membuat matcha lebih dekat dengan keseharianmu. Buat yang sudah suka atau baru mau mencoba, kami ingin menghadirkan racikan yang bisa kamu nikmati dengan caramu sendiri. 
                                                </p>
                                            </span>

                                            <span className="mt-20">
                                                <Link href="/our-story" className="flex flex-row items-center gap-x-2 text-lg underline ">
                                                    <span>Lihat lebih lengkap</span>
                                                    <span><GoArrowUpRight /></span>
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION: ____ */}
                <div>
                    <TahapanMatcha/>
                </div>


                {/* SECTION: _____ */}
                <div className="">
                    <LocationMatcha />
                </div>



                {/* Footer */}
                <div>
                    <Footer/>
                </div>

            </div>
        </div>
    )
}