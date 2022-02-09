import Slider from 'react-slick';

import top from '../../assets/top-10/01.jpg'
import top_1 from '../../assets/top-10/02.jpg'
import top_2 from '../../assets/top-10/03.jpg'
import top_3 from '../../assets/top-10/04.jpg'
import top_4 from '../../assets/top-10/05.jpg'
import top_5 from '../../assets/top-10/06.jpg'

const Topten = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <section id="iq-topten">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 overflow-hidden">
                        <div className="topten-contents">
                            <h4 className="main-title iq-title topten-title">
                                Trending Movies
                            </h4>
                            <ul id="top-ten-slider" className="list-inline p-0 m-0 d-flex align-items-center">
                               <Slider {...settings}>
                                    <li className="slick-bg">
                                        <a href="#">
                                            <img src={top} className="img-fluid w-100" alt=""/>
                                            <h6 className="iq-title"><a href="#">Harry Potter</a></h6>
                                        </a>
                                    </li>
                                    <li className="slick-bg">
                                        <a href="#">
                                            <img src={top_1} className="img-fluid w-100" alt=""/>
                                            <h6 className="iq-title">
                                                <a href="#">The Queen's Gambit</a>
                                            </h6>
                                        </a>
                                    </li>
                                    <li className="slick-bg">
                                        <a href="#">
                                            <img src={top_2} className="img-fluid w-100" alt=""/>
                                            <h6 className="iq-title"><a href="#">Scam 1992</a></h6>
                                        </a>
                                    </li>
                                    <li className="slick-bg">
                                        <a href="#">
                                            <img src={top_3} className="img-fluid w-100" alt=""/>
                                            <h6 className="iq-title"><a href="#">Stranger Things</a></h6>
                                        </a>
                                    </li>
                                    <li className="slick-bg">
                                        <a href="#">
                                            <img src={top_4} className="img-fluid w-100" alt=""/>
                                            <h6 className="iq-title"><a href="#">BoJack Horsemen</a></h6>
                                        </a>
                                    </li>
                                    <li className="slick-bg">
                                    <a href="#">
                                        <img src={top_5} className="img-fluid w-100" alt=""/>
                                        <h6 className="iq-title"><a href="#">Peaky Blinders</a></h6>
                                    </a>
                                </li>
                               </Slider>
                            </ul>
                            <div className="vertical_s">
                                <ul id="top-ten-slider-nav" className="list-inline p-0 m-0 d-flex align-items-center">
                                       <Slider>
                                            <li>
                                                <div className="block-images position-relative">
                                                    <a href="#">
                                                        <img src={top} className="img-fluid w-100" alt=""/>
                                                    </a>
                                                    <div className="block-description">
                                                        <h5>Harry Potter</h5>
                                                        <div className="movie-time d-flex align-items-center my-2">
                                                            <div className="badge badge-secondary p-1 mr-2">
                                                                10+
                                                            </div>
                                                            <span className="text-white">8 Parts</span>
                                                        </div>
                                                        <div className="hover-buttons">
                                                            <a href="#" className="btn btn-hover" tabIndex={0}>
                                                                <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                                Play Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="block-images position-relative">
                                                    <a href="#">
                                                        <img src={top_1} className="img-fluid w-100" alt=""/>
                                                    </a>
                                                    <div className="block-description">
                                                        <h5>The Queen's Gambit</h5>
                                                        <div className="movie-time d-flex align-items-center my-2">
                                                            <div className="badge badge-secondary p-1 mr-2">
                                                                18+
                                                            </div>
                                                            <span className="text-white">1 Season</span>
                                                        </div>
                                                        <div className="hover-buttons">
                                                            <a href="#" className="btn btn-hover" tabIndex={0}>
                                                                <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                                Play Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="block-images position-relative">
                                                    <a href="#">
                                                        <img src={top_2} className="img-fluid w-100" alt=""/>
                                                    </a>
                                                    <div className="block-description">
                                                        <h5>Scam 1992</h5>
                                                        <div className="movie-time d-flex align-items-center my-2">
                                                            <div className="badge badge-secondary p-1 mr-2">
                                                                12+
                                                            </div>
                                                            <span className="text-white">1 Season</span>
                                                        </div>
                                                        <div className="hover-buttons">
                                                            <a href="#" className="btn btn-hover" tabIndex={0}>
                                                                <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                                Play Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="block-images position-relative">
                                                    <a href="#">
                                                        <img src={top_3} className="img-fluid w-100" alt=""/>
                                                    </a>
                                                    <div className="block-description">
                                                        <h5>Stranger Things</h5>
                                                        <div className="movie-time d-flex align-items-center my-2">
                                                            <div className="badge badge-secondary p-1 mr-2">
                                                                16+
                                                            </div>
                                                            <span className="text-white">3 Season</span>
                                                        </div>
                                                        <div className="hover-buttons">
                                                            <a href="#" className="btn btn-hover" tabIndex={0}>
                                                                <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                                Play Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="block-images position-relative">
                                                    <a href="#">
                                                        <img src={top_4} className="img-fluid w-100" alt=""/>
                                                    </a>
                                                    <div className="block-description">
                                                        <h5>BoJack Horseman</h5>
                                                        <div className="movie-time d-flex align-items-center my-2">
                                                            <div className="badge badge-secondary p-1 mr-2">
                                                                15+
                                                            </div>
                                                            <span className="text-white">6 Season</span>
                                                        </div>
                                                        <div className="hover-buttons">
                                                            <a href="#" className="btn btn-hover" tabIndex={0}>
                                                                <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                                Play Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="block-images position-relative">
                                                    <a href="#">
                                                        <img src={top_5} className="img-fluid w-100" alt=""/>
                                                    </a>
                                                    <div className="block-description">
                                                        <h5>Peaky Blinders</h5>
                                                        <div className="movie-time d-flex align-items-center my-2">
                                                            <div className="badge badge-secondary p-1 mr-2">
                                                                20+
                                                            </div>
                                                            <span className="text-white">5 Season</span>
                                                        </div>
                                                        <div className="hover-buttons">
                                                            <a href="#" className="btn btn-hover" tabIndex={0}>
                                                                <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                                Play Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                       </Slider>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topten;