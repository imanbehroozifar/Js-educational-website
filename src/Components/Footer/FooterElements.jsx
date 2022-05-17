import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const FooterContainer = styled.div`
background-color: #101522;
`
export const FooterWrap = styled.div`
max-width: 1100px;
padding: 48px 24px;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
display: flex;

`
export const FooterLinksContainer = styled.div`

display: flex;
justify-content: center;

@media screen and (max-width:820px) {
    padding-top:32px;
}

`

export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width:820px) {
    flex-direction: column;
}

`

export const FooterLinksItem = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width:420px) {
    margin: 0;
    padding: 10;
    width: 100%;

}
`

export const FooterLinksTitle = styled.h3`

font-size:16px;
margin-bottom: 16px;

`

export const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 8px;
font-size: 14px;
&:hover{
    color: #fab209;
    transition: all 0.3s ease-in-out;
}
`
export const FooterSocialContainer = styled.div`
max-width: 100%;
width: 1000px;

`

export const FooterSocialWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width:820px) {
    flex-direction: column;
}
`

export const SocialLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
cursor: pointer;
font-size: 1.5rem;
text-decoration: none;
`

export const WebSiteRights = styled.small`
color: #fff;
margin-bottom: 16px;

`
export const SocialIcon = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;

`
export const SocialIconLink = styled.a`
font-size:16px ;
color: #fff;
`