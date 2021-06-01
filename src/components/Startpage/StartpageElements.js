import styled from 'styled-components';
import backgroundOne from '../../assets/background1.svg';


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
    flex-direction: row;
`
export const TextContent = styled.div`
    padding-bottom: 70px;
    padding-right: 50px;
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
   padding-left: 220px;
    padding-top: 355px;
`