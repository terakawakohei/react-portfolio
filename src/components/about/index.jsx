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
          end: "center 60%", //要素のボトムが、画面の中央まできたら終了
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
      <SectionIntro>
        <ContainerLayout>
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

          <AboutSection>
            <div>
              {/* <Isometric> */}{" "}
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <SubTitle> Terakawa Kohei</SubTitle>
              </Fade>
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
                  Department in{" "}
                  <b className="text-primary lined-link">Kobe Univ.</b>{" "}
                </Text>
                <Text>
                  {" "}
                  I am interested in creating artworks that incorporate 3D
                  computer graphics using software such as blender.
                </Text>

                <p className="about-wrapper__info-text">
                  {"神戸大学情報知能工学科"}
                </p>
              </Fade>
              {/* </Isometric> */}
            </div>
            <div>
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
                    delay={1600}
                    distance="30px"
                  >
                    <Link
                      target="_blank"
                      to="https://twitter.com/xxriver000"
                      activeClassName="active"
                    >
                      <Twitter />
                    </Link>
                  </Fade>
                </li>
                <li>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1500}
                    delay={1800}
                    distance="30px"
                  >
                    <Link
                      target="_blank"
                      to="https://github.com/terakawakohei"
                      activeClassName="active"
                    >
                      <GitHub />
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
