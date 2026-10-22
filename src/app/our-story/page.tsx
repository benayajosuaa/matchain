"use client";

import { useEffect, useRef, useState } from "react";
import NavigationBar from "@/decoration/navbar";
import { dmSans } from "@/decoration/font/font";
import Footer from "@/decoration/footer";

const stories = [
    {
        id: "1",
        image: "/story/5.webp",
        title: "Berawal dari Daun",
        description: "Perjalanan matcha dimulai dari daun teh. Sebelum sampai ke gelasmu, ada proses yang membentuk warna, aroma, dan karakter rasanya.",
    },
    {
        id: "2",
        image: "/story/2.webp",
        title: "Matcha Jadi Intinya",
        description: "Bubuk matcha menjadi dasar setiap racikan. Dari bahan sederhana ini, kami ingin menghadirkan rasa teh yang khas untuk keseharianmu.",
    },
    {
        id: "3",
        image: "/story/3.webp",
        title: "Dikocok Sampai Menyatu",
        description: "Matcha dan air dikocok menggunakan chasen hingga tercampur dan berbusa halus. Selangkah lebih dekat menuju minuman favoritmu.",
    },
    {
        id: "4",
        image: "/story/4.webp",
        title: "Matchain Aja Dulu",
        description: "Sudah diracik, tinggal dinikmati. Buat nemenin nugas, ngobrol, atau istirahat sebentar sebelum lanjut lagi.",
    },
];

export default function OurStoryPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (
                        !entry.isIntersecting ||
                        entry.intersectionRatio < 0.6
                    ) {
                        return;
                    }

                    const element = entry.target as HTMLDivElement;
                    const index = Number(element.dataset.index);

                    if (
                        Number.isInteger(index) &&
                        index >= 0 &&
                        index < stories.length
                    ) {
                        setActiveIndex(index);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        imageRefs.current.forEach((element) => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const activeStory = stories[activeIndex];

    return (
        <div className={`${dmSans.className} bg-white `}>
            {/* NAVBAR */}
            <div className="fixed inset-x-0 top-0 z-50">
                <NavigationBar />
            </div>

            {/* OUR STORY */}
            <main className="story-content px-6 pb-24 pt-32 md:px-16 md:pt-40 text-[#084f2b]">
                <div className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-2 md:gap-16">
                    {/* KIRI: GAMBAR */}
                    <div className="flex min-w-0 flex-col gap-16 md:gap-20">
                        {stories.map((story, index) => (
                            <div key={story.id}>
                                {/* Elemen yang dipantau observer */}
                                <div
                                    ref={(element) => {
                                        imageRefs.current[index] = element;
                                    }}
                                    data-index={index}
                                    className="h-[65svh] w-full md:h-[75svh]"
                                >
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="block h-full w-full object-cover"
                                    />
                                </div>

                                {/* Penjelasan untuk HP */}
                                <div className="mt-6 md:hidden">
                                    <p className="text-sm">
                                        0{index + 1} / 0{stories.length}
                                    </p>

                                    <h2 className="mt-3 text-3xl font-medium">
                                        {story.title}
                                    </h2>

                                    <p className="mt-4 leading-relaxed">
                                        {story.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* KANAN: PENJELASAN STICKY UNTUK DESKTOP */}
                    <div className="sticky top-32 hidden min-w-0 md:block">
                        <p className="text-sm uppercase tracking-[0.15em]">
                            Tentang Matchain
                        </p>

                        {/* Indikator mengikuti tahap aktif */}
                        <div
                            className="my-8 flex gap-2"
                            aria-hidden="true"
                        >
                            {stories.map((story, index) => (
                                <div
                                    key={story.id}
                                    className={`h-1 flex-1 transition-colors duration-300 ${
                                        index <= activeIndex
                                            ? "bg-[#084f2b]"
                                            : "bg-[#084f2b]/15"
                                    }`}
                                />
                            ))}
                        </div>

                        

                        <h1 className="text-4xl font-medium leading-tight lg:text-5xl">
                            {activeStory.title}
                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#084f2b]/80">
                            {activeStory.description}
                        </p>
                    </div>
                </div>
            </main>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}