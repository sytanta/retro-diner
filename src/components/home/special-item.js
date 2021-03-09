import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
    border: 8px solid #822619;
    border-radius: 10px;
`

const SpecialItem = ({ linkTo, fluid, alt }) => (
    <Container>
        <Link to={linkTo}>
            <Img fluid={fluid} width="284" alt={alt} />
        </Link>
    </Container>
)

SpecialItem.propTypes = {
    linkTo: PropTypes.string.isRequired,
    fluid: PropTypes.object.isRequired,
    alt: PropTypes.string,
}

export default SpecialItem
