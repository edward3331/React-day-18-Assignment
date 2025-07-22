import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, pokemonSlice } from "./slice";
// import favorite from "../pages/favorite";


export const store = configureStore({
    reducer:{
        pokemon: pokemonSlice.reducer,
        favorite: favoriteSlice.reducer
    }
})