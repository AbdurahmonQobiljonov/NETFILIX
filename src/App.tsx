import './style.css';
import logo from './assets/logo.png';

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>This is a paragraph</p>
             <img src={logo} alt="logo" width='100' height='100'/>
        </div>
    );
};

export default App;