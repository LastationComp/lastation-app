'use client';
import TextField from '@/app/_components/TextField';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

// export async function generateMetadata() {
//   return {
//     title: 'Login Page',
//   };
// }

export default function Page() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);

    const res = await fetch('/register/api', {
      method: 'post',
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    });
    console.log(res.status)
  };
  return (
    <>
      <div className="shadow-lg p-3 rounded bg-white w-[500px] ">
        <h1 className="text-[30px] text-center">Register Page</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="">Email</label>
              <TextField type="email" placeholder="Ketik disini..." value={email} setValue={setEmail} />
            </div>
            <div>
              <label htmlFor="">Username</label>
              <TextField type="text" placeholder="Ketik disini..." value={username} setValue={setUsername} />
            </div>
            <div className="col-span-2">
              <label htmlFor="">Password</label>
              <TextField type="password" placeholder="Ketik disini..." value={password} setValue={setPassword} />
            </div>
            <div className="mt-5 col-span-2">
              <div>
                <span className="text-[12px] mt-3">
                  {'Already have Account? '}{' '}
                  <Link href={'/login'} className="text-sky-700">
                    Login
                  </Link>{' '}
                  here
                </span>
              </div>
              <div className="flex justify-between mt-3">
                <button type="submit" className="rounded px-3 py-1 outline outline-1 outline-blue-600 hover:shadow-lg transition ease-in-cubic">
                  Register
                </button>
                <button type="reset" onClick={() => router.push('/')} className="rounded px-3 py-1 outline outline-1 outline-green-600 hover:shadow-lg transition ease-in-cubic">
                  Back
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
