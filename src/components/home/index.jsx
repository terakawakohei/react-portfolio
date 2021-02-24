import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  HomeSection,
  Avatar,
  Title,
  Text,
  SubTitle,
  HeadingXL,
  BackgroundImage,
  ImageOverlay,
} from "./style"
import { SectionIntro, ContainerLayout } from "../common"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "warriors.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <BackgroundImage
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="hero image"
      />{" "}
      <Title>
        <HeadingXL>Terakawa Kohei </HeadingXL>
      </Title>
      {/* <SectionIntro>
        <ContainerLayout>
          <HomeSection>
            <div>
              <Title>
                <HeadingXL>Terakawa Kohei </HeadingXL>
              </Title>
            </div>
          </HomeSection>
        </ContainerLayout>
      </SectionIntro> */}
    </>
  )
}

export default Home
