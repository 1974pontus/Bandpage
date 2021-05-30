import React from 'react';
import { ContactWrapper, Title, Subtitle } from './contactElements';
import { Arrow } from '../ScrollArrowElement';

const Contact = () => {
    return (
        <ContactWrapper id="contact">
            <Title>
                Contact
            </Title>
            <Title>
                mail
            </Title>
            <Subtitle>
                github
            </Subtitle>
            <Arrow activeClass="active"
                to="startpage"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'>
                Upp Igen
            </Arrow>
        </ContactWrapper>
    )
}

export default Contact
