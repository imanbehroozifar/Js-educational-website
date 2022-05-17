import React, { Component } from 'react'
import { Nav,NavbarContainer,NavLogo,NavMenu,MobileIcon,NavItem,NavLinks,NavBtn,NavBtnLink } from './NavbarElements';
import {FaBars} from 'react-icons/fa'
class Navbar extends Component {
    state = { scrollNav:false} 
    
    changeNav = () => {
        if (window.scrollY >= 80) {
          return  this.setState({ scrollNav:true})
        } else {
           return   this.setState({ scrollNav:false})
        }
    }
  
     
    render() { 

       window.addEventListener('scroll',this.changeNav)

        return (
            <>
                <Nav scrollNav={this.state.scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' >Logo</NavLogo>
                        <MobileIcon onClick={this.props.toggle}><FaBars/></MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='/'>Home</NavLinks>
                            </NavItem>
                             <NavItem>
                                <NavLinks to='about'>Adout</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='courses'>courses</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='blog'>Blog</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='roadmap'>Road Map</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='services'>Feature</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/signin'>
                                    Sign in
                            </NavBtnLink>
                        </NavBtn>
                    </NavbarContainer> 
                </Nav>
            </>
        );
    }
}
 
export default Navbar;