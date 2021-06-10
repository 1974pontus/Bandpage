import styled, { keyframes } from 'styled-components';
import backgroundTwo from '../../assets/background2.svg';

const up = keyframes`
    0% {
    opacity: 0;
    transform: translateX(10rem);
    }
    
    25% {
    opacity: 1;
    transform: translateY(-20rem);
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
`
export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`
export const TextContent = styled.div`
    position: relative;
    left: 10%;
`
export const Title = styled.div`
    color: #DFE0DE;
    font-size: 24px;
    letter-spacing: 5px;
    
`
export const Subtitle = styled.div`
    color: #DFE0DE;
    font-size: 24px;
    padding-bottom: 2rem;
    font-weight: 100;
    letter-spacing: 5px;
    &:hover {
        cursor: pointer;
        color: #F3827C;
    }
`

export const ArrowWrapper = styled.div`
    position: relative;
    top: 20%;
    animation: ${up} 1s ease-in-out .3s both ;
`