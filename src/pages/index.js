import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import SEO from '../components/seo'
import Specials from '../components/home/specials'

const StyledContainer = styled.div`
    overflow: hidden;
`

const IndexPage = ({ data }) => (
    <>
        <SEO title="Home" />
        <StyledContainer className="featured max-width">
            <Link to="/menu/burger">
                <Img
                    fluid={data.featuredImage.childImageSharp.fluid}
                    alt="Burger specials"
                    style={{ textAlign: 'center' }}
                />
            </Link>
            <h2 className="page-header">Welcome to Retro Diner!</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Parturient montes nascetur ridiculus mus mauris. Scelerisque
                purus semper eget duis. Faucibus vitae aliquet nec ullamcorper
                sit. Neque vitae tempus quam pellentesque nec nam aliquam sem.
                Quis varius quam quisque id diam vel quam elementum. Quis lectus
                nulla at volutpat.
            </p>
            <Specials images={data} />
        </StyledContainer>
    </>
)

export default IndexPage

export const indexQuery = graphql`
    query index {
        featuredImage: file(relativePath: { eq: "burger-specials.png" }) {
            childImageSharp {
                fluid(maxWidth: 960, quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        hotdogs: file(relativePath: { eq: "hotdogs.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 284, quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        shakes: file(relativePath: { eq: "shakes.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 284, quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        breakfast: file(relativePath: { eq: "breakfast.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 284, quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`
