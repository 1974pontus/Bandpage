import styled, { keyframes } from 'styled-components';
import backgroundTwo from '../../assets/background2.svg';

const up = keyframes`
    0% {
    opacity: 0;
    transform: translateX(5rem);
    }
    
    25% {
    opacity: 1;
    transform: translateY(-10rem);
    }
    
    50% {
    opacity: 1;
    transform: translateY(5rem);
    }
    75% {
    opacity: 1;
    transform: translateY(-2rem);
    }

    100% {
    opacity: 1;
    transform: translateY(0);
    }
`
export const ContactWrapper = styled.div`
    background-image: url(${backgroundTwo});
    height: 100vh;
    width: 100%;
    border: solid #fff 2rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 550px) {
        border: none;
    }
`
export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    @media (max-width: 550px) {
      flex-direction: column;
      justify-content: center;
padding-top: 4rem;
    }
`
export const TextContent = styled.div`
    position: relative;
    left: 20px;
    @media (max-width: 768px) {
      left: 30px;
    }
    @media (max-width: 550px) {
        left: 0;
    }
`
export const Title = styled.div`
    color: #fff;
    font-size: 52px;
    letter-spacing: 5px;
    margin-bottom: 4rem;
    @media (max-width: 550px) {
        font-size: 32px;
        text-align: center;
    }   
`
export const Subtitle = styled.div`
    color: #fff;
    font-size: 24px;
    padding-bottom: 2rem;
    font-weight: 100;
    letter-spacing: 5px;
    text-align: center;
    padding-left: 10rem;
    &:hover {
        cursor: pointer;
        color: #F3827C;
    }
    @media (max-width: 768px) {
        padding-left: 7rem;
    }
    @media (max-width: 550px) {
        font-size: 16px;
        padding-left: 0;
        padding-bottom: 2rem;

    } 
`

export const ArrowWrapper = styled.div`
    position: relative;
    top: 20%;
    animation: ${up} 1s ease-in-out .3s both ;
    @media (max-width: 550px) {
        top: 0;
        padding-top: 2rem;

      }
    img {
      @media (max-width: 550px) {
      height: 200px;
      }
    }
`