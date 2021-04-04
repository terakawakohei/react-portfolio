import Img from "gatsby-image"
import styled from "styled-components"
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

export const AboutInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
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
export const LinkTitle = styled.h3`
  font-family: "GT-Walsheim-Pro-Medium";
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  word-spacing: 8px;
  @media (min-width: ${variables.breakpointPhone}) {
    font-size: 1.8em;
    text-align: center;
  }
`
