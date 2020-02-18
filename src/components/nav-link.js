import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavLink = ({ to, children, ...props }) => (
  <Link to={to} partiallyActive={true} {...props}>
    {children}
  </Link>
)

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default NavLink
