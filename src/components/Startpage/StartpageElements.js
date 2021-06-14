import styled, { keyframes } from 'styled-components';
import backgroundOne from '../../assets/background1.svg';

const drop = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-20rem);
    }
    
    25% {
    opacity: 1;
    transform: translateY(10rem);
    }
    
    50% {
    opacity: 1;
    transform: translateY(-5rem);
    }
    75% {
    opacity: 1;
    transform: translateY(2rem);
    }

    100% {
    opacity: 1;
    transform: translateY(0);
    }
`
// const bounce = keyframes`
//     0% {
//     transform: translateY(0);
//     }

//     50% {
//     transform: translateY(1rem);
//     }

//     100% {
//     transform: translateY(0);
//     }
// `

export const StartpageWrapper = styled.div`
    background-image: url(${backgroundOne});
    margin-top: -201px;
    height: 100vh;
    width: 100%;
    border: solid #fff 2rem;

    @media (max-width: 550px) {
      border: none;
      }
`
export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`
export const TextContent = styled.div`
    text-align: end;
    @media (max-width: 1024px) {
        
  }
    @media (max-width: 768px) {
       
  }
`
export const Title = styled.div`
    color: #fff;
    font-size: 72px;
    letter-spacing: 5px;

    @media (max-width: 1024px) {
        font-size: 54px;
  }
    @media (max-width: 768px) {
        font-size: 48px;
  }
  @media (max-width: 550px) {
    font-size: 32px;
      }
`
export const Subtitle = styled.div`
    color: #fff;
    font-size: 32px;
    font-weight: 100;
    letter-spacing: 5px;

    @media (max-width: 768px) {
        font-size: 24px;
    }
    @media (max-width: 550px) {
    font-size: 18px;
    }
`
export const ArrowWrapper = styled.div`
    position: relative;
    top: 10%;
    animation: ${drop} 1s ease-in-out .3s both ;
    img {
      @media (max-width: 550px) {
      height: 260px;
      }
    }
  

    @media (max-width: 1024px) {
        left: 12%;
    }
    @media (max-width: 768px) {
      left: 5%;
    }
`