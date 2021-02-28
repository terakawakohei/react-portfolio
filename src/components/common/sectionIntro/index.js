import styled from "styled-components"
import variables from "../../../data/variables"

export const SectionIntro = styled.div`
  padding: 3.5rem 0 4rem 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: ${variables.breakpointPhone}) {
    padding: 4rem 0 4rem 0;
  }
`
