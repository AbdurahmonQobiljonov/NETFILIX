import {Link} from 'react-router-dom';

import footer from '../../assets/footer/01.jpg';
import footer1 from '../../assets/footer/02.jpg';

const Footer = () => {

    return (
        <footer className="iq-bg-dark">
            <div className="footer-top">
                <div className="container-fluid">
                    <div className="row footer-standard">
                        <div className="col-lg-5">
                            <div className="widget text-left">
                                <div>
                                    <ul className="menu p-0">
                                        <li><Link to='/'>Terms of Use</Link></li>
                                        <li><Link to='/'>Privacy-Policy</Link></li>
                                        <li><Link to='/'>FAQ</Link></li>1
                                        <li><Link to='/'>Watch List</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget text-left">
                                <div className="textwidget">
                                    <p><small>This is Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Obcaecati, quo tempore. Quasi rem rerum est in nulla atque quibusdam illo. this
                                        is footer and simple tsesxij is writen jkd. fsek hello how are you. please like
                                        and subscribe. footer ends .</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <h6 className="footer-link-title">
                                Follow Us:
                            </h6>
                            <ul className="info-share">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="widget text-left">
                                <div className="textwidget">
                                    <h6 className="footer-link-title">
                                        NetFlix App
                                    </h6>
                                    <div className="d-flex align-items-center">
                                        <a href="https://play.google.com/store/apps/details?id=com.netflix.mediaclient"><img src={footer} alt=""/></a>
                                        <br/>
                                        <a href="https://apps.apple.com/us/app/netflix/id363590051" className="mx-5"><img src={footer1} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;