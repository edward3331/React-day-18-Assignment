// app/api/pokemon/route.js

export async function GET() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await res.json();

    const result = data.results.map((item, index) => ({
      id: index + 1,
      name: item.name,
      front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    }));

    return Response.json(result);
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

