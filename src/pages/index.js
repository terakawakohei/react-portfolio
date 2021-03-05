import React from "react"
import SEO from "./../components/seo"
import Layout from "./../components/layout"

import Hero from "../components/hero"
import About from "../components/about"
import GalerryIntro from "../components/galerryIntro"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero />
    <About />
    <GalerryIntro />
  </Layout>
)

export default IndexPage
