const Trending = () => {
    return (
        <section id="iq-trending" className="s-margin">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 overflow-hidden">
                        <div className="iq-main-header d-flex align-items-center justify-content-between">
                            <h4 className="main-title">Trending</h4>
                        </div>
                        <div className="trending-contens">
                            <ul id="trending-slider-nav" className="list-inline p-0 mb-0 row align-items-center">
                                <li>
                                    <a href="javascript:void(0);">
                                        <div className="movie-slick position-relative">
                                            {/*<img src="images/trending/01.jpg" className="img-fluid" alt="">*/}
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div className="movie-slick position-relative">
                                            {/*<img src="images/trending/02.jpg" className="img-fluid" alt="">*/}
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div className="movie-slick position-relative">
                                            {/*<img src="images/trending/03.jpg" className="img-fluid" alt="">*/}
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div className="movie-slick position-relative">
                                            {/*<img src="images/trending/04.jpg" className="img-fluid" alt="">*/}
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div className="movie-slick position-relative">
                                            {/*<img src="images/trending/05.jpg" className="img-fluid" alt="">*/}
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div className="movie-slick position-relative">
                                            {/*<img src="images/trending/06.jpg" className="img-fluid" alt="">*/}
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <ul id="trending-slider" className="list-inline p-0 m-0 d-flex align-items-center">
                                <li>
                                    <div className="tranding-block position-relative"
                                         // style={{backgroundImage: 'url(images/trending/01.jpg)'}}
                                    >
                                        <div className="trending-custom-tab">
                                            <div className="tab-title-info position-relative">
                                                <ul className="trending-pills d-flex nav nav-pills justify-content-center align-items-center text-center"
                                                    role="tablist">
                                                    <li className="nav-item">
                                                        <a href="#trending-data1" className="nav-link active show"
                                                           data-toggle="pill" role="tab" aria-selected="true">
                                                            Overview
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#trending-data2" className="nav-link"
                                                           data-toggle="pill" role="tab" aria-selected="false">
                                                            Episodes
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#trending-data3" className="nav-link"
                                                           data-toggle="pill" role="tab" aria-selected="false">
                                                            Trailers
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#trending-data4" className="nav-link"
                                                           data-toggle="pill" role="tab" aria-selected="false">
                                                            Similiar Like This
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="trending-content">
                                                <div id="trending-data1"
                                                     className="overview-tab tab-pane fade active show">
                                                    <div
                                                        className="trending-info align-items-center w-100 animated fadeInUp">
                                                        <a href="javascript:void(0);" tabIndex={0}>
                                                            <div className="res-logo">
                                                                <div className="channel-logo">
                                                                    {/*<img src="images/logo.png" className="c-logo"*/}
                                                                    {/*     alt="">*/}
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <h1 className="trending-text big-title text-uppercase">The
                                                            Crown</h1>
                                                        <div
                                                            className="d-flex align-items-center text-white text-detail">
                                                            <span className="badge badge-secondary p-3">18+</span>
                                                            <span className="ml-3">3 Seasons</span>
                                                            <span className="trending-year">2020</span>
                                                        </div>
                                                        <div className="d-flex align-items-center series mb-4">
                                                            <a href="javascript:void(0);">
                                                                {/*<img src="images/trending/trending-label.png"*/}
                                                                {/*     className="img-fluid" alt="">*/}
                                                            </a>
                                                            <span className="text-gold ml-3">#2 in Series Today</span>
                                                        </div>
                                                        <p className="trending-dec">
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                                                            facere sapiente optio dolor aperiam impedit sint molestiae
                                                            delectus, qui magni 1500 thid had that.
                                                        </p>
                                                        <div className="p-btns">
                                                            <div className="d-flex align-items-center p-0">
                                                                <a href="#" className="btn btn-hover mr-2" tabIndex={0}>
                                                                    <i className="fa fa-play mr-2"></i>
                                                                    Play Now
                                                                </a>
                                                                <a href="#" className="btn btn-link" tabIndex={0}>
                                                                    <i className="fa fa-plus pr-2"></i>
                                                                    My List
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="trending-list mt-4">
                                                            <div className="text-primary title">
                                                                Starring :
                                                                <span className="text-body">
                                                                  Clarie Foy, Olivia Colman, Imelda Staunton
                                                                </span>
                                                            </div>
                                                            <div className="text-primary title">
                                                                Genres :
                                                                <span className="text-body">
                                                                  Biography
                                                                </span>
                                                            </div>
                                                            <div className="text-primary title">
                                                                Creators :
                                                                <span className="text-body">
                                                                  Peter Morgan
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="trending-data2" className="overlay-tab tab-pane fade">
                                                    <div
                                                        className="trending-info align-items-center w-100 animated fadeInUp">
                                                        <a href="#" tabIndex={0}>
                                                            <div className="channel-logo">
                                                                {/*<img src="images/logo.png" className="c-logo" alt="">*/}
                                                            </div>
                                                        </a>
                                                        <h1 className="trending-text big-title text-uppercase">the
                                                            Crown</h1>
                                                        <div
                                                            className="d-flex align-items-center text-white text-detail mb-4">
                                                              <span className="season_date">
                                                                2 Seasons
                                                              </span>
                                                            <span className="trending-year">Feb 2019</span>
                                                        </div>
                                                        <div className="iq-custom-select d-inline-block sea-epi">
                                                            <select name="Seasons"
                                                                    className="form-control season-select">
                                                                <option value="Season1">Season 1</option>
                                                                <option value="Season2">Season 2</option>
                                                                <option value="Season3">Season 3</option>
                                                                <option value="Season4">Season 4</option>
                                                                <option value="Season4">Season 4</option>
                                                                <option value="Season6">Season 6</option>
                                                            </select>
                                                        </div>

                                                        <div className="episodes-contens mt-4">
                                                            <div
                                                                className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/ce1.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Episode 1</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/ce2.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Episode 2</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/ce3.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Episode 3</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/ce4.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Episode 4</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/ce5.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Episode 5</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div id="trending-data3" className="overlay-tab tab-pane fade">
                                                    <div
                                                        className="trending-info align-items-center w-100 animated fadeInUp">
                                                        <a href="#" tabIndex={0}>
                                                            <div className="channel-logo">
                                                                {/*<img src="images/logo.png" className="c-logo" alt="">*/}
                                                            </div>
                                                        </a>
                                                        <h1 className="trending-text big-title text-uppercase">the
                                                            crown</h1>
                                                        <div className="episodes-contens mt-4">
                                                            <div
                                                                className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/ce1.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Trailer 1</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/ce2.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Trailer 2</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/ce3.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Trailer 3</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/ce4.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Trailer 4</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/ce5.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Trailer 5</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="trending-data4" className="overlay-tab tab-pane fade">
                                                    <div
                                                        className="trending-info align-items-center w-100 animated fadeInUp">
                                                        <a href="#" tabIndex={0}>
                                                            <div className="channel-logo">
                                                                {/*<img src="images/logo.png" className="c-logo" alt="">*/}
                                                            </div>
                                                        </a>
                                                        <h1 className="trending-text big-title text-uppercase">the
                                                            Crown</h1>
                                                        <div className="episodes-contens mt-4">
                                                            <div
                                                                className="owl-carousel owl-theme episodes-slider1 list-inline p-0 m-0">
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/bbt3.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Trailer 1</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/fe2.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Trailer 2</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/m4.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Trailer 3</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/pb3.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Trailer 4</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="e-item">
                                                                    <div className="block-image position-relative">
                                                                        <a href="#">
                                                                            {/*<img src="images/episodes/n5.jpg"*/}
                                                                            {/*     className="img-fluid" alt="">*/}
                                                                        </a>
                                                                        <div className="episode-play-info">
                                                                            <div className="episode-play">
                                                                                <a href="#" tabIndex={0}>
                                                                                    <i className="fa fa-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="episodes-description text-body">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between">
                                                                            <a href="#">Trailer 5</a>
                                                                            <span className="text-primary">2.25m</span>
                                                                        </div>
                                                                        <p className="mb-0">Lorem ipsum dolor, sit amet
                                                                            consectetur adipisicing elit. Cumque aliquam
                                                                            quisquam iure tempore earum sequi.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending;