import React from 'react'

import SEO from '../components/seo'
import Container from '../components/blog/container'
import ContactMain from '../components/contact/contact-main'
import ContactDetail from '../components/contact/contact-detail'

const ContactPage = () => (
    <>
        <SEO title="Contact us" />
        <Container spaceBetween noMarginTop>
            <ContactMain />
            <ContactDetail />
        </Container>
    </>
)

export default ContactPage
