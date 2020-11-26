import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact</h1>
        <ul>
          <li>
            <strong>Email: </strong>
            <a href="mailto:contact@ruaridhmcguckin.ie">
              contact@ruaridhmcguckin.ie
            </a>
          </li>
          <li>
            <strong>Web: </strong>
            <a href="http://Ruaridhmcguckin.ie">ruaridhmcguckin.ie</a>
          </li>
        </ul>
      </Layout>
    </div>
  )
}

export default ContactPage
