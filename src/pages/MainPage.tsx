import {Fragment} from "react";
import Slider from "../components/main_slider/Slider";
import Favorites from "../components/favorites/Favorites";
import UpcomingMovie from "../components/upcoming_movie/UpcomingMovie";
import Parallex from "../components/parallex/Parallex";
import TrendingSuggested from "../components/trending_suggested/TrendingSuggested";

const MainPage = () => {
    return (
        <Fragment>
            <Slider/>
            <div className='main-content'>
                {/*<Favorites/>*/}
                {/*<UpcomingMovie/>*/}
                {/*<Parallex/>*/}
                {/*<TrendingSuggested/>*/}
            </div>
        </Fragment>
    )
}

export default MainPage;