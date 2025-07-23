
export async function GET(request, { params }) {
  const { pokemonId } = params;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
    const data = await res.json();

    const result = {
      id: Number(pokemonId),
      name: data.names.find(el => el.language.name === 'ko')?.name,
      description: data.flavor_text_entries.find(el => el.language.name === 'ko')?.flavor_text,
      front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
      back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
    };

    return Response.json(result);
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
