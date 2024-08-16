import React from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import { Link } from 'react-scroll';

const Navbar = ({ data }) => {
  const scrollY = useScrollPosition(60);

  return scrollY > 600 ? (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-brand pt-3 ms-5">
          <Link to="header" spy={true} smooth={true} offset={0} duration={500}>
            <h2>{data.brand}</h2>
          </Link>
        </div>
        <div className="collapse navbar-collapse me-5" id="Navbar">
          <ul className="navbar-nav ms-auto">
            {data.nav.map((ele, i) => (
              <li key={i} className="nav-item">
                <Link activeClass="active" to={ele.to} spy={true} smooth={true} offset={0} duration={500}>
                  <h1 className="text-danger nav-link p-1 m-1" style={{
                    color: '#d19ba7',
                  }}>{ele.text}</h1>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <div />
  );
};

export default Navbar;
