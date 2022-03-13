import {Fragment} from "react";
import Slider from "../components/main_slider/Slider";
import Favorites from "../components/favorites/Favorites";
import UpcomingMovie from "../components/upcoming_movie/UpcomingMovie";
import TrendingSuggested from "../components/trending_suggested/TrendingSuggested";
import ErrorBoundary from "../components/error_boundary/ErrorBoundary";

const MainPage = (): JSX.Element => {
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
                    <UpcomingMovie/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <TrendingSuggested/>
                </ErrorBoundary>
            </div>
        </Fragment>
    )
}

export default MainPage;