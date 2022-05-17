import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import{Link as LinkR} from 'react-router-dom'
export const SidebarContainer = styled.aside`

position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items:center;
transition:0.3s ease;
opacity:${({isOpen})=>(isOpen ?'100%' :'0')};
top :${({isOpen})=>(isOpen ?'0' :'-100%')};
left:0;

`

export const CloseIcon = styled(FaTimes)`
color: #fff;
`

export const Icon = styled.div`
position: absolute;
top:1.2rem;
right: 1.5rem;
background:transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
export const SidebarWRapper = styled.div`
 
 color: #fff;

`
export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns:1fr ;
grid-template-rows: repeat(5,80px);
text-align: center;

@media screen and (max-width:480px) {
    grid-template-rows: repeat(5,60px);
}
`
export const SidebarLink = styled(LinkS)`

display: flex;

height: 100%;
align-items: center;
justify-content: center;
font-size: 1.5rem;
list-style: none;
transition:.2s ease-in-out ;
color: #fff;
text-decoration: none;
cursor: pointer;
&:hover{
    color: #fab209;
    transition: all 0.2s ease-in-out;
    font-size: 1.7rem;
}


`

export const SideBtn = styled.div`

display: flex;
justify-content: center;

`

export const SidebarRouter = styled(LinkR)`

border-radius: 50px;
background: #fab209;
white-space: nowrap;
padding: 16px 64px;
outline: none;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-size: 16px;
cursor: pointer;
color: #fff;


&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #fab209;
}

`
