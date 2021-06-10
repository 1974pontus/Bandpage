import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    0% {
    opacity: 0;
    transform: translateX(-20rem);
    }
    
    25% {
    opacity: 1;
    transform: translateX(10rem);
    }
    
    50% {
    opacity: 1;
    transform: translateX(-5rem);
    }
    75% {
    opacity: 1;
    transform: translateX(2rem);
    }

    100% {
    opacity: 1;
    transform: translateX(0);
    }
`

const barSlide = keyframes`
    0%{
      width: 0px;
    }
    100%{
      width: 100%;
    }
  `


export const SkillsContainer = styled.div`
    background: #161616;
    height: 100vh;
    width: 100%;
    border: solid #fff 2rem;
`
export const SkillsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`
export const SkillsRow = styled.div`
position: relative;
left: 100px;
max-width: 600px;
   
`
export const ArrowRow = styled.div`
    float: left;
    animation: ${slideIn} 1s ease-in-out .3s both ;
`

export const Skillbar = styled.div`
    display: flex;
   
    width: 500px;
    line-height: 30px;
    font-size: 16px;
    color: whitesmoke;
    padding: 0;
    position: relative;
    margin-bottom: 2.5rem;
    
    &:before{
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    height: 10px;
    top: 0;
    z-index: 1;
    background: #E5E5E5;
    }

    &:after{
    content: '';
    background: #F3827C;    
    height: 10px;
    transition: 0.7s;
    display: block;     
    width: 100%;     
    animation: ${barSlide} 1 1.8s;     
    position: absolute;
    top: 0;
    left: 0;     
    z-index: 2;
    ${props => props.addCSS}
    }
    
`


