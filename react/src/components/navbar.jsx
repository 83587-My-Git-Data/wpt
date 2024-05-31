import { Link } from "react-router-dom";
import Properties from "../screens/Properties";
import Users from "../screens/Users";
import Bookings from "../screens/Bookings";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark p-3">
        <Link className="navbar-brand text-white" href="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/Home' className="nav-item nav-link active text-white">Home</Link>
            <Link to='/Properties' className="nav-item nav-link text-white">
              Properties
            </Link>
            <Link to='/Users' className="nav-item nav-link text-white">
              Users
            </Link>
            <Link to='/Bookings' className="nav-item nav-link text-white">
              Bookings
            </Link>
            <Link to='/login' className="nav-item nav-link text-white">Logout</Link>
          </div>
        </div>
        <form className="form-inline d-flex">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;
