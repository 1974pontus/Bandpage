import styled, { keyframes } from 'styled-components';

const drop = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-20rem);
    }
    
    25% {
    opacity: 1;
    transform: translateY(9rem);
    }
    
    50% {
    opacity: 1;
    transform: translateY(-5rem);
    }
    75% {
    opacity: 1;
    transform: translateY(7rem);
    }

    100% {
    opacity: 1;
    transform: translateY(5rem);
    }
`

export const WorkContainer = styled.div`
    background: #F3827C;
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
    @media (max-width: 550px) {
      flex-direction: column;
      justify-content: center;
      }
`
export const TextContent = styled.div`
    text-align: end;
    width: 900px;
    line-height: 2rem;

    @media (max-width: 1024px) {
        width: 700px;
    }
    @media (max-width: 768px) {
        width: 500px;
    }
    @media (max-width: 550px) {
        width: 300px;
        text-align: center;
        padding-top: 4rem;
    }
`
export const Title = styled.div`
    color: #DFE0DE;
    font-size: 48px;
    letter-spacing: 5px;
    margin-bottom: 2rem;
    &:hover {
        cursor: pointer;
        color: #4F5E5D;
    }
    
    @media (max-width: 768px) {
        font-size: 34px;
    }
    @media (max-width: 550px) {
        font-size: 18px;
    }
`
export const Subtitle = styled.div`
    color: #161616;
    font-size: 18px;
    font-weight: 100;
    letter-spacing: 5px;
`
export const ArrowWrapper = styled.div`
    position: relative;
    top: 10%;
    right: 50px;
    animation: ${drop} 1s ease-in-out .3s both ;
    img {
      @media (max-width: 900px) {
      height: 330px;
      }
      @media (max-width: 550px) {
      height: 200px;
      }
    }
      @media (max-width: 550px) {
        top: -10%;
        right: 0;
      }
`
