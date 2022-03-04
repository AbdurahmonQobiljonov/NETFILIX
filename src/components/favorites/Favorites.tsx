import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import FavoritesView from "./FavoritesView";
import {RootState} from "../../redux/store";
import Spinner from "../../components/spinner/Spinner";
import useNetflixService from "../../server/Server";
import {setMovies} from "../../redux/actions/actions";
import ErrorMessage from "../errorMessage/ErrorMessage";

const Favorites = () => {
    const {error, loading, getAllMovies, getMovieById} = useNetflixService();
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

    const onDelete = (id: string) => {
        getMovieById(id, 'DELETE').then(res => {
            console.log(res)
        });
    };

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !movies?.[0]?.title) ?
        <FavoritesView
            movies={movies}
            onDelete={onDelete}/> : null;

    return (
        <section id="iq-favorites">
            {errorMessage}
            {spinner}
            {content}
        </section>
    )
}
export default Favorites;