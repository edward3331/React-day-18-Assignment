import Image from "next/image";

export default async function DetailPage({params}) {
    const {pokemonId} = params;

    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pokemon/${pokemonId}`, {
            cache: 'no-store',
        });
        if (!res.ok) throw new Error('포켓몬 정보를 불러올 수 없습니다.')

        const pokemon = await res.json()

        return(
            <div className="flex flex-col justify-center items-center border border-gray-400 p-8 rounded-lg">
                <h1 className="text-3xl mb-4"></h1>
                <p className="whitespace-pre-wrap text-center mb-6">{pokemon.description}</p>
                <Image src={pokemon.front} width={250} height={250} />
            </div>

        )
    } catch(error) {
        return <p>오류 발생: {error.message}</p>
    }
}