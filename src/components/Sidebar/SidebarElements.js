import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 30%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    @media screen and (max-width: 768px) {
        width: 70%;
    }
`
export const CloseIcon = styled(AiOutlineClose)`
    color: #fff;
`
export const Icon = styled.div`
    position: absolute;
    top: 5.2rem;
    right: 3.6rem;
    background: trasparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    @media (max-width: 550px) {
        top: 2.2rem;
        right: 1.7rem;
        font-size: 1.5rem;
    }
`
export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: right;

`
export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;

&:hover {
    color: #F3827C;
    transition: 0.2s ease-in-out;
}
`