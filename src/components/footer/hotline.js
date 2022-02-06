import React from 'react'
import styled from 'styled-components'

import { spacing, breakpoints } from '../../theme'

const Container = styled.div`
    ul {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
            margin: 0 ${spacing.xs}px;
            padding: 0;
            width: auto;
        }

        a {
            display: block;
            height: 39px;
            width: 39px;
        }

        a.facebook {
            background: transparent url('/images/icon.png') no-repeat 0 -228px;
            content: 'facebook';

            :hover {
                background-position: 0 -139px;
            }
        }
        a.twitter {
            background: transparent url('/images/icon.png') no-repeat 0 -584px;
            content: 'twitter';

            :hover {
                background-position: 0 -495px;
            }
        }
        a.googleplus {
            background: transparent url('/images/icon.png') no-repeat 0 -405px;
            content: 'googleplus';

            :hover {
                background-position: 0 -316px;
            }
        }
    }

    @media (max-width: ${breakpoints.mobile}px) {
        text-align: center;

        ul {
            justify-content: center;
        }
    }
`

const Hotline = () => (
    <Container>
        <h2>Delivery Hotline</h2>
        <h3>Call 0-123-456-789</h3>
        <ul>
            <li>
                <a
                    href="https://www.linkedin.com/in/tan-sy-688b8a87/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                >
                    {' '}
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/tan-sy-688b8a87/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter"
                >
                    {' '}
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/tan-sy-688b8a87/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="googleplus"
                >
                    {' '}
                </a>
            </li>
        </ul>
    </Container>
)

export default Hotline
