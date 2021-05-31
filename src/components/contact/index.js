import React from 'react';
import { ContactWrapper, Title, Subtitle } from './contactElements';
import { Arrow } from '../ScrollArrowElement';
import arrowImg from '../../assets/arrow.svg';


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
                <img src={arrowImg} alt="arrow" />
            </Arrow>
        </ContactWrapper>
    )
}

export default Contact
