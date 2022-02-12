import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {setMovie} from "../redux/actions/actions";
import useNetflixService from "../server/Server";
import {RootState} from "../redux/store";


import parealax from '../assets/parallax/avatar.jpg';
import {IMovie} from "../interfaces/interfaces";

const Parallex = () => {
    const {error, loading, getMovieById} = useNetflixService();
    const {movie} = useSelector((state:RootState) => state.reducer);
    const dispatch = useDispatch();
    const {pathname} = useLocation();

    useEffect(() => {
        onRequest();
    }, [pathname]);

    const onRequest = () => {
        getMovieById(pathname,'GET').then((res:IMovie) => {
            // @ts-ignore
            dispatch(setMovie(res));
        });
    };
    console.log(movie);

    return (
        <section id="parallex" className="parallax-window"
                 style={{backgroundImage:`url(${movie?.poster_path})`}}>
            <div className="container-fluid h-100">
                <div className="row align-items-center justify-content-center h-100 parallaxt-details">
                    <div className="col-lg-4 r-mb-23">
                        <div className="text-left">
                            <a href="javascript:void(0)">
                                <h1 className="parallax-heading">{movie?.title}</h1>
                            </a>
                            <div className="parallax-ratting d-flex align-items-center mt-3 mb-3">
                                <ul
                                    className="ratting-start p-o m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                                    <li>
                                        <a href="#" className="text-primary"><i className="fa fa-star"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-primary"><i className="pl-2 fa fa-star"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-primary"><i className="pl-2 fa fa-star"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-primary"><i className="pl-2 fa fa-star"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-primary"><i className="pl-2 fa fa-star-half-o"></i></a>
                                    </li>
                                </ul>
                                <span className="text-white ml-3">{movie?.vote_average} (Imbd)</span>
                            </div>
                            <p>
                                {movie?.overview}
                            </p>
                            <div className="movie-time d-flex align-items-center mb-3">
                                <span className="text-white">{movie?.release_date}</span>
                            </div>
                            <div className="parallax-buttons">
                                <a href="#" className="btn btn-hover">Play Now</a>
                                <a href="#" className="btn btn-link">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="parallax-img">
                            <a href="#"><img src={movie?.poster_path} alt="" className="img-fluid w-10"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Parallex;