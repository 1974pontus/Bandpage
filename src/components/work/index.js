import React from 'react';
import { WorkContainer, WorkWrapper, WorkRow, ArrowRow } from './workElements';
import { Arrow } from '../ScrollArrowElement';

const Work = () => {
    return (
        <>
            <WorkContainer>
                <WorkWrapper>
                    <WorkRow>
                        <h1>WORK</h1>
                    </WorkRow>
                    <ArrowRow>

                        <Arrow to='work'>
                            fortsatt
                    </Arrow>
                    </ArrowRow>
                </WorkWrapper>
            </WorkContainer>
        </>
    )
}

export default Work
