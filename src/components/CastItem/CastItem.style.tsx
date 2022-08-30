import styled from "styled-components";

export const CastItemWrapper = styled.div`

  &>div{
    display: inline-block;
    margin-top: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    text-align: center;
  }
  
  .profile {
    border-radius: 100%;
    width: 6rem;
    height: 6rem;
    overflow: hidden;
    margin-bottom: 10px;
  }
  
  .profile img {
    width: 6rem;
  }
  
  p {
    font-weight: 600;
    font-size: 0.86rem;
  }
  
  span {
    color: #757575;
    font-size: 0.8rem;
  }
`