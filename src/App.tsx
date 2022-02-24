import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainPage from "./pages/MainPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Parallax from "./pages/Parallax";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './styles/Style.css';
import Form from "./components/form/Form";

const App = () => {
    return (
        <Router>
            <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/:id" element={<Parallax/>}/>
                    <Route path="/shows" element={<h1>shows</h1>}/>
                    <Route path="/movies" element={<h1>movies</h1>}/>
                    <Route path="*" element={<h1>ERROR PAGE</h1>}/>
                </Routes>
            <Footer/>
        </Router>
    );
};

export default App;