import React from 'react';

import sectionTest from "../images/ballImgs.svg"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import styled from 'styled-components';
function SportsIcons(props) {
    //Animation on scroll

    return (
        <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOut='animate__fadeOutLeftBig'> <SportsIconsStyle
        >
            <img src={sectionTest} alt="" />

        </SportsIconsStyle>
        </AnimationOnScroll >
    );
}
const SportsIconsStyle = styled.div`
    padding: 4rem 6%;
   
    width: 100%;
    @media only screen and (max-width: 800px) {
   padding-top: 1rem 6%;
  
    }
    img{
        width:100%;
    }
`



export default SportsIcons;