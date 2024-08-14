import React from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import { Link } from 'react-scroll';

const Navbar = ({ data }) => {
  const scrollY = useScrollPosition(60);

  return scrollY > 600 ? (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <button className="navbar-toggler" data-toggle="collapse" data-target="#Navbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-brand pt-3 ml-5">
          <Link to="header" spy={true} smooth={true} offset={0} duration={500}>
            <h2>{data.brand}</h2>
          </Link>
        </div>
        <div className="collapse navbar-collapse mr-5" id="Navbar">
          <ul className="navbar-nav ml-auto">
            {data.nav.map((ele, i) => (
              <li key={i} className="nav-item">
                <Link activeClass="active" to={ele.to} spy={true} smooth={true} offset={0} duration={500}>
                  <div className="nav-link">{ele.text}</div>
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
