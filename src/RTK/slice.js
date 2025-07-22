import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplepokemonById } from '../RTK/thunk'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
        loading:true,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchMultiplepokemonById.pending, (state) =>
            {
                state.loading = true;
            })
            .addCase(fetchMultiplepokemonById.rejected, (state) =>
            {
                state.loading = false
            })
            .addCase(fetchMultiplepokemonById.fulfilled, (state,
                action) => {
                    state.loading = false;
                    state.data = action.payload
                })
        }
    })

    export const favoriteSlice = createSlice({
        name: 'favorite',
        initialState: [1,2,3],
        reducers:{
            addToFavorite (state, action) { state.push(action.payload.pokemonId) },
            removeFromFavorite(state, action){
                const index = state.indexOf(action.payload.pokemonId)
                    if(index !== -1) state.splice(index, 1)
            }
        }
    })