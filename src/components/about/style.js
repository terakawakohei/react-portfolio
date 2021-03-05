import Img from "gatsby-image"
import styled from "styled-components"
import variables from "../../data/variables"

export const AboutSection = styled.section`
  text-align: left;
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1.25fr 0.85fr;
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
  border-radius: 25px;
  background: #ecf0f3;
  box-shadow: 10px 10px 11px #dbdfe2, -10px -10px 11px #fdffff;
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
  margin-bottom: 2rem;
  text-align: left;
  text-transform: uppercase;
  word-spacing: 8px;
  @media (min-width: ${variables.breakpointPhone}) {
    font-size: 1.8em;
    text-align: center;
  }
`
export const LinkList = styled.ul`
  display: grid;
  padding-left: 0;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  > li a {
    color: #272341;

    text-decoration: none;
    vertical-align: middle;
    > div {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 78px;
      height: 75px;
      border-radius: 50%;
      text-align: center;

      display: flex;
      align-items: center;
      justify-content: center;

      box-shadow: 0 2px 2.2px rgba(0, 0, 0, 0.017),
        0 4.9px 5.3px rgba(0, 0, 0, 0.024), 0 9.1px 10px rgba(0, 0, 0, 0.03),
        0 16.3px 17.9px rgba(0, 0, 0, 0.036),
        0 30.5px 33.4px rgba(0, 0, 0, 0.043), 0 73px 80px rgba(0, 0, 0, 0.06);

      > svg {
        vertical-align: middle;
      }
    }
    svg {
      display: block;
      vertical-align: middle;
    }
    @media (max-width: ${variables.breakpointPhone}) {
      font-size: 1rem;
    }
  }
`
