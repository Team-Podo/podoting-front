import styled from "styled-components";

export const DetailPageStyle = styled.div`
  .common-section {
    width: 84rem;
    margin: 0 auto;
  }

  .info {
    margin: 3rem auto;
  }

  .info-left {
    width: 58rem;
  }

  .info-left-img-box {
    padding: 10px;
    width: 20rem;
    display: inline-block;
    height: 30rem;
  }

  .info-left-img-box img {
    width: 100%;
  }

  .info-left-detail-box {
    width: 28rem;
    padding-left: 2rem;
    padding-top: 2rem;
    display: inline-block;
    vertical-align: top;
  }

  #title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  .info-left-detail{
    display: -webkit-flex;
    margin-bottom: 1rem;
  }

  .info-left-detail span{
    -webkit-flex: 1;
  }

  .info-left-detail div {
    -webkit-flex: 2;
  }

  .wrapper {
    display: -webkit-flex;
    -webkit-flex-direction: row;
  }

  .reservation-box {
    position: fixed;
    right: calc((100vw - 85rem) / 2);
    width: 27rem;
    border: 1px solid #000;
    border-radius: 16px;
    padding: 2rem;
  }

  .reservation-box > p {
    margin-bottom: 1rem;
    font-weight: bold;
  }
  
  .reservation-box > p > span {
    color: #764abc;
  }

  .reservation-box .calender {
    height: 200px;
  }

  .reservation-details {
    font-size: 14px;
    width: 100%;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  .reservation-details .time{
    border: 2px solid #e5e5e5;
    border-radius: 10px;
    padding: 0.4rem;
    -webkit-flex: 1 1 40%;
    cursor: pointer;
  }

  .reservation-details .time:nth-child(odd) {
    margin-right: 5px;
  }

  .reservation-details .time>div{
    font-weight: bold;
  }

  .reservation-details .time>p{
    font-size: 13px;
  }

  .reservation-details .time.active {
    background-color: #e6d7e9;
    border: 2px solid #764abc;
  }

  .mobile-reservation-btn-container {
    display: none;
  }
  
  .content {
    width: 55rem;
  }

  .content-inner {
    padding: 2rem 0;
    width: 100%;
  }

  .content-inner>h3 {
    margin-bottom: 1rem;
  }

  .content-inner img {
    width: 90%;
  }
  
  @media screen and (max-width:767px) {
    .common-section {
      width: 100%;
    }

    .info-left, .content {
      width: 100%;
    }
    
    .info-left-img-box {
      padding: 0 10px;
      width: 30%;
      height: auto;
    }
    
    .info-left-detail-box {
      width: 70%;
      padding: 0;
      display: inline-block;
      vertical-align: top;
    }
    
    #title {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    .info-left-detail {
      font-size: 0.8rem;
      margin-bottom: 0.3rem;
    }
    
    .reservation-box {
      display: none;
    }

    .mobile-reservation-btn-container {
      display: block;
      background-color: #fff;
      width: 100%;
      position: fixed;
      bottom: 40px;
    }
    
    .mobile-reservation-btn {
      width: calc(100% - 8px);
      margin: 4px;
    }
    
    .content-inner {
      padding: 1.5rem 15px;
    }
    
    .content-inner h3, .content-inner h2 {
      font-size: 1.1rem;
      margin-bottom: 0;
    }
    
    .content-inner p {
      font-size: 0.9rem;
    }
    
    .content-inner img {
      width: 100%;
    }
    
    .reservation-box-mobile {
      padding: 1rem;
      position: fixed;
      top: 0;
      background-color: #ffffff;
      z-index: 999;
      height: 100vh;
    }

    .reservation-box-mobile>p {
      margin-left: 10px;
      font-weight: 550;
      margin-bottom: 1rem;
    }

    .reservation-box-mobile .react-calendar {
      min-height: 310px;
    }
    
    .reservation-details {
      font-size: 14px;
      width: 100%;
      margin-bottom: 1rem;
      display: block;
    }
    
    .reservation-details .time{
      width: 100%;
      margin-bottom: 0.6rem
    }
    
    .close {
      background-color: #ffffff;
      border: none;
      position: relative;
      left: 95%;
      font-size: 1.3rem;
    }
  }

`

export const ContentTitlesWrapper = styled.div`
  padding-right: 2rem;
  ul {
    display: -webkit-flex;
  }
  li {
    cursor: pointer;
    text-align: center;
    -webkit-flex: 1;
    padding: 0.8rem 1.7rem;
    border-top: 1px solid #764abc;
    border-bottom: 1px solid lightgray;
    border-left: 1px solid #764abc;
    border-collapse: collapse;
  }
  
  li.active {
    font-weight: bold;
    border-bottom: none;
  }
  
  li:last-child {
    border-right: 1px solid #764abc;
  }
  
  @media screen and (max-width:767px) {
    padding-right: 0;
    
    ul {
      -webkit-flex-flow:row wrap;
    }
    
    li {
      font-size: 0.9rem;
      -webkit-flex: 0 0 50%;
      padding: 0.5rem 0;
      border: none;
      background-color: #F6F6F6;
    }

    li:last-child {
      border: none;
    }
    
    li.active {
      background-color: rgba(118, 72, 188, 0.3);
    }
  }
`