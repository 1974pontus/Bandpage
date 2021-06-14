import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { AiOutlineMenu } from 'react-icons/ai';


export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 60px 80px 60px 60px;
  align-items: center;

  @media (max-width: 550px) {
    padding: 20px 30px 60px 20px;
    }
`;
export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const MobileIcon = styled(AiOutlineMenu)`
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  transition: all .2s ease-in-out;
    &:hover{
      transform: scale(1.2)
    }

  @media screen and (min-width: 1025px) {
    display: none;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.3rem;
    margin-top: -20px;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 0;
`;
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #F3827C;
  }
  &:active {
    color: #F3827C;
  }
`;
