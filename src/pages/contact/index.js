import React from "react"
import { navigate } from "gatsby-link"
import Layout from "../../components/Layout"
import { make as Button } from "../../components/Button.bs"
import { make as Hero } from "../../components/Hero.bs"
import { make as ContactGraphic } from "../../components/ContactGraphic.bs"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <Hero
          title="Contact Us"
          bio="Questions about the conference, venue, sponsorships or anything else on your mind? Let us know by using the form or the email below."
          graphic={
            <form
              style={{ width: "55%" }}
              name="contact"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}>
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div className="field">
                <label htmlFor={"name"}>Your name</label>
                <div className="control">
                  <input
                    className="input"
                    type={"text"}
                    name={"name"}
                    onChange={this.handleChange}
                    id={"name"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor={"email"}>Email</label>
                <div className="control">
                  <input
                    className="input"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor={"message"}>Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name={"message"}
                    onChange={this.handleChange}
                    id={"message"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <Button mode="button" label="Send" />
              </div>
            </form>
          }
          ctaLabel="Contact Us"
          href="mailto:info@chicagojs.org"></Hero>
      </Layout>
    )
  }
}
