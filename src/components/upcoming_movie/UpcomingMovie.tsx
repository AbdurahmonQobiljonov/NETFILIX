import {useSelector} from "react-redux";
import {createSelector} from '@reduxjs/toolkit';

import Spinner from "../spinner/Spinner";
import {RootState} from "../../redux/store";
import MoviesView from "../movies_view/MoviesView";
import useNetflixService from "../../server/Server";
import ErrorMessage from "../error_message/ErrorMessage";

const UpcomingMovie = () => {
    const {error, loading, getMovieById} = useNetflixService();

    const movies = useSelector(createSelector(
        (state: RootState) => state.reducer.movies,
        (upcomingMovies) => upcomingMovies.filter(movie => movie.vote_average >= 7)
    ));

    const onDelete = (id: string) => {
        getMovieById(id, 'DELETE').then(res => {
            console.log(res)
        });
    };

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !movies?.[0]?.title) ?
        <MoviesView
            movies={movies}
            mainTitle={'Popular Movies'}
            onDelete={onDelete}/> : null;

    return (
        <div className="upcoming_movie">
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
}
export default UpcomingMovie;