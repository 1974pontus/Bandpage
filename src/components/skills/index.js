import React from 'react';
import { SkillsContainer, SkillsWrapper, SkillsRow, ArrowRow, Skillbar } from './skillsElements';
import { Arrow } from '../ScrollArrowElement';
import arrowImg from '../../assets/arrow.svg';
import { css } from 'styled-components';


const Skills = () => {

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
            <SkillsWrapper>
                <SkillsRow>
                    <h3 style={{ color: "white" }}>HTML</h3>
                    <Skillbar addCSS={myHTML} />
                    <h3 style={{ color: "white" }}>CSS</h3>
                    <Skillbar addCSS={myCSS} />
                    <h3 style={{ color: "white" }}>JavaScript</h3>
                    <Skillbar addCSS={myJs} />
                    <h3 style={{ color: "white" }}>REACT</h3>
                    <Skillbar addCSS={myREACT} />
                    <h3 style={{ color: "white" }}>Adobe</h3>
                    <Skillbar addCSS={myAdobe} />
                    <h3 style={{ color: "white" }}>Azure</h3>
                    <Skillbar addCSS={myAzure} />
                    <h3 style={{ color: "white" }}>GitHub</h3>
                    <Skillbar addCSS={myGitHub} />
                    <h3 style={{ color: "white" }}>Figma</h3>
                    <Skillbar addCSS={myFigma} />
                </SkillsRow>
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
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Skills