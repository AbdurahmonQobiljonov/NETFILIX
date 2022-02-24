import {Link} from "react-router-dom";

import logo from '../../assets/logo.png'

const Header = ():JSX.Element => {
    return (
        <header id="main-header">
            <div className="main-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="navbar navbar-expand-lg navbar-light p-0">
                                <a href="#" className="navbar-toggler c-toggler" data-toggle="collapse"
                                   data-target="#navbarSupportedContent"
                                   aria-controls="navbarSupportedContent" aria-expanded="false"
                                   aria-label="Toggle navigation">
                                    <div className="navbar-toggler-icon" data-toggle="collapse">
                                        <span className="navbar-menu-icon navbar-menu-icon--top"></span>
                                        <span className="navbar-menu-icon navbar-menu-icon--middle"></span>
                                        <span className="navbar-menu-icon navbar-menu-icon--bottom"></span>
                                    </div>
                                </a>
                                <Link to='/' className="navbar-brand">
                                    <img src={logo} className="img-fluid logo" alt="logo"/>
                                </Link>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="menu-main-menu-container">
                                        <ul id="top-menu" className="navbar-nav ml-auto">
                                            <li className="menu-item"><Link to='/' >Home</Link></li>
                                            <li className="menu-item"><Link to='/movies'>Movies</Link></li>
                                            <li className="menu-item"><Link to='/shows'>Shows</Link></li>
                                            <li className="menu-item">
                                                <a href="#">Contact Us</a>
                                                <ul className="sub-menu">
                                                    <li className="menu-item"><a href="#">About Us</a></li>
                                                    <li className="menu-item"><a href="#">Contact</a></li>
                                                    <li className="menu-item"><a href="#">FAQ</a></li>
                                                    <li className="menu-item">
                                                        <a href="#">Privacy-Policy</a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="#">Pricing</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item">
                                                                <a href="#">Gold Membership</a>
                                                            </li>
                                                            <li className="menu-item">
                                                                <a href="#">Silver Membership</a>
                                                            </li>
                                                            <li className="menu-item">
                                                                <a href="#">Bronze Membership</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;