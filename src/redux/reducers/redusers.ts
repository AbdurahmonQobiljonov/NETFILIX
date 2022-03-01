import {createReducer} from '@reduxjs/toolkit'
import {setMovies, setMovie,setActivePortal} from "../actions/actions";

import {IMovies} from "../../interfaces/interfaces";

const initialState: IMovies = {
    movies: [],
    movie: null,
    activePortal: false
};

const reducer = createReducer(initialState, builder => {
    builder
        .addCase(setMovies, (state, action) => {
            // @ts-ignore
            state.movies = action.payload;
        })
        .addCase(setMovie, (state, action) => {
            // @ts-ignore
            state.movie = action.payload;
        })
        .addCase(setActivePortal, (state, action) => {
            // @ts-ignore
            state.activePortal = action.payload;
        })
        .addDefaultCase((state, action) => {
            console.log(action.type);
        });
});

export default reducer;