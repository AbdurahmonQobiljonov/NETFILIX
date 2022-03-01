import Slider from "react-slick";
import {IMovie} from "../../interfaces/interfaces";
import {Link} from "react-router-dom";


const FavoritesView = ({movies,onDelete}:{movies:IMovie[];onDelete:(id:string)=>void}):JSX.Element => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 overflow-hidden">
                    <div className="iq-main-header d-flex align-items-center justify-content-between">
                        <h4 className="main-title">Top Picks For You</h4>
                    </div>
                    <div className="favorite-contens">
                        <ul className="favorites-slider list-inline row p-0 mb-0">
                            <Slider {...settings}>
                                {movies?.map(({poster_path, title, id, vote_average}: IMovie) => (
                                        <li key={id} className="slide-item">
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
                                                        <span
                                                            className="text-white">{vote_average + ' '}(imbd)</span>
                                                    </div>
                                                    <div className="hover-buttons">
                                                        <Link to={`${id}`} className="btn btn-hover iq-button">
                                                            <i className="fa fa-play mr-1"></i>
                                                            Play Now
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="block-social-info">
                                                    <ul className="music-play-lists">
                                                        <li className="share" onClick={() => onDelete(`/${id}`)}>
                                                            <span>-</span>
                                                        </li>
                                                        <li>
                                                            <span>+</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                )}
                            </Slider>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FavoritesView;