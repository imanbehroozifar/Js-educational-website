import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
export const Nav = styled.nav`
background:${({scrollNav})=>(scrollNav ? '#000':'transparent')};
margin-top: -80px;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;//16px
position: sticky;
top: 0;
z-index: 100;
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
width: 100%;
max-width: 1100px;
padding: 0 24px;

`
export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1rem;
display: flex;
align-items: center;
margin-left: 24;
font-weight: bold;
text-decoration: none;

`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width:768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width:768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;


`
export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;




&:hover{
    border-bottom: 3px solid #fab209;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width:768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`

border-radius: 50px;
background-color: #fab209;
white-space: nowrap;
padding: 10px 22px;
text-decoration: none;
color: #fff;
outline: none;
border: none;
font-size: 16px;
cursor: pointer;
transition: all .2s ease-in-out;

&:hover{
  transition: all .2s ease-in-out;
  background:#fff ;
  color: #fab209 ;
}

`