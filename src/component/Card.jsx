import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import FavoriteButton from './FavoriteButton'
import { useState } from "react"
import React from "react"

const CardContainer = styled.section``

// 
const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 120px;
    height: 120px;
`
// 
const LoadingText = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    font-size: 12px;
`

export const Card = ({pokemon}) => {
    const navigate = useNavigate()
    const [isImageLoading, setIsImageLoading] = useState(true)

    console.log(`렌더링 : ${pokemon.name}`)

    return(
        <CardContainer 
        onClick={() => navigate(`/detail/${pokemon.id}`)}
        className="border-b-[5px] border-b-black border-r-[5px] border-r-black w-<150px> 
        border border-solid border-gray-400 flex flex-col justify-center items-center 
        gap-<10px> pb-<10px> rounded-xl"
        >
            <ImageWrapper>
                {isImageLoading && <LoadingText> 로딩 . . . </LoadingText>}
            <img 
            src={pokemon.front} 
            className="w-<120px>"
            onLoad={()=> setIsImageLoading(false)}
            style={{ display: isImageLoading ? 'none' : 'block'}}
            alt={pokemon.name} />
            </ImageWrapper>
            <div >
                {pokemon.name}
                <FavoriteButton pokemonId={pokemon.id} />
                </div>
        </CardContainer>
    )
}

export default React.memo(Card)