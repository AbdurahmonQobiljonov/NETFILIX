import {Fragment} from "react";
import Slider from "../components/main_slider/Slider";
import Favorites from "../components/favorites/Favorites";
import UpcomingMovie from "../components/upcoming_movie/UpcomingMovie";
import TrendingSuggested from "../components/trending_suggested/TrendingSuggested";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";

const MainPage = ():JSX.Element => {
    return (
        <Fragment>
            <ErrorBoundary>
                <Slider/>
            </ErrorBoundary>
            <div className='main-content'>
                <ErrorBoundary>
                    <Favorites/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Favorites/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Favorites/>
                </ErrorBoundary>
                {/*<UpcomingMovie/>*/}
                {/*<TrendingSuggested/>*/}
            </div>
        </Fragment>
    )
}

export default MainPage;