import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light  bg-secondary">
        <div className="container-fluid">
          <Link href="#">
            <a className="navbar-brand">Navbar</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link href="#">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
              <Link href="#">
                <a className="nav-link">Features</a>
              </Link>
              <Link href="#">
                <a className="nav-link">Pricing</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
