import React from 'react';
import { ContactWrapper, Title, ArrowWrapper, ContentWrapper, TextContent, Subtitle } from './contactElements';
import { Arrow } from '../ScrollArrowElement';
import arrowImg from '../../assets/contactArrow.png';



const Contact = () => {

    function email() {
        window.location.href = "mailto:pontus.tahir@gmail.com";
    }
    function gitHub() {
        window.location = "https://github.com/1974pontus";
    }
    function linkedin() {
        window.location = "https://www.linkedin.com/in/pontus-tahir-8511211a9/";
    }

    return (
        <ContactWrapper id="contact">
            <ContentWrapper>
                <TextContent>
                    <Title style={{ fontSize: '72px', marginLeft: '-10rem', paddingBottom: '6rem' }}>
                        Contact:
                    </Title>
                    <Subtitle onClick={email}>
                        Send me an email
                    </Subtitle>
                    <Subtitle onClick={gitHub}>
                        Visit my GitHub
                    </Subtitle>
                    <Subtitle onClick={linkedin}>
                        Visit my LinkedIn
                    </Subtitle>
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
