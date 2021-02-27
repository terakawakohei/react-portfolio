import React, { useContext, useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import Title from "../Title/Title"
import { useStaticQuery, graphql } from "gatsby"
import { SectionIntro, ContainerLayout, ResumeButton } from "../common"
import Avator from "../../assets/img/warriors.jpg"
import {
  AboutSection,
  Avatar,
  AboutInfo,
  ProfGrid,
  SubTitle,
  Isometric,
  AppLogo,
} from "./style"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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
          "perspective(800px)rotateY(-15deg)translateY(-50px)rotateX(10deg)scale(1)",
        filter: "blur(0)",
        opacity: 1,

        scrollTrigger: {
          trigger: "#wrapper-a",
          start: "center 100%", //要素のトップが、画面の中央まできたら開始
          end: "center 90%", //要素のボトムが、画面の中央まできたら終了
          scrub: true,
          onEnter: () => {
            console.log("scroll In")
          },
          onEnterBack: () => {
            console.log("scroll Back")
          },
        },
      }
    )
  }
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "IMG_0672 2.png" }) {
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
              <SubTitle> About me</SubTitle>
            </Fade>
          </AboutInfo>

          <AboutSection>
            <div className="wrapper" id="wrapper-a">
              {/* <Isometric> */}{" "}
              <Avatar
                fluid={data.placeholderImage.childImageSharp.fluid}
                alt="user photo"
              />
              {/* </Isometric> */}
            </div>
            <div>
              <ProfGrid>
                <div className="about-wrapper__info">
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1300}
                    distance="30px"
                  >
                    <p className="about-wrapper__info-text">
                      {
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."
                      }
                    </p>
                    <p className="about-wrapper__info-text">
                      {
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."
                      }
                    </p>
                    <p className="about-wrapper__info-text">
                      {"神戸大学情報知能工学科"}
                    </p>
                  </Fade>
                </div>
                <div>
                  {" "}
                  <p className="about-wrapper__info-text">
                    {"神戸大学情報知能工学科"}
                  </p>
                </div>
              </ProfGrid>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
