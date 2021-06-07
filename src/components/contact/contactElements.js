import styled from 'styled-components';
import backgroundTwo from '../../assets/background2.svg';


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
    text-align: end;
`
export const Title = styled.div`
    color: #DFE0DE;
    font-size: 72px;
    letter-spacing: 5px;
`

export const ArrowWrapper = styled.div`
    position: relative;
    top: 20%;
`