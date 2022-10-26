import React from 'react';
import styled from 'styled-components';
import { animationTime, BrandGreen, customInput, globalFormik, paddingMain, paddingSmallMain, tertiaryWhite } from './GlobalStyle';
import coins from "../images/coins.gif"

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
function BeforeFooter(props) {
    return (
        <BeforeFooterStyle id='beforefooter'>
            <div className="main-content">
                <AnimationOnScroll animateIn='animate__fadeInLeft' style={{ width: " 100%", }}>
                    <div className="content-1">

                        <h2>Put your money where your mouth is </h2>
                        <p className='p1'>Make that duel with Dalukwa</p>
                        <p className="p2">Our P2P marketplace connects and enables sports lovers to earn cash prizes directly through competitive 1 vs 1 duels</p>
                        {globalFormik()}
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn='animate__zoomIn' className='coins' ><div className="content-2">

                </div></AnimationOnScroll>

            </div>
        </BeforeFooterStyle>
    );
}
const BeforeFooterStyle = styled.section`
    padding: ${paddingMain};
    @media only screen and (max-width: 1040px) {
     padding:${paddingSmallMain};
    }
    width: 100%;
    .main-content{
    display: flex;
    width: 100%;
align-items: center;
    justify-content: space-between;
    position: relative;
@media only screen and (max-width: 800px) {
   flex-direction: column;
    }
    .content-1{

        width: 100%;
        right: 0;
        position: relative;
        z-index: 300;
        animation: fromLeft  ${animationTime} ease-in-out;
       
        h2{
            margin-top: 7rem;
            font-size: 2.3rem;
            font-weight: 700;
            color: ${BrandGreen};
            line-height: 1;
            @media only screen and (max-width: 500px) {
             font-size: 2rem;
             }
        }
        p{
            margin-top: 1rem;
            color: ${tertiaryWhite};
        }
        .p1{
            font-size: 1.7rem;
            font-weight: 700;
           @media only screen and (max-width: 500px) {
           
             font-size: 1.5rem;
             }
          
        }
        .p2{
            font-weight: 300;
            font-size: 18px;
              @media only screen and (max-width: 1040px) {
    font-size: 1rem;
    }
        }
    }
   }
   .formik-form{
  ${customInput}
  width: 73%;
  margin-top: 1.2rem;
   @media only screen and (max-width: 1070px) {
      flex-direction:column;
    }
    @media only screen and (max-width: 995px) {
   width: 100%;
    }
   }
   .content-2{

    width:28rem;
    height: 80vh;
    background-image: url(${coins});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
   position: relative;
   
   z-index: 100;
     @media only screen and (max-width: 1040px) {
    width: 25rem;
    }
    @media only screen and (max-width: 995px) {
   width: 100%;
  
    }

 @media only screen and (max-width: 800px) {
           width: 100%;
          height: 60vh;
    }
   }
   .coins{
    width: 35%;
    @media only screen and (max-width: 995px) {
   width: 100%;
  
    }
   }
`
export default BeforeFooter;