import {Fragment} from "react";
import Header from "../components/header/Header";
import Slider from "../components/main_slider/Slider";
import Favorites from "../components/favorites/Favorites";
import UpcomingMovie from "../components/upcoming_movie/UpcomingMovie";
import Topten from "../components/topten/Topten";
import ToptenSuggest from "../components/topten_suggested/ToptenSuggest";
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
            {/*    <Topten/>*/}
            {/*    <ToptenSuggest/>*/}
            {/*    <Parallex/>*/}
            {/*    <Trending/>*/}
            {/*    <TrendingSuggested/>*/}
            {/*</div>*/}
        </Fragment>
    )
}

export default MainPage;