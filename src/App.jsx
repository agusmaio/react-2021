import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo-iphonefamily.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import route from 'color-convert/route';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <NavBar />
        </header>
        <Switch>
          <Route exact path='/' component={ItemListContainer} />
          <Route exact path='/category/:id' component={ItemListContainer} />
          <Route exact path='/item/:id' component={ItemDetailContainer} />
          {/* <ItemDetailContainer id={1} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
