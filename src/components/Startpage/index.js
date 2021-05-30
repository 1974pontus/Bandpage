import React from 'react';
import { StartpageWrapper, Title, Subtitle } from './StartpageElements';
import { Arrow } from '../ScrollArrowElement';

// import './styles.scss';

const Startpage = () => {
    return (
        <StartpageWrapper id="startpage">
            <Title>
                Frontend
            </Title>
            <Title>
                Development
            </Title>
            <Subtitle>
                Pontus Tahir
            </Subtitle>
            <Arrow to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
            >
                Bläddra
            </Arrow>
        </StartpageWrapper>
    )
}

export default Startpage
