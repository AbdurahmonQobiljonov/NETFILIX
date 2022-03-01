import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './styles/Style.css';

const MainPage = lazy(() => import("./pages/MainPage"));
const Parallax = lazy(() => import("./pages/Parallax"));

const App = () => {
    return (
        <Router>
            <Header/>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/:id" element={<Parallax/>}/>
                    <Route path="/shows" element={<h1>shows</h1>}/>
                    <Route path="/movies" element={<h1>movies</h1>}/>
                    <Route path="*" element={<h1>ERROR PAGE</h1>}/>
                </Routes>
            </Suspense>
            <Footer/>
        </Router>
    );
};

export default App;