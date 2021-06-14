import React from 'react';
import { AboutWrapper, Text, TextContent, ArrowWrapper, ContentWrapper } from './aboutElements';
import { Arrow } from '../ScrollArrowElement';
import arrowLightImg from '../../assets/arrowLight.svg';
import { useInView } from 'react-intersection-observer';


const About = () => {

    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <AboutWrapper id="about">
            <ContentWrapper ref={ref}>
                <TextContent>
                    <Text>
                        Att byta karriär mitt i livet är ett stort steg att ta. Min nyfikenhet på utvecklaryrket utgjorde grunden till att jag nu i vår tar examen från Frontendutvecklarlinjen på Medieinstitutet i Göteborg. Det har varit det absolut bästa jag gjort och jag ser väldigt mycket fram emot en fortsatt karriär inom utveckling och webbdesign.
                    <br />
                        <br />
                    Tidigare har jag jobbat som bland annat chefskock och yrkesmusiker - något som kräver lagspel, förmåga att planera, lösa problem och innovera. Min långa erfarenhet av teamarbete i olika former har gjort att jag kan fungera som ett kitt i ett team där människor har olika åldrar, roller och kompetenser. Samtidigt hittar jag gärna lösningar på egen hand och tar med mig en envetenhet att nå företaget uppsatta mål tillsammans med mina kollegor.
                    <br />
                        <br />
                    Jag brinner för allt som har med frontendutveckling att göra, men har en extra stark dragning till designhantverket. Jag har dock genom mitt karriärbyte visat mig själv att jag inte räds en utmaning, så jag är trygg med att kunna lära mig nya ramverk, backend och annat som yrket kräver.
                    </Text>
                </TextContent>
                {inView &&
                    <ArrowWrapper>
                        <Arrow activeClass="active"
                            to="work"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'>
                            <img src={arrowLightImg} alt="arrow" />
                        </Arrow>
                    </ArrowWrapper>
                }
            </ContentWrapper>
        </AboutWrapper>


    )
}

export default About
