import React from "react"
import SEO from "./../components/seo"
import Layout from "./../components/layout"
import Home from "../components/home"

import Navbar from "./../components/layout/navbar"
import Footer from "./../components/layout/footer"
import BackgroundImage from "./../components/BackgroundImage"
import Hero from "../components/hero"
import About from "../components/about"
import GalerryIntro from "../components/galerryIntro"

import {
  GlobalStyle,
  ContainerLayout,
  MainContent,
} from "./../components/common"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero />
    <About />
    <GalerryIntro />
  </Layout>
)

export default IndexPage
