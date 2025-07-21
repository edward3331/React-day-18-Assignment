import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const CardContainer = styled.section`  
`

export const Card = ({pokemon}) => {
    const navigate = useNavigate()
    return(
        <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}
        className="w-<150px> border border-solid border-gray-400 flex flex-col justify-center items-center gap-<10px> pb-<10px> rounded-xl ">
            <img src={pokemon.front} className="w-<120px>" />
            <div >{pokemon.name}</div>
        </CardContainer>
    )
}