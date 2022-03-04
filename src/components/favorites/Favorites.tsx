import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../../redux/store";
import MoviesView from "../movies_view/MoviesView";
import useNetflixService from "../../server/Server";
import {setMovies} from "../../redux/actions/actions";
import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../error_message/ErrorMessage";

const Favorites = () => {
    const {error, loading, getMovieById,getAllMovies} = useNetflixService();
    const dispatch = useDispatch();
    const {movies} = useSelector((state: RootState) => state.reducer);

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getAllMovies('GET').then(res => {
            // @ts-ignore
            dispatch(setMovies(res));
        });
    };

    const DeleteMovies = (id: string) => {
        getMovieById(id, 'DELETE').then(res => {
            console.log(res)
        });
    };

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !movies?.[0]?.title) ?
        <MoviesView
            movies={movies}
            mainTitle={'Top Picks For You'}
            onDelete={DeleteMovies}/> : null;

    return (
        <section id="iq-favorites">
            {errorMessage}
            {spinner}
            {content}
        </section>
    )
}
export default Favorites;