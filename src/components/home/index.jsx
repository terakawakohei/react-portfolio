import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  HomeSection,
  Avatar,
  Title,
  Text,
  SubTitle,
  HeadingXL,
  Overlay,
  BackgroundImage,
  ImageOverlay,
} from "./style"
import { SectionIntro, ContainerLayout } from "../common"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "heat.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Overlay />
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
