import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"
import variables from "../../data/variables"

export const GalerrySection = styled.section`
  text-align: left;
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10rem;
    text-align: left;
  }
`
export const Avatar = styled(Img)`
  border-radius: 5px;
  width: 65%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
export const Card = styled.div`
  display: flex;
`

export const Isometric = styled.div`
 
 transform:
    perspective(800px)
    rotateY(25deg) scale(0.9)
    rotateX(10deg);
  filter: blur(2px);
  opacity: 0.5;
  transition: 0.6s ease all;

  &:hover {
     transform:
      perspective(800px)
      rotateY(-15deg)
      translateY(-50px)
      rotateX(10deg)
      scale(1);
    filter: blur(0);
    opacity: 1;
    }
  }
`

export const AboutInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
`
export const ProfGrid = styled.div`
  @media (min-width: ${variables.breakpointPhone}) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2rem;
    place-items: center;
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
export const Title = styled.h1`
  font-family: "GT-Walsheim-Pro-Bold";
  font-size: 2rem;
  text-transform: capitalize;
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 1.5rem;
  }
`
export const SubTitle = styled.h2`
  font-family: "GT-Walsheim-Pro-Medium";
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  text-transform: uppercase;
  word-spacing: 8px;
  @media (min-width: ${variables.breakpointPhone}) {
    font-size: 1.8em;
    text-align: center;
  }
`
export const Category = styled.div`
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
