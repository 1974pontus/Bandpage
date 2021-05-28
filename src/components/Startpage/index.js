import React from 'react';
import { StartpageWrapper, Title, Subtitle } from './StartpageElements';
import { Arrow } from '../ScrollArrowElement';

// import './styles.scss';

const Startpage = () => {
    return (
        <StartpageWrapper>
            <Title>
                Frontend
            </Title>
            <Title>
                Development
            </Title>
            <Subtitle>
                Pontus Tahir
            </Subtitle>
            <Arrow>
                Bläddra
            </Arrow>
        </StartpageWrapper>
    )
}

export default Startpage
