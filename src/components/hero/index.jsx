import React, { useState, useEffect } from "react"

import { Title } from "./style"

import Fade from "react-reveal/Fade"

const Hero = () => {
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
      <section id="hero" className="jumbotron">
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
      </section>
    </>
  )
}

export default Hero
