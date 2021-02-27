import Img from "gatsby-image"
import styled from "styled-components"
import variables from "../../data/variables"

export const AboutSection = styled.section`
  text-align: center;
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10rem;
    text-align: center;
  }
`
export const Top = styled.section`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  border-bottom: 0px;
  background: $white-color;
  font-weight: 400;
  color: $dark-blue-text;
  padding: 0rem 5.6rem;
  margin-bottom: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`
export const Avatar = styled(Img)`
  border-radius: 5px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.15);
  width: 100%;
`
export const Title = styled.h1`
  font-size: 3.3rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
  color: #272341;

  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  color: #232323;
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
