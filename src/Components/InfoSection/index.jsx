import React, { Component } from 'react';
import { Button } from '../ButtonElements';
import { Column1, InfoContainer, InfoRow, InfoWrapper ,TextWrapper,TopLine,Heading ,SubTitle,BtnWrap, Column2, ImgWrap, Img} from './InfoSectionElements';


class InfoSection extends Component {
    state = {}
    render() { 
        let {id,lightBg,topLine,heading,description,buttonLabel,imgStart,img,alt,primary,backW,dark,colorDark} = this.props
        return (
            <>
                <InfoContainer lightBg={lightBg} id={id}>
                    <InfoWrapper>
                        <InfoRow imgStart={imgStart}>
                            <Column1>
                                <TextWrapper >
                                    <TopLine>{topLine}</TopLine>
                                    <Heading lightBg={lightBg}>{heading}</Heading>
                                    <SubTitle lightBg={lightBg}>{description}</SubTitle>
                                    <BtnWrap>
                                        <Button to='/' primary={primary} backW={backW} dark={dark} colorDark={colorDark}>
                                                {buttonLabel}
                                        </Button>
                                    </BtnWrap>
                                </TextWrapper>   
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={img} alt={alt}>
                                    
                                    </Img>
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>
            </>
        );
    }
}
 
export default InfoSection;