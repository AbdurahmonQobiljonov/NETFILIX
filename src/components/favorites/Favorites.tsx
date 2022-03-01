import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setMovies} from "../../redux/actions/actions";
import FavoritesView from "./FavoritesView";
import useNetflixService from "../../server/Server";
import {RootState} from "../../redux/store";

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

    const errorMessage = error ? <h1>ERROR</h1> : null;
    const spinner = loading ? <h1>Spinner</h1> : null;
    const content = !(loading || error || !movies?.[0].title) ?
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