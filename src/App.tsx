import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainPage from "./pages/MainPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Parallex from "./pages/Parallex";

import './styles/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/select2.min.css';
import './styles/select2-bootstrap4.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

const App = () => {
    return (
        <Router>
            <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/:id" element={<Parallex/>}/>
                    <Route path="*" element={<h1>ERROR PAGE</h1>}/>
                </Routes>
            <Footer/>
        </Router>
    );
};

export default App;