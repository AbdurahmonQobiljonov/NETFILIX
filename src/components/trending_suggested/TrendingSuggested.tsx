import Slider from "react-slick";

import tvthrillers from '../../assets/tvthrillers/01.jpg';
import tvthrillers2 from '../../assets/tvthrillers/02.jpg';
import tvthrillers3 from '../../assets/tvthrillers/03.jpg';
import tvthrillers4 from '../../assets/tvthrillers/04.jpg';
import tvthrillers5 from '../../assets/tvthrillers/05.jpg';

const TrendingSuggested = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <section id="iq-suggested" className="s-margin">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 overflow-hidden">
                        <div className="iq-main-header d-flex align-items-center justify-content-between">
                            <h4 className="main-title">Recommended For You</h4>
                            <a href="#" className="iq-view-all">View All</a>
                        </div>
                        <div className="favorite-contens">
                            <ul className="favorites-slider list-inline row p-0 mb-0">
                                <Slider {...settings}>
                                    <li className="slide-item">
                                        <div className="block-images position-relative">
                                            <div className="img-box">
                                                <img src={tvthrillers} className="img-fluid" alt=""/>
                                            </div>
                                            <div className="block-description">
                                                <h6 className="iq-title">
                                                    <a href="#">The Martian</a>
                                                </h6>
                                                <div className="movie-time d-flex align-items-center my-2">
                                                    <div className="badge badge-secondary p-1 mr-2">15+</div>
                                                    <span className="text-white">2h 45min</span>
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
                                                <img src={tvthrillers2} className="img-fluid" alt=""/>
                                            </div>
                                            <div className="block-description">
                                                <h6 className="iq-title">
                                                    <a href="#">Unhinged</a>
                                                </h6>
                                                <div className="movie-time d-flex align-items-center my-2">
                                                    <div className="badge badge-secondary p-1 mr-2">7+</div>
                                                    <span className="text-white">2h 12min</span>
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
                                                <img src={tvthrillers3} className="img-fluid" alt=""/>
                                            </div>
                                            <div className="block-description">
                                                <h6 className="iq-title">
                                                    <a href="#">Kingsman</a>
                                                </h6>
                                                <div className="movie-time d-flex align-items-center my-2">
                                                    <div className="badge badge-secondary p-1 mr-2">18+</div>
                                                    <span className="text-white">3h</span>
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
                                                <img src={tvthrillers4} className="img-fluid" alt=""/>
                                            </div>
                                            <div className="block-description">
                                                <h6 className="iq-title">
                                                    <a href="#"> Casino Royale</a>
                                                </h6>
                                                <div className="movie-time d-flex align-items-center my-2">
                                                    <div className="badge badge-secondary p-1 mr-2">18+</div>
                                                    <span className="text-white">1h 55min</span>
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
                                            <img src={tvthrillers5} className="img-fluid" alt=""/>
                                        </div>
                                        <div className="block-description">
                                            <h6 className="iq-title">
                                                <a href="#"> Mision Impossible</a>
                                            </h6>
                                            <div className="movie-time d-flex align-items-center my-2">
                                                <div className="badge badge-secondary p-1 mr-2">17+</div>
                                                <span className="text-white">1h 35min</span>
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
export default TrendingSuggested;