import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {setActivePortal} from "../../redux/actions/actions";

import logo from '../../assets/logo.png'
import React from "react";

const Header = ():JSX.Element => {
    const dispatch = useDispatch();

    const openModal = (e: React.MouseEvent<HTMLSpanElement>):void => {
        e.stopPropagation();
        // @ts-ignore
        dispatch(setActivePortal(true));
    }

    return (
        <header id="main-header">
            <div className="main-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="navbar navbar-expand-lg navbar-light p-0">
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
                                            <li  className="menu-item"
                                                // @ts-ignore
                                                 onClick={(e)=>openModal(e)}>
                                                <a className='add'>ADD MOVIE</a></li>
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