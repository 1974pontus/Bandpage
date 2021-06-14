import React from 'react';
import { WorkContainer, ContentWrapper, TextContent, Subtitle, Title, ArrowWrapper } from './workElements';
import { Arrow } from '../ScrollArrowElement';
import arrowImg from '../../assets/arrow1.png';
import { useInView } from 'react-intersection-observer';


const Work = () => {

    const { ref, inView } = useInView({
        threshold: 0.25,
    });

    function eq() {
        window.open("https://worstcasemixeq.netlify.app", '_blank');
    }
    function jogg() {
        window.open("http://jogg.se/", '_blank');
    }
    function lynk() {
        window.open("https://www.lynkco.com/en/", '_blank');
    }
    function github() {
        window.open("https://github.com/1974pontus", '_blank');
    }

    return (
        <WorkContainer id="work">
            <ContentWrapper ref={ref}>
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
                {inView &&
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
                }
            </ContentWrapper>
        </WorkContainer>
    )
}

export default Work
