import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Feather, Smile } from "react-feather"

import { NavbarElement, NavbarList, NavbarLogo } from "./style"

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
        <div className="main-navigation">
          <NavbarList>
            <li>
              <Link to="/" className="pop-link" activeClassName="active">
                {" "}
                <span> about </span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/works" className="pop-link" activeClassName="active">
                {" "}
                <span> original </span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/fanarts" className="pop-link" activeClassName="active">
                {" "}
                <span> fanart </span>{" "}
              </Link>
            </li>
          </NavbarList>
        </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
