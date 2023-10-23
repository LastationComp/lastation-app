'use client';
import TextField from '@/app/_components/TextField';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// export async function generateMetadata() {
//   return {
//     title: 'Login Page',
//   };
// }

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  return (
    <>
      <div className="shadow-lg p-3 rounded bg-white w-[400px] ">
        <h1 className="text-[30px] text-center">Login Page</h1>
        <form action="">
          <div className="grid grid-cols-1">
            <div>
              <label htmlFor="">Email</label>
            </div>
            <div className="mt-3">
              <TextField type="email" placeholder="Ketik disini..." value={email} setValue={setEmail} />
            </div>
            <div className="mt-3">
              <label htmlFor="">Password</label>
            </div>
            <div className="divide-y">
              <div className="mt-3">
                <TextField type="password" placeholder="Ketik disini..." value={password} setValue={setPassword} />
              </div>
              <div className=" mt-5">
                <div>
                  <span className="text-[12px] mt-3">
                    {"Haven't Account yet? "}{' '}
                    <Link href={'/register'} className="text-sky-700">
                      Register
                    </Link>{' '}
                    here
                  </span>
                </div>
                <div className="flex justify-between mt-3">
                  <button type="submit" className="rounded px-3 py-1 outline outline-1 outline-blue-600 hover:shadow-lg transition ease-in-cubic">
                    Login
                  </button>
                  <button type="reset" onClick={() => router.push('/')} className="rounded px-3 py-1 outline outline-1 outline-green-600 hover:shadow-lg transition ease-in-cubic">
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
