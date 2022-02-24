import {Fragment} from "react";
import Slider from "../components/main_slider/Slider";
import Favorites from "../components/favorites/Favorites";
import UpcomingMovie from "../components/upcoming_movie/UpcomingMovie";
import TrendingSuggested from "../components/trending_suggested/TrendingSuggested";

const MainPage = ():JSX.Element => {
    return (
        <Fragment>
            <Slider/>
            <div className='main-content'>
                <Favorites/>
                <Favorites/>
                <Favorites/>
                {/*<UpcomingMovie/>*/}
                {/*<TrendingSuggested/>*/}
            </div>
        </Fragment>
    )
}

export default MainPage;