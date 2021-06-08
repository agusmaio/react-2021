import logo from './logo-iphonefamily.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          iPhone Family Arg
        </p>
        <button className="btn btn-primary App-link"
          target="_blank"
          rel="noopener noreferrer" 
          ><a className='link' href="https://agusmaio.github.io/">Ingresa al Sitio</a></button>
      </header>
    </div>
  );
}

export default App;
