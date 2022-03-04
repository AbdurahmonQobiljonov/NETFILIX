import Slider from "react-slick";

import tvthrillers from '../../assets/tvthrillers/01.jpg';
import tvthrillers2 from '../../assets/tvthrillers/02.jpg';
import tvthrillers3 from '../../assets/tvthrillers/03.jpg';
import tvthrillers4 from '../../assets/tvthrillers/04.jpg';
import tvthrillers5 from '../../assets/tvthrillers/05.jpg';
import useNetflixService from "../../server/Server";
import {useSelector} from "react-redux";
import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../redux/store";
import ErrorMessage from "../error_message/ErrorMessage";
import Spinner from "../spinner/Spinner";
import MoviesView from "../movies_view/MoviesView";

const TrendingSuggested = () => {
    const {error, loading, getMovieById} = useNetflixService();

    const movies = useSelector(createSelector(
        (state: RootState) => state.reducer.movies,
        (upcomingMovies) => upcomingMovies.filter(movie => movie.vote_count>=1000)
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
            mainTitle={'Recommended for you'}
            onDelete={onDelete}/> : null;

    return (
        <section id="iq-suggested" className="s-margin">
            {errorMessage}
            {spinner}
            {content}
        </section>
    )
}
export default TrendingSuggested;