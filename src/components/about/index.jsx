import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Avatar, Title, Top, Text, SubTitle } from "./style"
import { SectionIntro, ContainerLayout, ResumeButton } from "../common"
import "bootstrap/dist/css/bootstrap.min.css"

import Fade from "react-reveal/Fade"
import { Container } from "react-bootstrap"

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])
  return (
    <>
      <section id="hero">
        <Container>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={500}
            distance="30px"
          >
            <Fade duration={1000} delay={500} distance="30px">
              <Title> Welcome to my Portfolio! </Title>
            </Fade>
          </Fade>
        </Container>
      </section>
    </>
  )
}

export default About
