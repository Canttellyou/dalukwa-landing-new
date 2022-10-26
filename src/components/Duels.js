import React from 'react';
import styled from 'styled-components';
import football from "../images/football.svg";
import basketball from "../images/basketball.svg";
import golf from "../images/golf.svg";
import tennis from "../images/tennis.svg";
import Cycling from "../images/Cycling.svg";
import boxing from "../images/boxing.svg";
import more from "../images/more.svg";
import volleyball from "../images/volleyball.svg";
import card1 from "../images/card-1.svg"
import card2 from "../images/card2.svg"
import card3 from "../images/card-3.svg"
import card4 from "../images/card-4.svg"
import card5 from "../images/card-5.svg"

import { BrandGreen, paddingMain } from './GlobalStyle';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
function Duels(props) {
    return (
        <DuelsStyle>
            <AnimationOnScroll animateIn='animate__zoomIn'>
                <h2 className="header">Duel Lobby</h2>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInDown' style={{
                animationDuration: '1s',
                animationDelay: '0s'
            }}>
                <a href="#beforefooter"><div className="sports-types">
                    <img src={football} alt="football" className='football' />
                    <img src={basketball} alt="basketball" />
                    <img src={golf} alt="golf" />
                    <img src={tennis} className="icon-small" alt="tennis" />
                    <img src={volleyball} className="volleyball" alt="volleyball" />
                    <img src={boxing} className="icon-small" alt="boxing" />
                    <img src={Cycling} className="icon-small" alt="Cycling" />
                    <img src={more} alt="more" />
                </div></a>
            </AnimationOnScroll>



            <div className="cards">
                <AnimationOnScroll animateIn='animate__fadeInLeft'>
                    <a href="#beforefooter"><img src={card1} alt="card" /></a>

                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInRight'>
                    <a href="#beforefooter"><img src={card2} alt="card" /></a>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInLeft'>
                    <a href="#beforefooter"><img src={card3} alt="card" /></a>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInRight'>
                    <a href="#beforefooter"><img src={card4} alt="card" /></a>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInLeft'>
                    <a href="#beforefooter"><img src={card5} alt="card" /></a>
                </AnimationOnScroll>
            </div>
        </DuelsStyle>
    );
}
const DuelsStyle = styled.div`

    padding: ${paddingMain};
    margin-top: 7rem;
    overflow: hidden;
    .header{
        font-size: 2.5rem;
        font-family: 700;
        color: ${BrandGreen};
    }
    .sports-types{
        display: flex;
        margin-top: 2rem;
        justify-content: space-between;
        
        width: 100%;
        img{
            padding-bottom: 2px;
            @media only screen and (max-width: 995px) {
   width:3rem;
    }
     @media only screen and (max-width: 800px) {
 width: 3.5rem;
  
    }
        }
    }
    .football{
        border-bottom: 2.5px solid ${BrandGreen};
    }
.cards{
    margin-top: .75rem;
    width: 100%;
    margin-bottom: 1rem;
    img{
        width: 100%;
    }
}
 .animate__fadeInDownBig {
  --animate-duration: 5s;
}
 @media only screen and (max-width: 500px) {
  .icon-small{
    display: none;
  }
  
    }
`
export default Duels;