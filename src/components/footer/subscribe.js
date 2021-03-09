import React, { useState } from 'react'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { fontFamily, spacing, colors } from '../../theme'

const Container = styled.div`
    color: ${colors.cream};
    font-family: ${fontFamily.nunito};
    font-size: 12px;
    position: relative;
    text-align: center;

    form {
        margin: 0;
    }

    input {
        background: transparent url('/images/interface.png') no-repeat 0 0;
        border: 0;
        display: block;
        font-family: ${fontFamily.nunito};
        font-size: 12px;
        height: 26px;
        margin-bottom: ${spacing.sm}px;
        text-align: center;
        width: 230px;
    }

    input[type='submit'] {
        background: transparent url('/images/button.png') no-repeat 0 -278px;
        border: 0;
        cursor: pointer;
        height: 36px;
        margin: 0 auto;
        width: 215px;

        :hover {
            background-position: 0 -192px;
        }
    }

    span {
        display: block;
        margin: 0 auto;
        position: absolute;
        top: 100%;
        width: 100%;
    }
`

const Subscribe = ({ className }) => {
    const [email, setEmail] = useState('')
    const [subscriptionState, setSubscriptionState] = useState(null)

    const handleEmailChange = (e) => {
        setEmail(e.currentTarget.value)

        setSubscriptionState(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email.trim()) {
            return
        }

        setSubscriptionState(null)

        const result = await addToMailchimp(email)

        setSubscriptionState(result.result && result.result === 'success')
    }

    return (
        <Container>
            <h2>Follow Us By Email</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="subscribe"
                    placeholder="Enter Your Email Here..."
                    onChange={handleEmailChange}
                />
                <input type="submit" value="" />
            </form>
            {subscriptionState === null ? (
                ''
            ) : subscriptionState === true ? (
                <span>Thanks for subscribing!</span>
            ) : (
                <span>Error, please try again!</span>
            )}
        </Container>
    )
}

export default Subscribe
