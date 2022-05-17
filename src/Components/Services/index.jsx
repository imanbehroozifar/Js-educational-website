import React, { Component } from 'react';
import { ServicesCard, ServicesContainer,ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElelments';
import Icon1 from '../../Images/svg-1.svg'
import Icon2 from '../../Images/svg-2.svg'
import Icon3 from '../../Images/svg-3.svg'
class Services extends Component {
    state = {  } 
    render() { 
        return (
            <ServicesContainer id='services'>
                <ServicesH1>
                    Our Courses Feature
                </ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Project Oriented</ServicesH2>
                        <ServicesP>Use many project for learning better</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Free Courses</ServicesH2>
                        <ServicesP>Free Courses for learning</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>VIP Accound</ServicesH2>
                        <ServicesP>Access Courses paying 10$ per month</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        );
    }
}
 
export default Services;