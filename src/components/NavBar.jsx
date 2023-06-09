import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" end>
            {({ isActive }) => (
              <span className={isActive ? "active" : ""}>V&ITo</span>
            )}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" end>
                  {({ isActive }) => (
                    <span className={isActive ? "active" : ""}>Home</span>
                  )}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/student">
                  {({ isActive }) => (
                    <span className={isActive ? "active" : ""}>Student</span>
                  )}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  {({ isActive }) => (
                    <span className={isActive ? "active" : ""}>About-Us</span>
                  )}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">
                  {({ isActive }) => (
                    <span className={isActive ? "active" : ""}>Contact-Us</span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
