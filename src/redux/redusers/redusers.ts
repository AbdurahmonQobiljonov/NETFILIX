import {IMovie,IMovies} from "../../interfaces/interfaces";

const initialState:{movies:IMovie[];movie:IMovie|null} = {
 movies: [],
 movie: null
};

const reducer = (state = initialState, action: any):IMovies => {
 switch (action.type) {
  case 'SET_MOVIES':
   return {
    ...state,
    movies: action.payload,
   }
  case 'SET_MOVIE':
   return {
    ...state,
    movie: action.payload,
   };
  default:
   return state;
 }
};

export default reducer;