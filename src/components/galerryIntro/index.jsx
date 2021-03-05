import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql, Link } from "gatsby"
import { SectionIntro, ContainerLayout } from "../common"

import { GalerrySection, Avatar, AboutInfo, Title, SubTitle } from "./style"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const GalerryIntro = () => {
  const setAnimation1 = () => {
    gsap.fromTo(
      "#card1 div",
      {
        transform: "scale(0.85)rotateY(-15deg)rotateX(23deg)translateZ(2.5rem)",
        transformOrigin: "50% 100%",
        transformStyle: "preserve-3d",
        boxShadow: "1rem 1rem 2rem rgba(0,0,0,0.25)",
        filter: "blur(2px)",
        opacity: 0.5,
        transition: "0.6s ease transform",
      }, //fromの設定
      {
        //toの設定
        transform: "scale(1)",
        filter: "blur(0)",
        opacity: 1,

        scrollTrigger: {
          trigger: "#card1",
          start: "center 90%", //要素のトップが、画面の中央まできたら開始
          end: "center 65%", //要素のボトムが、画面の中央まできたら終了
          scrub: true,
        },
      }
    )
  }
  const setAnimation2 = () => {
    gsap.fromTo(
      "#card2 div",
      {
        transform: "scale(0.85)rotateY(-15deg)rotateX(23deg)translateZ(2.5rem)",
        transformOrigin: "50% 100%",
        transformStyle: "preserve-3d",
        boxShadow: "1rem 1rem 2rem rgba(0,0,0,0.25)",
        filter: "blur(2px)",
        opacity: 0.5,
        transition: "0.6s ease transform",
      }, //fromの設定
      {
        //toの設定
        transform: "scale(1)",
        filter: "blur(0)",
        opacity: 1,

        scrollTrigger: {
          trigger: "#card2",
          start: "center 90%", //要素のトップが、画面の中央まできたら開始
          end: "center 65%", //要素のボトムが、画面の中央まできたら終了
          scrub: true,
        },
      }
    )
  }
  const data = useStaticQuery(graphql`
    query {
      original: file(relativePath: { eq: "pvd.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fanart: file(relativePath: { eq: "inanis.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
    gsap.registerPlugin(ScrollTrigger)
    setAnimation1()
    setAnimation2()
  }, [])

  return (
    <>
      <AboutInfo style={{ paddingTop: "15rem" }}>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={600}
          distance="30px"
        >
          <Title> Works</Title>
        </Fade>
      </AboutInfo>
      <SectionIntro>
        <ContainerLayout>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={1000}
            distance="30px"
          >
            {/* <Category>
              <SubTitle> original</SubTitle>
             
            </Category> */}
          </Fade>
          <GalerrySection>
            <div>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <SubTitle> original</SubTitle>
              </Fade>
              <div id="card1">
                <Link to="/works">
                  <Avatar
                    fluid={data.original.childImageSharp.fluid}
                    alt="icon"
                  />
                </Link>
              </div>
            </div>
            <div>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <SubTitle> fanart</SubTitle>
              </Fade>
              <div id="card2">
                <Link to="/fanarts">
                  <Avatar
                    fluid={data.fanart.childImageSharp.fluid}
                    alt="icon"
                  />
                </Link>
              </div>
            </div>
          </GalerrySection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default GalerryIntro
