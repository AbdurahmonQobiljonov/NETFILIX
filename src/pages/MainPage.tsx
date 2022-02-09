import {Fragment} from "react";
import Header from "../components/header/Header";
import Slider from "../components/main_slider/Slider";
import Favorites from "../components/favorites/Favorites";
import UpcomingMovie from "../components/upcoming_movie/UpcomingMovie";
import Parallex from "../components/parallex/Parallex";
import Trending from "../components/trending/Trending";
import TrendingSuggested from "../components/trending_suggested/TrendingSuggested";

const MainPage = () => {
    return (
        <Fragment>
            <Header/>
            <Slider/>
            {/*<div className='main-content'>*/}
            {/*    <Favorites/>*/}
            {/*    <UpcomingMovie/>*/}
            {/*    <Parallex/>*/}
                <Trending/>
            {/*    <TrendingSuggested/>*/}
            {/*</div>*/}
        </Fragment>
    )
}

export default MainPage;