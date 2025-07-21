import { useSelector } from "react-redux"
import { Card } from "../component/Card"

export default function Main(){
      const pokemonData = useSelector(state => state.pokemon.data)
    return(
    <>
        {pokemonData.map(el => <Card key={el.id} pokemon={el} />)}
    </>
    )
}


// const CardContainer = styled.section`
    
// `
// const Card = ({pokemon}) => {
//     return(
//         <CardContainer className="w-<150px> border border-solid border-gray-400 flex flex-col justify-center items-center gap-<10px> pb-<10px> rounded-xl ">
//             <img src={pokemon.front} className="w-<120px>" />
//             <div >{pokemon.name}</div>
//         </CardContainer>
//     )
