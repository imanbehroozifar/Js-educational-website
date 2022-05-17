import React, { Component } from 'react';
import { CloseIcon, Icon, SidebarContainer,SideBtn,SidebarMenu,SidebarLink,SidebarRouter,SidebarWRapper } from './SidebarElements';


class Sidebar extends Component {
    state = {  } 
    render() { 
        return (

            <SidebarContainer isOpen={this.props.isOpen}onClick={this.props.toggle}>
                <Icon>
                    <CloseIcon/> 
                </Icon>
                <SidebarMenu>
                    <SidebarWRapper>
                         <SidebarLink to='/' onClick={this.props.toggle}>Home</SidebarLink>
                         <SidebarLink to='/courses'onClick={this.props.toggle}>Courses</SidebarLink>
                         <SidebarLink to='/blog'onClick={this.props.toggle}>Blog</SidebarLink>
                         <SidebarLink to='/roudmap'onClick={this.props.toggle}>Roud Map</SidebarLink>
                    <SideBtn>
                         <SidebarRouter to='/signin'>Sign In</SidebarRouter>
                    </SideBtn>
                   </SidebarWRapper>
                </SidebarMenu>
            </SidebarContainer>

        );
    }
}
 
export default Sidebar;