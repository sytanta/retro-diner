import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import { colors, fontFamily, spacing, breakpoints } from "../theme"

const StyledContainer = styled.div`
  overflow: hidden;
`

const StyledInnerContainer = styled.div`
  background-color: ${colors.cream};
  border: 8px solid #822619;
  border-radius: 10px;
  margin: ${spacing.lg}px ${spacing.sm}px;
  padding: ${spacing.md}px 32px;

  h1 {
    margin-bottom: 50px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: ${colors.lightBrown};
    font-family: ${fontFamily.lobster};
    font-weight: normal;
    margin: 0 0 50px 0;
    padding: 0;
  }

  h2 {
    font-size: 24px;
    font-weight: normal;
    text-decoration: none;

    &.small {
      font-size: 18px;
    }
  }

  h4 {
    font-family: ${fontFamily.nunito};
    font-size: 16px;
    font-weight: normal;
  }

  p {
    font-family: ${fontFamily.nunito};
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.phablet}px) {
    padding: ${spacing.md}px ${spacing.sm}px;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About us" />
    <StyledContainer className="max-width">
      <StyledInnerContainer>
        <h1 className="page-header">About</h1>
        <ul>
          <li>
            <h2>We have Free Templates for Everyone</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor
              nec feugiat nisl pretium fusce id. Duis ut diam quam nulla
              porttitor massa id. Nullam ac tortor vitae purus faucibus ornare
              suspendisse sed. Eget aliquet nibh praesent tristique.
            </p>
          </li>
          <li>
            <h2>We Have More templates for you</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
              ornare arcu dui vivamus arcu. Volutpat commodo sed egestas egestas
              fringilla phasellus. Luctus venenatis lectus magna fringilla urna
              porttitor rhoncus dolor purus. Dignissim cras tincidunt lobortis
              feugiat vivamus at augue eget.
            </p>
          </li>
          <li>
            <h2>Be part of Our Community</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius
              duis at consectetur lorem.
            </p>
          </li>
          <li>
            <h2 className="small">Template Details</h2>
            <h4>Design version 10</h4>
            <h4>Code version 2</h4>
            <p>Consequat semper viverra nam libero justo laoreet sit amet.</p>
            <p>Potenti nullam ac tortor vitae purus faucibus ornare.</p>
            <p>
              Massa vitae tortor condimentum lacinia quis vel. Ut eu sem integer
              vitae justo eget.
            </p>
          </li>
        </ul>
      </StyledInnerContainer>
    </StyledContainer>
  </Layout>
)

export default AboutPage
