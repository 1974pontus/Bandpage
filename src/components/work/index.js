import React from 'react';
import { WorkContainer, WorkWrapper, WorkRow, ArrowRow } from './workElements';
import { Arrow } from '../ScrollArrowElement';
import arrowImg from '../../assets/arrow.svg';


const Work = () => {
    return (
        <WorkContainer id="work">
            <WorkWrapper>
                <WorkRow>
                    <h1>WORK</h1>
                </WorkRow>
                <ArrowRow>
                    <Arrow activeClass="active"
                        to="skills"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'>
                        <img src={arrowImg} alt="arrow" />
                    </Arrow>
                </ArrowRow>
            </WorkWrapper>
        </WorkContainer>
    )
}

export default Work
