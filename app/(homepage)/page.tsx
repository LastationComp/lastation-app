import Image from 'next/image';
import { useEffect } from 'react';
import { AosInit } from '../aos';
export async function generateMetadata() {
  return {
    title: 'Home',
  };
}
export default function Page() {
  return (
    <>
      <AosInit />
      <section className="font-bold grid grid-cols-2 p-5">
        <div className="col-span-2">
            <h1 className="text-[48px] font-bold text-center" data-aos="fade-down" data-aos-duration="1000">Anda Katakan, Kami Kerjakan.</h1>
        </div>
    </section>
    <div className="grid xl:grid-cols-2 md:grid-cols-1">
        <div className="mt-5 flex xl:justify-end md:justify-center" data-aos="fade-right" data-aos-duration="1000">
            <div className="flex flex-col">
                <p className="text-[48px] font-bold md:text-center xl:text-start">Jalani bisnis anda <br/>
                    dengan lancar. <br/>
                </p>
                <p className="xl:w-[400px] md:w-[500px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    Kami menyediakan jasa membuat website sesuai dengan kebutuhan yang anda. Kebutuhan apapun yang anda
                    perlukan,
                    dengan kami bisa membuat kebutuhan anda terpenuhi dengan sebuah website
                </p>
            </div>
        </div>
        <div className=" mt-5" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <Image src={'/company1.png'} width={600} height={600} className="floating-img absolute" alt="" />
        </div>
        <div className="mt-[250px] xl:col-span-2 md:col-span-1 flex justify-center flex-wrap gap-5">
            <button
                className="transition rounded-full px-4 py-3 bg-blue-500 text-white font-bold text-lg hover:bg-blue-400 outline outline-1 outline-blue-600"
                data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">Lihat Detail</button>
            <button
                className="transition rounded-full px-4 py-3 bg-white text-black font-bold text-lg outline outline-1 outline-slate-100"
                data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">Buat Website Anda</button>
        </div>
        {/* <div className="col-span-2 flex justify-center mt-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
            <p className="text-[36px] font-bold">Powered By :</p>
        </div> */}
        {/* <div className="col-span-2 flex justify-center -mt-5">
            <div className="grid grid-cols-5 gap-5">
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1300">
                    <Image src={'/google.png'} width={200} height={100} alt=""/>
                </div>
                <div className="my-auto" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1400">
                    <Image src={'/microsoft.png'} width={200} height={200} alt=""/>
                </div>

            </div>
        </div> */}
    </div>
    </>
  );
}
