import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>Hello i'm Ruaridh McGuckin</h1>
        <h2>A full stack developer learning Gatsby js</h2>
        <p>
          <Link to="/contact">Want to work with me? Reach out.</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
