import logo from './logo-iphonefamily.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        {/* <ItemListContainer greeting={"esto es un itemListContainer"}/> */}
        <ItemDetailContainer id={1} /> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          iPhone Family Arg
        </p>
        <button className="btn btn-primary App-link"
          target="_blank"
          rel="noopener noreferrer" 
          ><a className='link' href="https://agusmaio.github.io/"> </a></button>
      </header>
    </div>
  );
}

export default App;
