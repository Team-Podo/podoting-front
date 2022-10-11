import styled from "styled-components";

export const PerformancePageStyle = styled.div`{
  display: -webkit-flex;
  -webkit-flex-direction: row;
  -webkit-flex-wrap: wrap;
  
  .single-performance {
    text-align: center;
    flex: 0 0 33%;
    padding: 2rem 3rem;
    cursor: pointer;
    
    & img {
      width: 13rem;
      height: 18rem;
    }
    
    & p {
      margin-top: 10px;
    }
  }
}`