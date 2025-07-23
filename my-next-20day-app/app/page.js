import Link from 'next/link';
import Image from 'next/image';

export default async function HomePage() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pokemon`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('포켓몬 목록을 불러올 수 없습니다.');

    const pokemonList = await res.json();

    return (
    <main className="flex flex-wrap justify-center gap-6 p-6">
      {pokemonList.map((pokemon) => (
        <Link
          key={pokemon.id}
          href={`/detail/${pokemon.id}`}
          className="flex flex-col items-center border rounded-lg p-4 w-[180px]"
        >
          <Image src={pokemon.front} alt={pokemon.name} width={120} height={120} />
          <h2 className="mt-2 text-lg">{pokemon.name}</h2>
        </Link>
      ))}
    </main>
    );
  } catch (error) {
    return <p className="text-center text-red-600 mt-10">에러: {error.message}</p>;
  }
}
