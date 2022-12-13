import styled from "styled-components";

export const PerformancePageStyle = styled.div`{
  ::-webkit-scrollbar {
    //display: none;
  }
  
  display: -webkit-flex;
  -webkit-flex-direction: row;
  -webkit-flex-wrap: wrap;
  -webkit-align-items: center;
  -webkit-justify-content: space-between;
  
  
  .single-performance {
    position: relative;
    display: -webkit-flex;
    -webkit-flex-direction: row;
    -webkit-flex-wrap: wrap;
    -webkit-justify-content: center;
    text-align: center;
    margin: 2rem 0.4rem;
    padding: 10px 13px;
    border: 2px solid #e5e5e5;
    border-radius: 10px;
    
    & img {
      border-radius: 10px;
      width: 10rem;
      height: 15rem;
      display: inline-block;
      margin-right: 15px;
      box-shadow: 1px 1px 5px 1px #BDBDBD;
    }
    
    & p {
      text-align: left;
      margin-bottom: 5px;
      font-size: 0.9rem;
      letter-spacing: -0.5px;
    }
    
    p.performance-title {
      margin: 10px auto;
      font-weight: bold;
      font-size: 1rem;
    }
    
    button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      font-weight: 550;
      border-radius: 3px;
      border: none;
      padding: 8px 10px;
      cursor: pointer;
    }
  }

  @media screen and (max-width:767px) {
    /* 모바일 */
    -webkit-flex-direction: column;
    -webkit-align-items: unset;
    
    .single-performance {
      -webkit-flex-wrap: nowrap;
      -webkit-justify-content: unset;
      border: none;
      margin: 0;
      
      & img {
        width: 5rem;
        height: 7rem;
      }
      
      & p {
        font-size: 0.8rem;
      }
    }
  }
}`