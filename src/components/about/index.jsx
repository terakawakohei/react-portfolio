import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql, Link } from "gatsby"
import { SectionIntro, ContainerLayout, ResumeButton } from "../common"
import Avator from "../../assets/img/warriors.jpg"
import {
  AboutSection,
  Avatar,
  AboutInfo,
  ProfGrid,
  Title,
  SubTitle,
  Text,
  LinkList,
  Card,
  Isometric,
  AppLogo,
} from "./style"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Twitter, GitHub } from "react-feather"

const About = () => {
  const setAnimation = () => {
    gsap.fromTo(
      "#wrapper-a div",
      {
        transform: "perspective(800px)rotateY(25deg) scale(0.9)rotateX(10deg)",
        filter: "blur(2px)",
        opacity: 0.5,
        transition: "0.6s ease all",
      }, //fromの設定
      {
        //toの設定
        transform:
          "perspective(800px)rotateY(-18deg)translateY(-50px)rotateX(10deg)scale(1)",
        filter: "blur(0)",
        opacity: 1,

        scrollTrigger: {
          trigger: "#wrapper-a",
          start: "center 100%", //要素のトップが、画面の中央まできたら開始
          end: "center 65%", //要素のボトムが、画面の中央まできたら終了
          scrub: true,
        },
      }
    )
  }
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portfolio-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
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
    setAnimation()
  }, [])

  return (
    <>
      <AboutInfo>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={600}
          distance="30px"
        >
          <Title> About me</Title>
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
            <SubTitle style={{ paddingLeft: "1rem" }}> Terakawa Kohei</SubTitle>
          </Fade>
          <AboutSection>
            <div
              style={{
                marginTop: "2rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
            >
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1300}
                distance="30px"
              >
                <Text>
                  {" "}
                  I'm a student of Computer Science and Systems Engineering
                  Department in Kobe Uvin.
                </Text>

                <Text style={{ marginTop: "2rem" }}>
                  {" "}
                  I like to draw and create artworks as a hobby. I am interested
                  in creating artworks with 3D Computer Graphics using{" "}
                  <b className="text-primary lined-link">blender</b>.{" "}
                </Text>
              </Fade>
            </div>
            <div style={{ paddingTop: "3rem" }}>
              <div className="wrapper" id="wrapper-a">
                <Avatar
                  fluid={data.placeholderImage.childImageSharp.fluid}
                  alt="icon"
                />
              </div>
              <LinkList>
                <li>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1500}
                    delay={1400}
                    distance="30px"
                  >
                    <Link
                      target="_blank"
                      to="https://twitter.com/e_stock_p"
                      activeClassName="active"
                    >
                      <div>
                        <Twitter size={27} />
                      </div>
                    </Link>
                  </Fade>
                </li>
                <li>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1500}
                    delay={1450}
                    distance="30px"
                  >
                    <Link
                      target="_blank"
                      to="https://github.com/terakawakohei"
                      activeClassName="active"
                    >
                      <div>
                        <GitHub size={27} />
                      </div>
                    </Link>
                  </Fade>
                </li>
              </LinkList>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
