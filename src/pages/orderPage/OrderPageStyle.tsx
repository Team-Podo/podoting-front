import styled from "styled-components";

export const OrderPageStyle = styled.div`{

  .single-order {
    position: relative;
    padding: 1.5rem 2rem;
    border: 1px solid #d5d5d5;
    border-radius: 10px;
    margin: 1rem auto 0 auto;
    width: 60rem;
  }

  .order-perf-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .order-status {
    position: absolute;
    right: 2rem;
  }
  
  .order-info {
    display: -webkit-flex;
    -webkit-flex-direction: row;
    width: 100%;
    position: relative;

    .performance-info > p {
      margin-bottom: 0.4rem;
    }

    .order-thumbnail {
      width: 140px;
      height: 186px;
      margin-right: 1.5rem;
    }

    .location-icon {
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 5px;
    }

  }

  .order-price-info {
    -webkit-justify-content: space-between;
    -webkit-align-items: center;

    .btn-request-cancel, .btn-canceled {
      padding: 4px 7px;
      border: 2px solid #A92B2B;
      color: #A92B2B;
      border-radius: 3px;
      float: right;
    }

    .btn-request-cancel {
      background-color: #ffffff;
      cursor: pointer;
    }

    .btn-request-cancel:hover {
      color: #ffffff;
      background-color: #A92B2B;
    }

    .btn-canceled {
      background-color: #ffe4df;
    }

    .single-order-price > span {
      min-width: 150px;
    }
  }

  .seat-badge {
    font-size: 0.9rem;
    border: 2px solid;
    margin-right: 8px;
  }

  .seat-badge > div:first-child {
    padding: 1px 5px;
    color: #f0f0f0;
    font-weight: bold;
  }

  .seat-badge > div:last-child {
    padding: 1px 5px;
  }

  @media screen and (max-width: 767px) {
    .single-order {
      padding: 1rem;
      border: none;
      border-bottom: 1px solid #d5d5d5;
      border-radius: 0;
      margin: 0;
      width: 100%;
    }

    .order-info {
      .order-thumbnail {
        width: 90px;
        height: 116px;
        margin-right: 1rem;
      }
    }


    .order-status {
      top: 1.3rem
    }

    .seat-badge {
      font-size: 0.8rem;
    }
  }
}`