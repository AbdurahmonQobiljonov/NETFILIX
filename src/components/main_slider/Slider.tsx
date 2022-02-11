import {useEffect, useState} from 'react';
import Slider from "react-slick";
import useNetflixService from "../../server/Server";

import logo from '../../assets/logo.png';
import {IMovie} from "../../interfaces/interfaces";

const Slides = () => {
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    if (error) {
        return <div>Error!</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <section id="home" className="iq-main-slider p-0">
            <div id="home-slider" className="slider m-0 p-0">
                <Slider {...settings}>
                    {movies?.map((element: IMovie) => {
                        //destuctizatsiya
                        return (
                            <div key={element.id} className="slide">
                                <div className="container-fluid position-relative h-100">
                                    <div className="slider-inner h-100">
                                        <div className="row align-items-center slick-bg "
                                             style={{backgroundImage: `url(${element.poster_path})`}}>
                                            <div className="col-xl-6 col-lg-12 col-md-12">
                                                <a href="#">
                                                    <div className="channel-logo" data-animation-in="fadeInLeft"
                                                         data-delay-in="0.5">
                                                        <img src={logo} className="c-logo" alt="logo"/>
                                                    </div>
                                                </a>
                                                <h1 className="slider-text big-title title text-uppercase"
                                                    data-animation-in="fadeInLeft"
                                                    data-delay-in="0.6">
                                                    {element.title}
                                                </h1>
                                                <div className="d-flex flex-wrap align-items-center fadeInLeft animated"
                                                     data-animation-in="fadeInLeft"
                                                     style={{opacity: "1"}}>
                                                    <div
                                                        className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                                                        <span
                                                            className="text-white ml-2">{element.vote_average}(imbd)</span>
                                                    </div>
                                                    <div className="d-flex align-items-center mt-2 mt-md-3">
                                                        <span className="badge badge-secondary p-2">   </span>
                                                        <span
                                                            className="ml-3">{element.revenue.toLocaleString() + ' $'}</span>
                                                    </div>
                                                </div>
                                                <p data-animation-in="fadeInUp">
                                                    {element.overview}
                                                </p>
                                                <div className="trending-list" data-animation-in="fadeInUp"
                                                     data-delay-in="1.2">
                                                    <div className="text-primary title starring">
                                                        Starring :
                                                        <span
                                                            className="text-body">{element.tagline}</span>
                                                    </div>
                                                    <div className="text-primary title genres">
                                                        Genres : <span className="text-body">{element.genres[0]}</span>
                                                    </div>
                                                    <div className="text-primary title tag">
                                                        Tags :
                                                        <span className="text-body">{element.genres[1]}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center r-mb-23 mt-4"
                                                     data-animation-in="fadeInUp"
                                                     data-delay-in="1.2">
                                                    <a href="#" className="btn btn-hover iq-button"><i
                                                        className="fa-solid fa-circle-play"></i>Play Now</a>
                                                    <a href="#" className="btn btn-link">More Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </section>
    )
}
export default Slides;
