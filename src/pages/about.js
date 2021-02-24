import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import { Calendar, Clock } from "react-feather"
import Img from "gatsby-image"
import { SectionIntro, ContainerLayout, Intro } from "../components/common"
import {
  HomeSection,
  Avatar,
  Title,
  Text,
  SubTitle,
} from "../components/home/style"

const AboutIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <Layout>
        <SEO title="Showcases" />
        <Intro>
          <ContainerLayout>
            <HomeSection>
              <div>
                <Title> Terakawa Kohei </Title>
                <Text>
                  {" "}
                  I'm a student of Computer Science and Systems Engineering
                  Department in{" "}
                  <b className="text-primary lined-link">Kobe Univ.</b>{" "}
                </Text>
                <Text>
                  {" "}
                  I am interested in creating artworks that incorporate 3D
                  computer graphics using software such as blender.
                </Text>
              </div>
            </HomeSection>
          </ContainerLayout>
        </Intro>
      </Layout>

      {/* <SectionIntro>
        <ContainerLayout>
          <HomeSection>
            <div>
              <Title> Terakawa Kohei </Title>
              <Text>
                {" "}
                I'm a student of Computer Science and Systems Engineering
                Department in{" "}
                <b className="text-primary lined-link">Kobe Univ.</b>{" "}
              </Text>
              <Text>
                {" "}
                I am interested in creating artworks that incorporate 3D
                computer graphics using software such as blender.
              </Text>
            </div>
          </HomeSection>
        </ContainerLayout>
      </SectionIntro> */}
    </>
  )
}

export default AboutIndex
