require("dotenv").config()
const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.handler = async (event, context, callback) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
      headers: { Allow: "POST" },
    }
  }

  const payload = JSON.parse(event.body)

  if (!payload.name || !payload.email || !payload.message) {
    return { statusCode: 422, body: "Name, email, and message are required." }
  }

  const { name, email, subject, message } = payload

  const msg = {
    from: email,
    to: process.env.SENDGRID_TO_EMAIL,
    subject: subject ? subject : "Contact Form Submission",
    text: `a message from ${name}`,
    html: message,
  }

  try {
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: "Your message was sent successfully! We'll be in touch.",
    }
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message,
    }
  }
}
