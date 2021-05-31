import React from 'react';
import { SkillsContainer, SkillsWrapper, SkillsRow, ArrowRow } from './skillsElements';
import { Arrow } from '../ScrollArrowElement';
import arrowImg from '../../assets/arrow.svg';


const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <SkillsWrapper>
                <SkillsRow>
                    <h1>SKILLS</h1>
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