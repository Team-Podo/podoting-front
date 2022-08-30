import styled from "styled-components";

export const NavWrapper = styled.nav`
  
  .nav-inner{
    display: -webkit-flex;
    -webkit-flex-direction: row;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
    padding: 5px 0;
    width: 84rem;
    margin: 0 auto;
  }

  .nav-right{
    min-width: 150px;
    display: flex;
    justify-content: space-between;
  }

  .nav-right li {
    margin: 0 10px;
  }

`

export const NavContentWrapper = styled.div`
  border-top: 1px solid #d1cfd1;
  border-bottom: 1px solid #d1cfd1;
  min-height: 5rem;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 6%);
`