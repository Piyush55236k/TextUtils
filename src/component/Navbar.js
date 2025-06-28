import PropTypes from 'prop-types'
import CapsuleToggle from './CapsuleToggle'
import { BrowserRouter, Routes, Route, Link } from "react-router";
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark text-white">
  <div className="container-fluid  text-white">
    <Link className="navbar-brand text-white" to="/">{props.title}</Link>
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation text-white bg-body-grey">
      <span className="navbar-toggler-icon text-white bg-body-grey"></span>
    </button>
   
    <div className="collapse navbar-collapse text-white filter-invert(1)" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Home">Home</Link>
        </li><li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Contact">Contact</Link>
        </li>
        <li></li>
        
      </ul>
        <p className="d-flex align-items-center my-2 gap-1 fs-3 fs-md-2">
   Mode
  <CapsuleToggle />
</p>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={
  tttle: PropTypes.string
}
export default Navbar