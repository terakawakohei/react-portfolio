import styled from "styled-components"
import variables from "../../../data/variables"

export const NavbarElement = styled.div`
  display: grid;
  justify-content: right;

  align-items: center;
  @media (max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    text-align: center;
    width: 100%;
  }
`

export const NavbarList = styled.ul`
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  > li a {
    font-size: 1.2rem;
    color: #272341;
    padding: 0.5rem 0.2rem;
    margin: 0 1rem;
    text-decoration: none;
    vertical-align: middle;
    > svg {
      width: 18px;
      margin-right: 5px;
    }
    span,
    svg {
      display: block;
      vertical-align: middle;
    }
    @media (max-width: ${variables.breakpointPhone}) {
      font-size: 1rem;
    }
  }
`
