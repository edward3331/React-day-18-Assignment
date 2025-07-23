

export default async function DetailPage({params}) {
    const {pokemonId} = params;

try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pokemon/${pokemonId}`,{
        cache: 'no-store'
    });

if (!res.ok){
    throw new Error('포켓몬 정보를 불러올 수 없습니다');
}

const pokemon = await res.json();

return (
    <div className="flex flex-col items-center border border-gray-300 p-6 rounded-lg max-w-md mx-auto">
        <h1 className="text-3xl mb-4">{pokemon.name}</h1>
        <p className="whitespace-pre-wrap text-center mb-6 text-gray-700">{pokemon.description}</p>
        <image src={pokemon.front} width={250} height={250} />
    </div>
);
} catch (error) {
    return (
        <div className="text-center mt-10 text-red-500">
            오류가 발생했습니다 : {error.message}
        </div>
    )
}
}