import React, { Component } from "react";


export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Turbo News
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>

                {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
               
                
                </ul>
                </li> */}

                
                <li className="nav-item" ><a className="nav-link" href="/">business</a></li>
                <li className="nav-item" ><a className="nav-link" href="/">entertainment</a></li>
                <li className="nav-item" ><a className="nav-link" href="/">general</a></li>
                <li className="nav-item" ><a className="nav-link" href="/">science</a></li>
                <li className="nav-item" ><a className="nav-link" href="/">sports</a></li>
                <li className="nav-item" ><a className="nav-link" href="/"> technology</a></li>

                
              </ul>

              {/* <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search"  aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
              </form> */}
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
