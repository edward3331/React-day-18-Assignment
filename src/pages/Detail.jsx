import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectPokemonById } from "../RTK/selector"
import FavoriteButton from "../component/FavoriteButton"
import FlipCard from "../component/FlipCard"

export default function Detail(){
    const {pokemonId} = useParams()
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)))
      if (!pokemon) {
    return (
      <div className="text-center text-gray-400 p-10">
        포켓몬 정보를 불러오는 중입니다...
      </div>
    )
  }
    return (
    <div className="bg-white flex flex-col justify-center 
    items-center border py-[30px] px-[60px] 
    rounded-[10px] border-b-[5px] border-r-[8px] border-black">
    <div className="text-[30px] mb-[10px]">
        {pokemon.name}
        <FavoriteButton pokemonId={Number(pokemonId)} />
        </div>
    <div className="whitespace-pre-wrap text-center">
        {pokemon.description}
        </div>
    <FlipCard front={pokemon.front} back={pokemon.back} />
    </div>)
}