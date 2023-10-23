export async function generateMetadata({params}: {params: {id: string}}) {
  return {
    title: 'Profile |' + params.id,
  };
}
export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="container mx-auto">
      <h1 className="text-base ">Profile degan id {params.id}</h1>
    </main>
  );
}
