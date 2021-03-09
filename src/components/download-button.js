import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, fontFamily, spacing } from '../theme'

const Button = styled.a`
    color: ${colors.cream};
    background-color: ${colors.lighterBrown};
    border: 4px solid ${colors.darkBlue};
    border-radius: 6px;
    display: block;
    font-family: ${fontFamily.lobster};
    font-size: 26px;
    height: 40px;
    line-height: 40px;
    margin: ${spacing.xl}px auto 0;
    max-width: 278px;
    text-decoration: none;
    width: 100%;

    :hover {
        background-color: #a83121;
        border-color: #238387;
    }
`

const DownloadButton = ({ downloadLink, children }) => (
    <Button href={downloadLink} target="_blank" rel="noopener noreferrer">
        {children}
    </Button>
)

DownloadButton.propTypes = {
    downloadLink: PropTypes.string.isRequired,
}

export default DownloadButton
