import React, { Component } from 'react';
import { HeroBg, HeroContainer, VideoBg,HeroContent,HeroH1,HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import video from '../../Videos/video.mp4'
import { Button } from '../ButtonElements';
class HeroSection extends Component {
    state = { 
        hover:false
    } 
    
    onHover = () => {
        this.setState({
            hover:!this.state.hover
        })
    }
    render() { 
        return (
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
                </HeroBg>
                <HeroContent>
                    <HeroH1>JS Is The King</HeroH1>
                    <HeroP>Learning JS and Framworks</HeroP>
                    <HeroBtnWrapper>
                        <Button primary={true} backW={true}  to='/'onMouseEnter={this.onHover} onMouseLeave={this.onHover}>Get Started{this.state.hover ? <ArrowForward /> : <ArrowRight />}</Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        );
    }
}
 
export default HeroSection;