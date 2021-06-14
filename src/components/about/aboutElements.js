import styled, { keyframes } from 'styled-components';

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

export const AboutWrapper = styled.div`
    background: #4F5E5D;
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
    position: relative;
    left: 100px;
    width: 400px;

    @media (max-width: 768px) {
        left: 50px;
        width: 350px;
    }
    @media (max-width: 550px) {
        width: 280px;
        left: 20px;
    }
`
export const Text = styled.div`
    color: #DFE0DE;
    font-weight: 100;
    font-size: 18px;

    @media (max-width: 1000px) {
        font-size: 16px;
    }
    @media (max-width: 550px) {
        font-size: 14px;

    }
`
export const ArrowWrapper = styled.div`
    position: relative;
    top: 10%;
    right: 100px;
    animation: ${drop} 1s ease-in-out .3s both ;
    img {
        @media (max-width: 1000px) {
            height: 350px;
        }
        @media (max-width: 768px) {
            height: 260px;
        }
      @media (max-width: 550px) {
      height: 260px;
      ${'' /* right: 10px; */}
      }
    }
    @media (max-width: 1000px) {
        right: 50px;
    }
    @media (max-width: 768px) {
        right: 10px;
    }
`
