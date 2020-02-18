import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"

import { colors, fontFamily, spacing } from "../../theme"
import { netlifyContactFormEndpoint } from "../../context/api-endpoints"

const Container = styled.div`
  &,
  input,
  textarea {
    font-family: ${fontFamily.nunito};
  }

  label span {
    display: block;
    color: ${colors.brown};
    font-size: 16px;
    font-weight: normal;
  }

  label input {
    border: 1px solid ${colors.lighterBrown};
    height: 20px;
    max-width: 286px;
    margin-bottom: ${spacing.sm}px;
    padding: ${spacing.xs}px;
    width: 90%;
  }

  label textarea {
    border: 1px solid ${colors.lighterBrown};
    margin-bottom: ${spacing.xs}px;
    min-height: 200px;
    padding: ${spacing.xs}px;
    resize: vertical;
    width: 90%;
  }

  input[type="submit"] {
    background: transparent url("/images/button.png") no-repeat 0 -450px;
    border: 0;
    cursor: pointer;
    display: block;
    height: 36px;
    margin-bottom: ${spacing.md}px;
    padding: ${spacing.xs}px;
    width: 101px;

    :hover {
      background-position: 0 -364px;
    }
  }
`

const Form = ({ className }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [messageState, setMessageState] = useState(null)

  const onChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })

    setMessageState(null)
  }

  const submitForm = async e => {
    e.preventDefault()

    setMessageState(null)

    try {
      const response = await axios.post(netlifyContactFormEndpoint, formState)

      if (response.status !== 200) {
        // Send email unsuccessfully
        setMessageState(false)
      } else {
        setMessageState(true)
      }
    } catch (e) {
      setMessageState(false)
    }
  }

  return (
    <Container>
      <form onSubmit={submitForm}>
        <label htmlFor="name">
          {" "}
          <span className="text">Your Name:</span>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={onChange}
          />
        </label>
        <label htmlFor="email">
          {" "}
          <span>Your E-mail:</span>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={onChange}
          />
        </label>
        <label htmlFor="subject">
          {" "}
          <span>Subject:</span>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            onChange={onChange}
          />
        </label>
        <label htmlFor="message">
          {" "}
          <span>Your Message:</span>
          <textarea
            name="message"
            id="message"
            required
            onChange={onChange}
          ></textarea>
        </label>
        <input type="submit" value="" />
        {messageState === null ? (
          ""
        ) : messageState === true ? (
          <span>Your message was sent successfully! We'll be in touch.</span>
        ) : (
          <span>Error, please try again!</span>
        )}
      </form>
    </Container>
  )
}

export default Form
