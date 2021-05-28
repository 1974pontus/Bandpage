import React from 'react';
import { HiMenu } from 'react-icons/hi'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem } from './NavbarElements';
import homeLinkImg from '../../assets/home.svg';
// import './styles.scss';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img src={homeLinkImg} />
                    </NavLogo>
                    {/* <MobileIcon onClick={toggle}>
                        <HiMenu />
                    </MobileIcon> */}
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">HOME</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="work">WORK</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">CONTACT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>
                                <MobileIcon onClick={toggle}>
                                    <HiMenu />
                                </MobileIcon>
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
