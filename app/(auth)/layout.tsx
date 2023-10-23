import { Inter, Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className={poppins.className + ' bg-slate-200 text-black'}>
        <div className="card p-3 flex justify-center">
          {children}
        </div>
      </section>
    </>
  );
}
