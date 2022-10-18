import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: #e5e5e5;
  height: 100px;
  @media(max-width: 84rem) {
    width: fit-content;
  }
  
  .footer-inner {
    width: 84rem;
    margin: 0 auto;
  }
  
  p {
    padding-top: 1rem;
  }
`