import React from 'react';
import { WorkContainer, WorkWrapper, WorkRow, ArrowRow } from './workElements';
import { Arrow } from '../ScrollArrowElement';

const Work = () => {
    return (
        <WorkContainer id="work">
            <WorkWrapper>
                <WorkRow>
                    <h1>WORK</h1>
                </WorkRow>
                <ArrowRow>
                    <Arrow activeClass="active"
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'>
                        fortsatt
                    </Arrow>
                </ArrowRow>
            </WorkWrapper>
        </WorkContainer>
    )
}

export default Work
