import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Logo from "./header/logo"
import Nav from "./header/nav"

import { breakpoints } from "../theme"

const StyledHeader = styled.header`
  width: 100%;
`

const LogoContainer = styled.div`
  height: 137px;

  @media (max-width: ${breakpoints.siteMaxWidthPlus}px) {
    height: auto;
  }
`

const NavContainer = styled.div`
  background: transparent url("/images/bg-navigation.png");
  background-repeat: repeat-x;
`

const Header = () => (
  <StaticQuery
    query={graphql`
      query header {
        site: site {
          siteMetadata {
            title
          }
        }
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        waitress: file(relativePath: { eq: "waitress.png" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={({ site, logo, waitress }) => (
      <StyledHeader>
        <LogoContainer className="max-width">
          <Logo
            fluid={logo.childImageSharp.fluid}
            alt={site.siteMetadata.title}
          />
        </LogoContainer>
        <NavContainer>
          <Nav waitress={waitress.childImageSharp.fluid} />
        </NavContainer>
      </StyledHeader>
    )}
  />
)

export default Header
