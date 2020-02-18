import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/blog/container"
import ContactMain from "../components/contact/contact-main"
import ContactDetail from "../components/contact/contact-detail"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact us" />
    <Container spaceBetween noMarginTop>
      <ContactMain />
      <ContactDetail />
    </Container>
  </Layout>
)

export default ContactPage
