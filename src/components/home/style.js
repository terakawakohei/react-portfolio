import Img from "gatsby-image"
import styled from "styled-components"
import variables from "../../data/variables"
import BackgroundImg from "gatsby-background-image"

export const HomeSection = styled.section`
  text-align: center;
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    grid-gap: 10rem;
    text-align: left;
  }
`
export const Overlay = styled.div`
  position: absolute;

  top: 52px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #131110;
  /*background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(qijin-xu.png) no-repeat center center scroll;*/

  opacity: 0.3;
  z-index: -1;
`
export const BackgroundImage = styled(BackgroundImg)`
  width: 100%;
  opacity: 1 !important;
  background-size: cover;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(qijin-xu.png) no-repeat center center scroll;
`

export const Title = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  color: #232323;
  z-index: 999999;
  text-transform: capitalize;
  a {
    color: #3f51b5;
    text-decoration: underline;
  }
`
export const SubTitle = styled.h2`
  font-family: "GT-Walsheim-Pro-Medium";
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  word-spacing: 8px;
  @media (min-width: ${variables.breakpointPhone}) {
    font-size: 1.8em;
  }
`
export const HeadingXL = styled.h1`
  background: -webkit-linear-gradient(
    240deg,
    hsl(189, 100%, 50%),
    hsl(174, 79%, 49%),
    hsl(188, 81%, 59%),
    hsl(213, 62%, 61%),
    hsl(240, 100%, 70%)
  );
  display: block;
  font-size: 80px;
  letter-spacing: -4px;
  line-height: 1.2;
  margin: 0 auto 10vh auto;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 849px) {
    font-size: 45px;
  }
`
