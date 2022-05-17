import React, { Component } from 'react';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeObjFour, homeObjOne, homeObjTree, homeObjTwo } from '../Components/InfoSection/Data';
import Navbar from '../Components/Navbar';
import Services from '../Components/Services';
import Sidebar from '../Components/Sidebar';

class Home extends Component {
    state = { 
        isOpen:false
    } 
    toggle = () => {
        this.setState({
            isOpen :!this.state.isOpen
        })
    }
    render() { 
        return (

            <>
                <Sidebar isOpen={this.state.isOpen } toggle={this.toggle} />
                <Navbar toggle={this.toggle} />
                <HeroSection />
                <InfoSection {...homeObjOne} />
                <InfoSection {...homeObjTwo} />
                <InfoSection {...homeObjTree} />
                <InfoSection {...homeObjFour} />
                <Services /> 
                <Footer/>
            </>

        );
    }
}
 
export default Home;