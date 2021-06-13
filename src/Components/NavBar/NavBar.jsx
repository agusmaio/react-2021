import { CardWidget } from "../CardWidget/CardWidget"

export const NavBar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <CardWidget/>    
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse div-navBar" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Inicio <span className="sr-only"></span></a>
            </li>
            
            <li className="nav-item">
                <a className="nav-link" href="#">Nav</a>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
           
        </div>
        
        </nav>
)
}
