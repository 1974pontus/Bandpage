import React from 'react';
import { ContactWrapper, Title, Subtitle } from './contactElements';
import { Arrow } from '../ScrollArrowElement';

const Contact = () => {
    return (
        <ContactWrapper>
            <Title>
                Contact
            </Title>
            <Title>
                mail
            </Title>
            <Subtitle>
                github
            </Subtitle>
            <Arrow>
                Bläddra
            </Arrow>
        </ContactWrapper>
    )
}

export default Contact
