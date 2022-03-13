import {createAction} from '@reduxjs/toolkit';
import {IMovie} from "../../interfaces/interfaces";

export const setMovies = createAction<IMovie[]>('SET_MOVIES');
export const setMovie = createAction<IMovie>('SET_MOVIE');
export const setActivePortal = createAction<{type:string,payload:boolean}>('SET_ACTIVE_PORTAL');