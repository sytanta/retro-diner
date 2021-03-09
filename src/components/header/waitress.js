import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { breakpoints } from '../../theme'

const WaitressContainer = styled.div`
    width: 332px;

    @media (max-width: ${breakpoints.siteMaxWidthPlus}px) {
        display: none;
    }
`

const Waitress = ({ fluid }) => (
    <WaitressContainer>
        <Img fluid={fluid} style={{ marginBottom: '2px', width: '100%' }} />
    </WaitressContainer>
)

Waitress.propTypes = {
    fluid: PropTypes.object.isRequired,
}

export default Waitress
