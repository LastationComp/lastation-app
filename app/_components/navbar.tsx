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
      <nav className="bg-sky-700 p-3 flex text-white">
        <ul className="mr-auto flex items-center gap-3">
          <li>
            <Image src="/icon-dark.png" width={'40'} height={'40'} alt="" />
          </li>
          <li>
            <h3>Lastation</h3>
          </li>
        </ul>
        <ul className="ml-auto flex items-center gap-3 mr-3">
          <li>
            <Link href={'/'} className={`${pathname == '/' ? 'font-bold' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href={'/profile'} className={`${pathname == '/profile' ? 'font-bold' : ''}`}>
              Profile
            </Link>
          </li>
          <li>
            <button className="outline outline-white outline-1 rounded px-3 py-1 text-base  hover:shadow-md hover:shadow-blue-200" onClick={() => router.push('login')}>Login</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
