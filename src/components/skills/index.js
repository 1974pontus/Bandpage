import React from 'react';
import { SkillsContainer, SkillsWrapper, SkillsRow, ArrowRow, Skillbar } from './skillsElements';
import { Arrow } from '../ScrollArrowElement';
import arrowImg from '../../assets/arrow.svg';
import { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';



const Skills = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const myHTML = css`
    max-width: 85%;
`
    const myCSS = css`
    max-width: 80%;
`
    const myJs = css`
    max-width: 60%;
`
    const myREACT = css`
    max-width: 58%;
`
    const myAdobe = css`
    max-width: 57%;
`
    const myAzure = css`
    max-width: 55%;
`
    const myGitHub = css`
    max-width: 60%;
`
    const myFigma = css`
    max-width: 75%;
`

    return (
        <SkillsContainer id="skills">
            <SkillsWrapper ref={ref}>
                {inView &&
                    <SkillsRow>
                        <h4 style={{ color: "white" }}>HTML</h4>
                        <Skillbar addCSS={myHTML} />
                        <h4 style={{ color: "white" }}>CSS</h4>
                        <Skillbar addCSS={myCSS} />
                        <h4 style={{ color: "white" }}>JavaScript</h4>
                        <Skillbar addCSS={myJs} />
                        <h4 style={{ color: "white" }}>REACT</h4>
                        <Skillbar addCSS={myREACT} />
                        <h4 style={{ color: "white" }}>Adobe</h4>
                        <Skillbar addCSS={myAdobe} />
                        <h4 style={{ color: "white" }}>Azure</h4>
                        <Skillbar addCSS={myAzure} />
                        <h4 style={{ color: "white" }}>GitHub</h4>
                        <Skillbar addCSS={myGitHub} />
                        <h4 style={{ color: "white" }}>Figma</h4>
                        <Skillbar addCSS={myFigma} />
                    </SkillsRow>
                }
                {inView &&
                    <ArrowRow>
                        <Arrow activeClass="active"
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'>
                            <img src={arrowImg} alt="arrow" />
                        </Arrow>
                    </ArrowRow>
                }
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Skills