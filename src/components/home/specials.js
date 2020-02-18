import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { spacing } from "../../theme"

import SpecialItem from "./special-item"

const Specials = ({ className, images }) => (
  <ul className={className}>
    <li>
      <SpecialItem
        linkTo="/menu/hotdog"
        fluid={images.hotdogs.childImageSharp.fluid}
        alt="Hotdogs"
      />
    </li>
    <li>
      <SpecialItem
        linkTo="/menu/shake"
        fluid={images.shakes.childImageSharp.fluid}
        alt="Shakes"
      />
    </li>
    <li>
      <SpecialItem
        linkTo="/menu/breakfast"
        fluid={images.breakfast.childImageSharp.fluid}
        alt="Breakfast"
      />
    </li>
  </ul>
)

Specials.propTypes = {
  images: PropTypes.object.isRequired,
  className: PropTypes.string,
}

const StyledSpecials = styled(Specials)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  list-style-type: none;
  margin: ${spacing.xl}px 0 0 0;
  padding: 0;

  li {
    margin-bottom: ${spacing.sm}px;
    padding: 0 ${spacing.xs}px;
    text-align: center;
    width: 284px;
  }
`

export default StyledSpecials
