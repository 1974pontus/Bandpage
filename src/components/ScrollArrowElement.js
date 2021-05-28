import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Arrow = styled(Link)`
    background: ${({ primary }) => (primary ? 'green' : 'pink')};
    border-radius: 50px;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    background: ${({ dark }) => (dark ? 'grey' : 'white')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ dark }) => (dark ? 'white' : 'grey')};
    }

`
