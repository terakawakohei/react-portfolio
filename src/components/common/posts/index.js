import styled from "styled-components"
import variables from "../../../data/variables"

export const Intro = styled.div`
  padding: 8rem 0 4rem 0;
  font-family: "GT-Walsheim-Pro-Regular";
`
export const HeaderIntro = styled.header`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 34px;
  justify-content: space-between;
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
export const SubTitle = styled.h3`
  font-size: 2rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
  text-decoration: underline;
`
export const Text = styled.p`
  font-size: 0.98rem;
  line-height: 2;
  color: #000000;
  margin-top: 2rem;
  text-align: justify;
  @media (max-width: ${variables.breakpointPhone}) {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
`
export const SubText = styled.p`
  font-size: 1rem;
  line-height: 2;
  color: #232323;
`

export const SmallText = styled.small`
  font-size: 0.89rem;
  padding-right: 10px;
  > span {
    padding-left: 5px;
  }
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 0.6rem;
  }
`

export const WorkPost = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 5rem;
  @media (max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    border: 10px solid #fff;
    border-radius: 0.9rem;
    box-shadow: 0 17px 56px rgba(125, 127, 129, 0.17);
  }
  > div.content {
    padding: 2rem 3rem;
    @media (max-width: ${variables.breakpointPhone}) {
      padding: 1rem 1rem;
    }
  }
  > div.media {
    > .image-wrapper {
      margin-bottom: 0.5rem;
      max-height: 400px;
      overflow: hidden;
      @media (min-width: ${variables.breakpointPhone}) {
        box-shadow: 0 17px 56px rgba(125, 127, 129, 0.17);
        border-radius: 0.9rem;
        border: 10px solid #fff;
      }
      > a > div {
        transition: all 800ms ease-in-out;
        -webkit-transform: scale(1.25);
      }
    }
  }
  &:hover {
    cursor: pointer;
    > div.media > .image-wrapper > a > div {
      transform: scale(1);
    }
  }
`
export const Category = styled.span`
  font-family: "GT-Walsheim-Pro-Bold";
  color: ${variables.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8em;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: 3px solid ${variables.primary};
`
