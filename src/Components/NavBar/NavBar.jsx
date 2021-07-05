import { CardWidget } from '../CardWidget/CardWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light '>
      {/* <CardWidget /> */}
      {/* <a class="navbar-brand" href="#">Navbar</a> */}
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
          <ItemListContainer/>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div
        className='collapse navbar-collapse div-navBar'
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <NavLink className='nav-link' to={'/'}>
              Home <span className='sr-only'></span>
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink className='nav-link' to={'/'}>
              List
            </NavLink>
          </li>
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          ></input>
          <button
            className='btn btn-outline-success my-2 my-sm-0'
            type='submit'
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
