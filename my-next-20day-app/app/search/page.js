import { getRegExp } from "korean-regexp"


export const dynamic = 'force-dynamic'

async function fetchAllPokemon() {
    const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pokemon`, {
        cache: 'no-store',
    })
    const data = await res.json()
    return data
}

export default async function searchPage({searchPage}) {
    const keyword = SearchParams.pokemon || ''
    const reg = getRegExp(keyword, {fuzzy: true})
    const pokemons = await fetchAllPokemon()
    const filtered = pokemons.filter(pokemon => reg.test(pokemon.name))

    return(
        <main className="flex flex-wrap justify-center gap-4 p-4">
            {filtered.map(p => (
                <div key={p.id} className="border rounded p-4 text-center">
                    <p className="text-xl">{p.name}</p>
                    <img src={p.front} className="w-24 mx-auto" />
                </div>
            ))}
        </main>
    )
}