import styled, { keyframes } from 'styled-components';
import backgroundOne from '../../assets/background1.svg';

const drop = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-10rem);
    }
    
    100% {
    opacity: 1;
    transform: translateY(0);
    }
`
const bounce = keyframes`
    0% {
    transform: translateY(0);
    }
    
    50% {
    transform: translateY(1rem);
    }
    
    100% {
    transform: translateY(0);
    }
`

export const StartpageWrapper = styled.div`
    background-image: url(${backgroundOne});
    margin-top: -201px;
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
    text-align: end;
`
export const Title = styled.div`
    color: #DFE0DE;
    font-size: 72px;
    letter-spacing: 5px;
`
export const Subtitle = styled.div`
    color: #DFE0DE;
    font-size: 48px;
    font-weight: 100;
    letter-spacing: 5px;
`
export const ArrowWrapper = styled.div`
    position: relative;
    top: 20%;
    animation: ${drop} 1s ease-in-out .3s both ;
    &:hover {
        animation: ${bounce} .3s ease-in-out .3s both infinite;
    }
`