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
      <main className="container mx-auto p-12 ">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-3 flex justify-center">
            <h1 className="text-[50px]">
              Selamat Datang Di <b>Lastation</b>
            </h1>
          </div>
          <div className="card shadow-md hover:shadow-xl hover:cursor-pointer bg-white divide-y  bg-white-200 rounded w-[400px]" data-aos="fade-up">
            <div className="">
              <Image src="/fu-xuan.jpg" className="rounded-t object-cover  max-h-[200px] w-full " width={'400'} height={'200'} loading="lazy" alt="" />
            </div>
            <div className="p-3">
              <h1 className="font-bold">Fu Xuan</h1>
            </div>
            <div className="p-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id.</p>
            </div>
          </div>
          <div className="card shadow-md hover:shadow-xl hover:cursor-pointer bg-white divide-y  bg-white-200 rounded w-[400px]" data-aos="fade-up" data-aos-delay="200">
            <div className="">
              <Image src="/Icon-dark.png" className="rounded-t object-cover  max-h-[200px] w-full " width={'400'} height={'200'} loading="lazy" alt="" />
            </div>
            <div className="p-3">
              <h1 className="font-bold">Lastation Logo</h1>
            </div>
            <div className="p-3">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card shadow-md hover:shadow-xl hover:cursor-pointer bg-white divide-y  bg-white-200 rounded w-[400px]" data-aos="fade-up" data-aos-delay="400">
            <div className="">
              <Image src="/project.png" className="rounded-t object-cover  max-h-[200px] w-full " width={'400'} height={'200'} loading="lazy" alt="" />
            </div>
            <div className="p-3">
              <h1 className="font-bold">Project Gak Jalan</h1>
            </div>
            <div className="p-3">
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
