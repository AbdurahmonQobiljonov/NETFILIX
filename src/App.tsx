import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/select2.min.css';
import './styles/select2-bootstrap4.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './styles/Style.css';
import MainPage from "./pages/MainPage";

const App = () => {
    return (
        <Fragment>
            <MainPage/>
        </Fragment>
    );
};

export default App;