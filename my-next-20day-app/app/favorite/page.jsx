'use client'

import { useEffect } from "react"

export default function FavoritePage() {
    const [favorites, setFavorites] = useState([])
    const [data, setData] = useState([])

    useEffect(()=> {
        const saved = JSON.parse(localStorage.getItem('favorite')||'[]')
        setFavorites(saved)
    }, [])

    useEffect(()=>{
    if(favorites.length > 0) {
        Promise.all(
            favorites.map(id =>
                fetch(`/api/pokemon/${id}`).then(res => res.json())
            )
        ).then(setData)
    }
    }, [favorites])

    return(
        <main className="flex flex-wrap justify-center gap-4 p-4">
            {data.map(p=>(
                <div key={p.id} className="border rounded p-f text-center">
                    <p className="text-xl">{p.name}</p>
                    <img src={p.front} className="w-24 mx-auto" />
                </div>
            ))}
            {data.length === 0 && (
                <p className="text-gray-500 text-center">찜한 포켓몬이 없습니다.</p>
            )}
        </main>
    )
}