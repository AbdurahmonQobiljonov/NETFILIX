import {useEffect, useState} from 'react';
import Slider from "react-slick";

import {IMovie} from "../../interfaces/interfaces";
import useNetflixService from "../../server/Server";

const Favorites = () => {
    const {error, loading, getAllMovies} = useNetflixService();
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getAllMovies('GET').then(res => {
            setMovies(res);
        });
    };
    console.log(movies);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    return (
        <section id="iq-favorites">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 overflow-hidden">
                        <div className="iq-main-header d-flex align-items-center justify-content-between">
                            <h4 className="main-title">Top Picks For You</h4>
                            <a href="#" className="iq-view-all">View All</a>
                        </div>
                        <div className="favorite-contens">
                            <ul className="favorites-slider list-inline row p-0 mb-0">
                                <Slider {...settings}>
                                    {movies?.map(({poster_path,title,vote_average}:IMovie) => {
                                            return (<li className="slide-item">
                                                    <div className="block-images position-relative">
                                                        <div className="img-box">
                                                            <img src={poster_path} className="img-fluid" alt=""/>
                                                        </div>
                                                        <div className="block-description">
                                                            <h6 className="iq-title">
                                                                <a href="#"> {title} </a>
                                                            </h6>
                                                            <div className="movie-time d-flex align-items-center my-2">
                                                                <div className="badge badge-secondary p-1 mr-2">16+</div>
                                                                <span className="text-white">{vote_average + ' '}(imbd)</span>
                                                            </div>
                                                            <div className="hover-buttons">
                                                    <span className="btn btn-hover iq-button">
                                                      <i className="fa fa-play mr-1"></i>
                                                      Play Now
                                                    </span>
                                                            </div>
                                                        </div>
                                                        <div className="block-social-info">
                                                            <ul className="list-inline p-0 m-0 music-play-lists">
                                                                <li className="share">
                                                                    <span><i className="fa fa-share-alt"></i></span>
                                                                    <div className="share-box">
                                                                        <div className="d-flex align-items-center">
                                                                            <a href="#" className="share-ico"><i
                                                                                className="fa fa-share-alt"></i></a>
                                                                            <a href="#" className="share-ico"><i
                                                                                className="fa fa-youtube"></i></a>
                                                                            <a href="#" className="share-ico"><i
                                                                                className="fa fa-instagram"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <span><i className="fa fa-heart"></i></span>
                                                                    <span className="count-box">19+</span>
                                                                </li>
                                                                <li>
                                                                    <span><i className="fa fa-plus"></i></span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    )}
                                </Slider>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Favorites;