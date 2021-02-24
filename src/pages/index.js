import React from "react"
import SEO from "./../components/seo"
import Home from "../components/home"

import Navbar from "./../components/layout/navbar"
import Footer from "./../components/layout/footer"

import {
  GlobalStyle,
  ContainerLayout,
  MainContent,
} from "./../components/common"

const IndexPage = () => (
  <>
    <GlobalStyle />

    <MainContent>
      <ContainerLayout>
        <Navbar siteTitle="teraka" />
      </ContainerLayout>
      <SEO title="Home" />
      <Home />
    </MainContent>
  </>
)

export default IndexPage
