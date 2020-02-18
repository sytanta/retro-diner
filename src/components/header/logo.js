import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { spacing, breakpoints } from "../../theme"

const Container = styled.div`
  max-width: 513px;
  padding-top: ${spacing.xl}px;
  width: 100%;

  @media (max-width: ${breakpoints.siteMaxWidthPlus}px) {
    padding: ${spacing.md}px 0;
  }

  @media (max-width: ${breakpoints.phablet}px) {
    padding: ${spacing.sm}px 0;
  }
`

const Logo = ({ alt, fluid }) => (
  <Container>
    <Link to="/">
      <Img
        fluid={fluid}
        style={{
          background: "transparent",
          overflow: "hidden",
          width: "100%",
        }}
        alt={alt}
      />
    </Link>
  </Container>
)

Logo.propTypes = {
  alt: PropTypes.string,
  fluid: PropTypes.object.isRequired,
}

export default Logo
