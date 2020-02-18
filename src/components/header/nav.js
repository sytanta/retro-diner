import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GoThreeBars } from "react-icons/go"

import { colors, fontFamily, spacing, breakpoints } from "../../theme"

import NLink from "../nav-link"
import Waitress from "./waitress"

const activeNavLinkStyle = {
  color: colors.cream,
}

const NavLink = ({ to, children, ...props }) => (
  <NLink to={to} activeStyle={activeNavLinkStyle} {...props}>
    {children}
  </NLink>
)

const ContainerRoot = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  height: 70px;

  @media (max-width: ${breakpoints.tablet}px) {
    &.max-width {
      padding: 0 !important;
    }
  }
`

const NavContainer = styled.nav`
  color: ${colors.lightBlue};
  display: flex;
  justify-content: space-between;
  position: relative;

  & > * {
    height: 68px;
  }

  ul.navigation {
    align-items: center;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    font-family: ${fontFamily.lobster};
    float: left;
    margin: 0;

    &:first-child a {
      padding-left: 0;
    }
  }

  a {
    color: ${colors.lightBlue};
    font-size: 21px;
    padding: 0 ${spacing.lg}px;
    text-decoration: none;

    :hover {
      color: ${colors.cream};
    }
  }

  .nav-icon {
    align-items: center;
    display: none;

    button {
      background: transparent;
      border: none;
      color: ${colors.lightBlue};
      font-size: 24px;
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    justify-content: end;
    width: 100%;

    ul.navigation {
      display: block;
      padding-left: ${spacing.md}px;
      position: absolute;
      width: 100%;
      z-index: 10;

      li {
        display: flex;
      }

      li:not(:first-child) {
        background: ${colors.darkBlue};
        display: none;
      }

      li {
        align-items: center;
        float: none;
        height: 68px;
        padding-left: 20px;
      }

      &.nav-mobile {
        li {
          display: flex;
        }
      }
    }

    a {
      padding: 0;
      width: 100%;
    }

    .nav-icon {
      display: flex;
      padding-right: ${spacing.sm}px;
      z-index: 11;
    }
  }
`

const Nav = ({ waitress }) => {
  const [navMobile, setNavMobile] = useState(false)

  const toggleNavMobile = () => {
    setNavMobile(!navMobile)
  }

  return (
    <ContainerRoot className="max-width">
      <NavContainer>
        <ul className={`navigation ${navMobile ? "nav-mobile" : ""}`}>
          <li>
            <NavLink to="/" partiallyActive={false}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon">
          <button onClick={toggleNavMobile}>
            <GoThreeBars />
          </button>
        </div>
      </NavContainer>
      <Waitress fluid={waitress} />
    </ContainerRoot>
  )
}

Nav.propTypes = {
  waitress: PropTypes.object.isRequired,
}

export default Nav