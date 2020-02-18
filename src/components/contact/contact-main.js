import React from "react"
import styled from "styled-components"

import Form from "./form"

import { colors, fontFamily, spacing, breakpoints } from "../../theme"

const StyledContactForm = styled.div`
  background-color: ${colors.cream};
  border: 8px solid ${colors.lighterBrown};
  border-radius: 10px;
  color: ${colors.brown};
  margin: ${spacing.lg}px 0;
  padding: ${spacing.md}px 32px;
  width: calc(66.66% - 100px);

  h4 {
    font-size: 24px;
    color: ${colors.lighterBrown};
    font-family: ${fontFamily.lobster};
    font-weight: normal;
  }

  p {
    font-family: ${fontFamily.nunito};
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.phablet}px) {
    padding: ${spacing.md}px ${spacing.sm}px;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    width: auto;
  }
`

const ContactMain = () => (
  <StyledContactForm>
    <h1 className="page-header">Contact</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat
      nisl pretium fusce id. Duis ut diam quam nulla porttitor massa id. Nullam
      ac tortor vitae purus faucibus ornare suspendisse sed. Eget aliquet nibh
      praesent tristique.
    </p>
    <h4>Comments and Suggestions? Just fill in the form below.</h4>
    <Form />
  </StyledContactForm>
)

export default ContactMain
