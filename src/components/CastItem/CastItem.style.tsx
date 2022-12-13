import styled from "styled-components";

export const CastItemWrapper = styled.div`

  &>div{
    display: inline-block;
    margin: 2rem 1rem;
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
  
  @media screen and (max-width:767px) {
    
    /* 모바일 */
    &>div{
      width: 25%;
      display: inline-block;
      margin: 0 auto;
      text-align: center;
    }
    
    .profile {
      margin: 10px auto;
      width: 4rem;
      height: 4rem;
      
    }
    
    .profile img {
      width: 4rem;
    }
  }

`