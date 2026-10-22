import { dmSans, outfit } from "@/decoration/font/font"


const gambar = [
    {id:"1", nomor:"1.", judul:"Siapkan dulu", gambar:"/tahap/1.webp"},
    {id:"2", nomor:"2.", judul:"Ayak", gambar:"/tahap/2.webp"},
    {id:"3", nomor:"3.", judul:"Aduk", gambar:"/tahap/3.webp"},
    {id:"4", nomor:"4.", judul:"Hangat atau Dingin", gambar:"/tahap/4.webp"},
    {id:"5", nomor:"5.", judul:"Matchain", gambar:"/tahap/5.webp"},
]

export default function TahapanMatcha(){
    return (
        <div className="matcha-steps">
            <div className="w-full">
                <div className="p-10 pt-20 bg-white">
                    <span className={outfit.className}>
                        <h1 className="text-[#084f2b] font-semibold text-4xl">
                            cara kerja kami
                        </h1>
                    </span>
                </div>
                <div className="steps-grid flex flex-row ">
                    {
                        gambar.map((x) => {
                            return (
                                <div key={x.id} className="bg-amber-100 relative z-10 w-full h-100 text-black basis-1/5">
                                    <div className="w-full h-full absolute top-0 left-0 p-10 z-20 font-bold">
                                        <div className="w-full h-full flex flex-col justify-between">
                                            <span>
                                                <h1 className="font-thin text-4xl text-white">
                                                    {x.nomor}
                                                </h1>
                                            </span>
                                            <div>
                                                <h1 className="font-thin text-4xl text-white">
                                                    {x.judul}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <img src={x.gambar} className="w-full h-full object-cover" alt="" />
                                </div>
                            )
                        })
                    }            
                </div>
            </div>
        </div>
    )
}


