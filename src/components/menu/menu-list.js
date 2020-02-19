import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import NLink from "../nav-link"
import DownloadButton from "../download-button"

import { colors, fontFamily, spacing, breakpoints } from "../../theme"

const activeLinkStyle = {
  color: colors.darkBlue,
}

const NavLink = ({ to, children, ...props }) => (
  <NLink to={to} activeStyle={activeLinkStyle} {...props}>
    {children}
  </NLink>
)

const Container = styled.div`
  margin-top: ${spacing.lg}px;
  padding-top: ${spacing.lg}px;
  text-align: center;
  width: 33.33%;

  h1 {
    margin-bottom: ${spacing.sm}px;
  }

  ul {
    list-style-type: none;
    margin: 50px 0 0 0;
    padding: 0 ${spacing.md}px 0;
  }

  li {
    border-style: solid;
    border-color: ${colors.lighterBrown};
    border-left: none;
    border-right: none;
    border-top: none;
    height: 50px;
    line-height: 50px;
    padding: ${spacing.sm}px;

    :first-child {
      border-style: solid;
      border-color: ${colors.lighterBrown};
      border-left: none;
      border-right: none;
    }

    a {
      color: ${colors.lighterBrown};
      font-family: ${fontFamily.limelight};
      font-size: 32px;
      font-weight: normal;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;

      :hover {
        color: ${colors.darkBlue};
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    width: auto;
  }
`

const MenuList = ({ menus, menuFileLink }) => (
  <Container>
    <h1 className="title">Menu</h1>
    <ul>
      {menus.map(({ node: menu }) => (
        <li key={menu.id}>
          <NavLink to={`/menu/${menu.frontmatter.slug}`}>
            {menu.frontmatter.title}
          </NavLink>
        </li>
      ))}
    </ul>
    <DownloadButton downloadLink={menuFileLink}>
      Download Our Menu
    </DownloadButton>
  </Container>
)

MenuList.propTypes = {
  menus: PropTypes.array.isRequired,
  menuFileLink: PropTypes.string.isRequired,
}

export default MenuList
