import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
import { HeadingXL } from "../home/style"

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "warriors.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.placeholderImage.childImageSharp.fluid
      return (
        // <HeroBackground>
        //   <HeroImage fluid={imageData}></HeroImage>
        // </HeroBackground>

        <BackgroundImage
          fluid={imageData}
          backgroundColor={`#FFF`}
          style={{
            // Defaults are overwrite-able by setting one or each of the following:
            backgroundSize: "contain",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;

  background-repeat: repeat-y;
  background-size: cover;
`
const HeroWrapper = styled.div`
  position: relative;
  flex: 0 0 auto;
  top: 0;
  padding-top: 3.25rem;
  min-height: 6.5rem;
`
export const HeroImage = styled(BackgroundImage)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: "#000";
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`
const HeroBackground = styled.div`
  z-index: -1;
  background-color: "#000";
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 0;
`

export default StyledBackgroundSection
