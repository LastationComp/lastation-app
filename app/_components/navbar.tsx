'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <nav className=" flex justify-between p-3 text-black flex-wrap">
        <ul className="flex items-center gap-5">
          <li>
            <Image src={'/Icon-dark.png'} width={40} height={40} loading="lazy" alt="" />
          </li>
          <li>
            <h1 className="text-[27px] font-bold">Lastation.</h1>
          </li>
        </ul>
        <ul className="flex items-center gap-5 justify-center mx-auto">
          <li>
            <Link href="/" className={'text-base hover:text-white ' + (pathname == '/' ? 'text-white' : '')}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/features" className={'text-base hover:text-white ' + (pathname == '/features' ? 'text-white' : '')}>
              Features
            </Link>
          </li>
          <li>
            <Link href="/products" className={'text-base hover:text-white ' + (pathname == '/products' ? 'text-white' : '')}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="text-base hover:text-white ">
              Contact Us
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-5">
          <li>
            <button className="rounded px-3 py-1 outline outline-1 outline-green-200 hover:shadow-lg text-green-600">Order Now</button>
          </li>
          <li>
            <Link href={'/login'} className="rounded px-3 py-1 outline outline-1 outline-blue-500 hover:shadow-lg text-white bg-blue-600 hover:bg-blue-500 cursor-pointer">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
