import React, { Component } from 'react';
import { FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItem, FooterLinksTitle, FooterLinksWrapper, FooterWrap,FooterSocialContainer, FooterSocialWrap, SocialLogo, WebSiteRights, SocialIcon, SocialIconLink } from './FooterElements';
import {FaFacebook,FaYoutube,FaInstagram,FaTwitter} from 'react-icons/fa'

class Footer extends Component {
    state = {  } 
    render() { 
        return (

            <FooterContainer>
                    <FooterWrap>
                        <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinksItem>
                                <FooterLinksTitle>About Us</FooterLinksTitle>
                                <FooterLink to='home'>Home</FooterLink>
                                <FooterLink to='courses'>Courses</FooterLink>
                                <FooterLink to='blog'>Blg</FooterLink>
                                <FooterLink to='roadmap'>Road Map</FooterLink>
                            </FooterLinksItem>
                            <FooterLinksItem>
                                <FooterLinksTitle>About Us</FooterLinksTitle>
                                <FooterLink to='home'>Home</FooterLink>
                                <FooterLink to='courses'>Courses</FooterLink>
                                <FooterLink to='blog'>Blg</FooterLink>
                                <FooterLink to='roadmap'>Road Map</FooterLink>
                            </FooterLinksItem>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinksItem>
                                <FooterLinksTitle>About Us</FooterLinksTitle>
                                <FooterLink to='home'>Home</FooterLink>
                                <FooterLink to='courses'>Courses</FooterLink>
                                <FooterLink to='blog'>Blg</FooterLink>
                                <FooterLink to='roadmap'>Road Map</FooterLink>
                            </FooterLinksItem>
                            <FooterLinksItem>
                                <FooterLinksTitle>About Us</FooterLinksTitle>
                                <FooterLink to='home'>Home</FooterLink>
                                <FooterLink to='courses'>Courses</FooterLink>
                                <FooterLink to='blog'>Blg</FooterLink>
                                <FooterLink to='roadmap'>Road Map</FooterLink>
                            </FooterLinksItem>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <FooterSocialContainer>
                        <FooterSocialWrap>
                            <SocialLogo to='/'>Logo</SocialLogo>
                            <WebSiteRights>imanbehroozifar</WebSiteRights>
                            <SocialIcon>
                                <SocialIconLink>
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink>
                                    <FaYoutube/>
                                </SocialIconLink>
                                <SocialIconLink>
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink>
                                    <FaTwitter/>
                                </SocialIconLink>
                            </SocialIcon>
                        </FooterSocialWrap>
                    </FooterSocialContainer>
                    </FooterWrap>
            </FooterContainer>
        );
    }
}
 
export default Footer;