import React from 'react';
import { WorkContainer, ContentWrapper, TextContent, Subtitle, Title, ArrowWrapper } from './workElements';
import { Arrow } from '../ScrollArrowElement';
import arrowImg from '../../assets/arrow1.png';


const Work = () => {
    return (
        <WorkContainer id="work">
            <ContentWrapper>
                <TextContent>
                    <Subtitle>
                        Web Audio API
                    </Subtitle>
                    <Title>
                        Worst Case Mix-EQ
                    </Title>
                    <Subtitle>
                        lite jobb jobb
                    </Subtitle>
                    <Title>
                        Mega fet web
                    </Title>
                    <Subtitle>
                        lite jobb jobb
                    </Subtitle>
                    <Title>
                        Mega fet web
                    </Title>
                    <Subtitle>
                        GitHub
                    </Subtitle>
                    <Title>
                        https://github.com/1974pontus
                    </Title>

                </TextContent>
                <ArrowWrapper>
                    <Arrow activeClass="active"
                        to="skills"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'>
                        <img src={arrowImg} alt="arrow" />
                    </Arrow>
                </ArrowWrapper>
            </ContentWrapper>
        </WorkContainer>
    )
}

export default Work
