// import { useEffect } from 'react'
// import './App.css'
// import '../src/App.scss'
// import { useDispatch } from 'react-redux'
// import { fetchMultiplepokemonById } from './RTK/thunk'
// import { Route, Routes, Link, useNavigate } from 'react-router-dom'

// import Main from './pages/Main'
// import Detail from './pages/Detail'
// import Search from './pages/Search'
// import Favorite from './pages/Favorite'

import { useEffect, Suspense, lazy } from 'react'
import './App.css'
import '../src/App.scss'
import { useDispatch } from 'react-redux'
import { fetchMultiplepokemonById } from './RTK/thunk'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

const Main = lazy(() => import('./pages/Main'))
const Detail = lazy(() => import('./pages/Detail'))
const Search = lazy(() => import('./pages/Search'))
const Favorite = lazy(() => import('./pages/Favorite'))

function App () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMultiplepokemonById(151))
  }, [])

  return (
    <>
      <h1 className='border-t-[50px] border-t-[red] bg-black text-white text-[40px] text-center'>포켓몬 도감</h1>

      <nav className='py-[10px] borer-b-[3px] border-b-black flex gap-[10px] justify-center'>
        <Link to={'/'}>메인</Link>
        <Link to={'/favorite'}>찜목록</Link>
        <input onChange={(e) => navigate(`search?pokemon=${e.target.value}`)} className='border-b border-[darkgray] px-2'/>
        <span>🔎</span>
      </nav>

      <main className='pb-[20px] bg-[gray] flex flex-wrap justify-center gap-[20px] pt-[20px]'>
      <Suspense fallback={<div className="text-center text-white">로딩 중...</div>}>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/detail/:pokemonId'} element={<Detail />} />
        <Route path={'/search'} element={<Search />} />
        <Route path={'/favorite'} element={<Favorite />} />
      </Routes>
      </Suspense>
      </main>
    </>
  )
}

export default App
