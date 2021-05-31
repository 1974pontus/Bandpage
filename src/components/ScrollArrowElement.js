
import styled from 'styled-components';
import { Link } from 'react-scroll';



export const Arrow = styled(Link)`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: scale(1.2);
    }

`
