import React from "react"
import SEO from "./../components/seo"
import Home from "../components/home"

import Navbar from "./../components/layout/navbar"
import Footer from "./../components/layout/footer"
import BackgroundImage from "./../components/BackgroundImage"

import {
  GlobalStyle,
  ContainerLayout,
  MainContent,
} from "./../components/common"

const IndexPage = () => (
  <>
    <GlobalStyle />
    <BackgroundImage>
      <MainContent>
        <ContainerLayout>
          <Navbar siteTitle="teraka" />
        </ContainerLayout>
        <SEO title="Home" />
        <Home />
      </MainContent>
    </BackgroundImage>
  </>
)

export default IndexPage
