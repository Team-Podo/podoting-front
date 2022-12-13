import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: #e5e5e5;
  height: 100px;
  position: relative;
  bottom: 0;
  
  @media(max-width: 84rem) {
    width: fit-content;
  }
  
  @media screen and (max-width:767px) {
    /* 모바일 */
    width: 100%;
  }

  p {
    padding-top: 1rem;
  }
`