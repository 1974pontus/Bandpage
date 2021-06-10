import React from 'react';
import { WorkContainer, ContentWrapper, TextContent, Subtitle, Title, ArrowWrapper } from './workElements';
import { Arrow } from '../ScrollArrowElement';
import arrowImg from '../../assets/arrow1.png';


const Work = () => {

    function eq() {
        window.location = "https://worstcasemixeq.netlify.app/eq.html";
    }
    function jogg() {
        window.location = "http://jogg.se/";
    }
    function lynk() {
        window.location = "https://www.lynkco.com/en/";
    }
    function github() {
        window.location = "https://github.com/1974pontus";
    }

    return (
        <WorkContainer id="work">
            <ContentWrapper>
                <TextContent>
                    <Subtitle>
                        Web Audio API
                    </Subtitle>
                    <Title onClick={eq}>
                        Worst Case Mix-EQ
                    </Title>
                    <Subtitle>
                        Design Update
                    </Subtitle>
                    <Title onClick={jogg}>
                        jogg.se
                    </Title>
                    <Subtitle>
                        Internship Coding
                    </Subtitle>
                    <Title onClick={lynk}>
                        Lynk&Co
                    </Title>
                    <Subtitle>
                        Other school projects
                    </Subtitle>
                    <Title onClick={github}>
                        github.com/1974pontus
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
