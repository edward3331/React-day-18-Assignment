import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplepokemonById = createAsyncThunk(
'pokemon/fetchMultiplepokemonById',
async (maxpokemonId) => {
    const numberArray = Array.from({length: maxpokemonId}, (_, i) =>
        i + 1 )

    const fetchAPI = async (pokemonId) => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
    
    const data = await response.json()

    const pokemonData = {
      id: pokemonId,
      name: data.names.find(el => el.language.name === 'ko').name,
      description: data.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text,
      front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
      back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`
      }
      return(pokemonData)
    }

    return await Promise.all(numberArray.map((el)=> fetchAPI(el)))
    }
)
