import React, { useState, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import homeLinkImg from '../../assets/logoStar.svg';
// import './styles.scss';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    })

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <img src={homeLinkImg} alt="logo" />
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                activeClass="active"
                                to="startpage"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >HOME</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                activeClass="active"
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                            >
                                ABOUT
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                activeClass="active"
                                to="work"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                            >WORK</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                activeClass="active"
                                to="skills"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                            >SKILLS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                activeClass="active"
                                to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                            >CONTACT</NavLinks>
                        </NavItem>
                    </NavMenu>


                    <MobileIcon onClick={toggle}>
                        <HiMenu />
                    </MobileIcon>


                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
