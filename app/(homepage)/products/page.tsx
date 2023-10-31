import Image from 'next/image';
import { useEffect } from 'react';
export async function generateMetadata() {
  return {
    title: 'Home',
  };
}
export default function Page() {
  return (
    <>
      <section className="products desktop hidden md:block ">
        <div className="flex justify-center ">
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white rounded relative w-[400px]">
              <Image src={'/leline.png'} className="rounded-t" width={400} height={400} alt="Leline" />
              <div className="divide-y p-3">
                <label className="text-lg font-bold">Lelang Online</label>
                <p className='font-thin'>
                    Lelang Online merupakan website yang digunakan oleh Pelelang dan Pembeli berinteraksi
                    untuk menjual atau membeli dengan harga yang diberikan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
