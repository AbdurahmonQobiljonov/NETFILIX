import parealax from '../assets/parallax/avatar.jpg';

const Parallex = () => {
    return (
        <section id="parallex" className="parallax-window">
            <div className="container-fluid h-100">
                <div className="row align-items-center justify-content-center h-100 parallaxt-details">
                    <div className="col-lg-4 r-mb-23">
                        <div className="text-left">
                            <a href="javascript:void(0)">
                                <h1 className="parallax-heading">Avatar</h1>
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
                                <span className="text-white ml-3">7.8(Imbd)</span>
                            </div>
                            <div className="movie-time d-flex align-items-center mb-3">
                                <div className="badge badge-secondary p-1 mr-2">9+</div>
                                <span className="text-white">2h 42min</span>
                            </div>
                            <p>
                                A paraplegic Marine dispatched to the moon Pandora on a unique
                                mission becomes torn between following his orders and
                                protecting the world he feels is his home.
                            </p>
                            <div className="parallax-buttons">
                                <a href="#" className="btn btn-hover">Play Now</a>
                                <a href="#" className="btn btn-link">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="parallax-img">
                            <a href="#"><img src={parealax} alt="" className="img-fluid w-100"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Parallex;