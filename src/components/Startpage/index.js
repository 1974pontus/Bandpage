import React from 'react';
import { StartpageWrapper, Title, Subtitle, TextContent, ArrowWrapper, ContentWrapper } from './StartpageElements';
import { Arrow } from '../ScrollArrowElement';
import arrowImg from '../../assets/arrow1.png';


// import './styles.scss';

const Startpage = () => {
    return (
        <StartpageWrapper id="startpage">
            <ContentWrapper>
                <ArrowWrapper>
                    <Arrow to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                    >
                        <img src={arrowImg} alt="arrow" />
                    </Arrow>
                </ArrowWrapper>
                <TextContent>
                    <Title>
                        Frontend
                    </Title>
                    <Title>
                        Development
                    </Title>
                    <Subtitle>
                        By Pontus Tahir
                    </Subtitle>
                </TextContent>

            </ContentWrapper>
        </StartpageWrapper>
    )
}

export default Startpage
