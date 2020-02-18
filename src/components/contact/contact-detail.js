import React from "react"
import styled from "styled-components"

// import DownloadButton from "../download-button"

import { colors, fontFamily, spacing, breakpoints } from "../../theme"

const Container = styled.div`
  margin-top: ${spacing.lg}px;
  padding-top: ${spacing.lg}px;
  text-align: center;
  width: 33.33%;

  h1 {
    margin-bottom: ${spacing.sm}px;
  }

  span {
    color: ${colors.brown};
    display: block;
    font-family: ${fontFamily.nunito};
    font-size: 16px;
    font-weight: normal;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    width: auto;
  }
`

const ContactDetail = () => (
  <Container>
    <h1 className="title">Open Everyday</h1>
    <span>including holidays</span> <span>from 8AM until 1AM</span>
    <h1 className="title">Address</h1>
    <span>Retro Diner Restaurant</span> <span>2281 Ash Street</span>{" "}
    <span>Dallas, TX 75212</span>
    <h1 className="title">Phone Number</h1>
    <span>972-879-4317</span>
    <h1 className="title">Open Everyday</h1>
    <span>including holidays</span> <span>from 8AM until 1AM</span>{" "}
    {/* <DownloadButton downloadLink="/">Download Our Menus</DownloadButton> */}
  </Container>
)

export default ContactDetail
