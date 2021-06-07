import React from 'react';
import { ContactWrapper, Title, ArrowWrapper, ContentWrapper, TextContent } from './contactElements';
import { Arrow } from '../ScrollArrowElement';
import arrowImg from '../../assets/contactArrow.png';



const Contact = () => {
    return (
        <ContactWrapper id="contact">
            <ContentWrapper>
                <TextContent>
                    <Title>
                        Contact
                    </Title>
                    <Title>
                        mail
                    </Title>
                    <Title>
                        github
                    </Title>
                </TextContent>
                <ArrowWrapper>
                    <Arrow activeClass="active"
                        to="startpage"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'>
                        <img src={arrowImg} alt="arrow" />
                    </Arrow>
                </ArrowWrapper>
            </ContentWrapper>
        </ContactWrapper>
    )
}

export default Contact
