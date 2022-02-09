import Slider from 'react-slick';

import popular from '../../assets/popular/u1.jpg'
import popular_2 from '../../assets/popular/u2.jpg'
import popular_3 from '../../assets/popular/u3.jpg'
import popular_4 from '../../assets/popular/u4.jpg'
import popular_5 from '../../assets/popular/u5.jpg'


const UpcomingMovie = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <section id="iq-upcoming-movie">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 overflow-hidden">
                        <div className="iq-main-header d-flex align-items-center justify-content-between">
                            <h4 className="main-title">Popular Movies</h4>
                            <a href="#" className="iq-view-all">View All</a>
                        </div>
                        <div className="favorite-contens">
                            <ul className="favorites-slider list-inline row p-0 mb-0">
                                <Slider {...settings}>
                                    <li className="slide-item">
                                        <div className="block-images position-relative">
                                            <div className="img-box">
                                                <img src={popular} className="img-fluid" alt=""/>
                                            </div>
                                            <div className="block-description">
                                                <h6 className="iq-title">
                                                    <a href="#"> Mulan </a>
                                                </h6>
                                                <div className="movie-time d-flex align-items-center my-2">
                                                    <div className="badge badge-secondary p-1 mr-2">10+</div>
                                                    <span className="text-white">2h</span>
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
                                                        <span className="count-box">89+</span>
                                                    </li>
                                                    <li>
                                                        <span><i className="fa fa-plus"></i></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="slide-item">
                                        <div className="block-images position-relative">
                                            <div className="img-box">
                                                <img src={popular_2} className="img-fluid" alt=""/>
                                            </div>
                                            <div className="block-description">
                                                <h6 className="iq-title">
                                                    <a href="#"> Laxmii </a>
                                                </h6>
                                                <div className="movie-time d-flex align-items-center my-2">
                                                    <div className="badge badge-secondary p-1 mr-2">18+</div>
                                                    <span className="text-white">2h 21min</span>
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
                                                        <span className="count-box">35+</span>
                                                    </li>
                                                    <li>
                                                        <span><i className="fa fa-plus"></i></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="slide-item">
                                        <div className="block-images position-relative">
                                            <div className="img-box">
                                                <img src={popular_3} className="img-fluid" alt=""/>
                                            </div>
                                            <div className="block-description">
                                                <h6 className="iq-title">
                                                    <a href="#"> Captain America </a>
                                                </h6>
                                                <div className="movie-time d-flex align-items-center my-2">
                                                    <div className="badge badge-secondary p-1 mr-2">12+</div>
                                                    <span className="text-white">2h 4min</span>
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
                                                        <span className="count-box">99+</span>
                                                    </li>
                                                    <li>
                                                        <span><i className="fa fa-plus"></i></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="slide-item">
                                        <div className="block-images position-relative">
                                            <div className="img-box">
                                                <img src={popular_4} className="img-fluid" alt=""/>
                                            </div>
                                            <div className="block-description">
                                                <h6 className="iq-title">
                                                    <a href="#"> Life of Pie </a>
                                                </h6>
                                                <div className="movie-time d-flex align-items-center my-2">
                                                    <div className="badge badge-secondary p-1 mr-2">11+</div>
                                                    <span className="text-white">2h 7min</span>
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
                                    <li className="slide-item">
                                    <div className="block-images position-relative">
                                        <div className="img-box">
                                            <img src={popular_5} className="img-fluid" alt=""/>
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title">
                                                <a href="#"> Mission Mangal </a>
                                            </h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <div className="badge badge-secondary p-1 mr-2">12+</div>
                                                <span className="text-white">2h 10min</span>
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
                                </Slider>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default UpcomingMovie;