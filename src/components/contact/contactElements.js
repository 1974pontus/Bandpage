import styled from 'styled-components';
import backgroundOne from '../../assets/background1.svg';


export const ContactWrapper = styled.div`
    background-image: url(${backgroundOne});
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    border: solid #fff 2rem;
`
export const Title = styled.div`
    color: #fff;
    padding-right: 75px;
    font-size: 48px;
`
export const Subtitle = styled.div`
    color: #fff;
    padding-right: 75px;
    font-size: 24px;
`