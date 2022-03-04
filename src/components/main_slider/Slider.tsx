import {useEffect, lazy} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Portal from "../portal/Portal";
import SliderView from "./SliderView";
import Spinner from "../spinner/Spinner";
import useNetflixService from "../../server/Server";
import {setMovies} from "../../redux/actions/actions";
import ErrorMessage from "../error_message/ErrorMessage";

import {IMovie} from "../../interfaces/interfaces";
import {RootState} from "../../redux/store";


const Form = lazy(()=>import("../form/Form"));

const Slides = () => {
    const {error, loading, getAllMovies} = useNetflixService();
    const dispatch = useDispatch();
    const {movies,activePortal} = useSelector((state:RootState) => state.reducer);

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getAllMovies('GET').then((res:IMovie[]) => {
            // @ts-ignore
            dispatch(setMovies(res));
        });
    };
    const portal = activePortal ? <Portal><Form/></Portal> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !movies?.[0]?.title) ? <SliderView movies={movies} /> : null;

    return (
        <section id="home" className="iq-main-slider p-0">
            {spinner}
            {errorMessage}
            {content}
            {portal}
        </section>
    )
}
export default Slides;
