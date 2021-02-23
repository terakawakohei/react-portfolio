import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Avatar, Title, Text, SubTitle } from "./style"
import { SectionIntro, ContainerLayout, ResumeButton } from "../common"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
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
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
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
              <ResumeButton href="resume.pdf" target="_blank">
                {" "}
                Download resume{" "}
              </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
