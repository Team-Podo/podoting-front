import styled from "styled-components";

export const DetailWrapper = styled.div`
  .common-section {
    width: 84rem;
    margin: 0 auto;
  }

  .info {
    margin: 3rem auto;
  }

  .info-left {
    width: 55rem;
  }

  .info-left-img-box {
    padding: 10px;
    width: 25rem;
    display: inline-block;
    height: 30rem;
  }

  .info-left-img-box img {
    width: 100%;
  }

  .info-left-detail-box {
    width: 28rem;
    padding-left: 20px;
    padding-top: 20px;
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
    flex: 1;
  }

  .info-left-detail div {
    flex: 2;
  }

  .wrapper {
    position: relative;
  }

  .reservation-box {
    width: 27rem;
    border: 1px solid #000;
    border-radius: 16px;
    position: absolute;
    top: 0;
    right: 0;
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
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  .reservation-details .time{
    border: 2px solid #e5e5e5;
    border-radius: 10px;
    padding: 0.4rem;
    flex: 1 1 40%;
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

  .content {
    min-height: 3000px;
    width: 55rem;
  }

  .content-inner {
    padding-top: 4rem;
    width: 100%;
  }

  .content-inner>h3 {
    margin-bottom: 1rem;
  }

  .content-inner>img {
    width: 100%;
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
    flex: 1;
    max-width: 170px;
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
`