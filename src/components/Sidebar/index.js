import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle}
                        activeClass="active"
                        to="startpage"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                        HOME
                   </SidebarLink>
                    <SidebarLink onClick={toggle}
                        activeClass="active"
                        to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'>
                        ABOUT
                   </SidebarLink>
                    <SidebarLink onClick={toggle}
                        activeClass="active"
                        to="work"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'>
                        WORK
                   </SidebarLink>
                    <SidebarLink onClick={toggle}
                        activeClass="active"
                        to="skills"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'>
                        SKILLS
                   </SidebarLink>
                    <SidebarLink onClick={toggle}
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'>
                        CONTACT
                   </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;