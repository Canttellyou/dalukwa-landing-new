import React from 'react';
import styled from 'styled-components';
import { paddingSmallMain, BrandGreen, customInput, globalFormik, paddingMain, secondaryWhite } from './GlobalStyle';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import wiggle from "../images/wiggle.svg";
import smartphone from "../images/smartphone.svg"
import handshake from "../images/handshake.svg"
import moneyBag from "../images/moneyBag.svg"

function ThreeSteps(props) {
    return (
        <ThreeStepsStyle>

            <AnimationOnScroll animateIn="animate__fadeInDownBig" ><div className="easy-steps">
                <p className="primary">3 Easy Steps to Cashing OUT</p>
                <p className="secondary">Winning on Dalukwa is easy. We have done all the heavy liftings so that you may enjoy a wonderful experience. </p>
            </div>

            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInLeftBig"
                style={{
                    position: "relative",
                    zIndex: "3000"
                }}>{globalFormik()}</AnimationOnScroll>

            <div className="wiggle">
                <AnimationOnScroll animateIn="animate__zoomIn" animateOut='animate__zoomOut'>
                    <img src={wiggle} alt="wiggle" />
                </AnimationOnScroll>
            </div>
            <div className="all-benefits">
                <AnimationOnScroll animateIn="animate__fadeInUp" style={{ width: "100%" }} >
                    <div className="benefits benefits-1">
                        <img src={smartphone} alt="smartphone" />
                        <h2>Create your account</h2>
                        <p>(Don’t worry we will send you an email when you are able to do so).</p>
                        <div className="benefit-number">1</div>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp" style={{ width: "100%" }}><div className="benefits benefits-2">
                    <img src={handshake} alt="smartphone" />
                    <h2>Create or find a duel.</h2>
                    <p>Browse your favorite sports & create a duel from any games or find duels from the lobby to counter.</p>
                    <div className="benefit-number">2</div>
                </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp" style={{ width: "100%" }}>
                    <div className="benefits benefits-3">
                        <img src={moneyBag} alt="smartphone" />
                        <h2>Win Big</h2>
                        <p>Sit back, enjoy the game and win. You no longer have to hassle anyone for your winnings, it’s paid instantly.</p>
                        <div className="benefit-number">3</div>
                    </div>
                </AnimationOnScroll>


            </div>



        </ThreeStepsStyle>
    );
}
const ThreeStepsStyle = styled.div`
   width: 100%;
   overflow: hidden;
   padding: ${paddingMain};
   @media only screen and (max-width: 1040px) {
     padding:${paddingSmallMain};
    }
   margin-top: 6rem;
   @media only screen and (max-width: 1273px) {
      height: 120vh;
    }
      @media only screen and (max-width: 700px) {
             height: 160vh;
             margin-top: 2rem;
             }

   position: relative;
   z-index: 300;
.easy-steps{
    width: 100%;
    position: relative;

    .primary{
  font-weight: 800;
    font-size: 2.2rem;
     
     @media only screen and (max-width: 700px) {
             text-align: left;
             font-size: 2rem;
             }
              @media only screen and (max-width: 500px) {
             text-align: left;
             font-size: 1.7rem;
             }
    }
    .secondary{
width: 50%;
margin-top: 2rem;
font-size: 1.4rem;
color: ${secondaryWhite};
 @media only screen and (max-width: 995px) {
    width: 100%;
    }
     @media only screen and (max-width: 700px) {
             text-align: left;
             font-size: 1.2rem;
             }
              @media only screen and (max-width: 500px) {
             text-align: left;
             margin-top: 1rem;
             font-size: 1rem;
             }
    }
  
}
.formik-form{
    ${customInput}
    width: 50%;
    @media only screen and (max-width: 995px) {
    width: 100%;
    flex-direction: column;
    }
 
}
.wiggle{
  transform: translateY(-8rem);
    width: 100%;
    display: flex;
    position: relative;
    z-index: 200;
    
    img{
        position: relative;
    z-index: 200;
        width: 95%;
        @media only screen and (max-width: 995px) {
    display: none;
    }
    }
}
.all-benefits{
    display: flex;
    margin-top: -17rem;
    justify-content: space-between;
    position: relative;
    height: 15rem;
    z-index: 300;
   @media only screen and (max-width: 995px) {
    margin-top: 0;
    }
     @media only screen and (max-width: 700px) {
             flex-direction: column;
             position: initial;
             }
    
}
.benefits{
    width: 75%;
    position: relative;
    /* z-index: 300; */
    @media only screen and (max-width: 995px) {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    width: 90%;
    img{
        width: 3.5rem;
        height: 3.5rem;
    }
    }
    
   h2{
    margin-top: 1.2rem;
    font-weight: 800;
    color: ${BrandGreen};
    font-size: 1rem;
    
   }
   p{
    margin-top: .5rem;
    color: ${secondaryWhite};
    font-weight: 500;
    line-height: 28px;
    font-size: 1rem;
   }
   .benefit-number{
    font-weight: 400;
    position: absolute;
right: 3rem;
top: -2.5rem;
opacity: 0.05;
font-size: 13rem;
color: ${BrandGreen};
@media only screen and (max-width: 995px) {
       top: 3rem;

    }
   
   }
}
.benefits-1{
    position: absolute;
    top: 4rem;
    left: 8rem;
     @media only screen and (max-width: 1070px) {
      top: 5rem;
    }
    @media only screen and (max-width: 995px) {
        position: initial;

    }
}
.benefits-2{
     position: absolute;
     top: -4rem;
     left: 45%;
     @media only screen and (max-width: 1070px) {
      top: -2rem;
    }
     @media only screen and (max-width: 995px) {
        position: initial;

    }
}
.benefits-3{
     position: absolute;
     top: -17.5rem;
     right: 0;
      @media only screen and (max-width: 1070px) {
      top: -13rem;
      right: -3rem;
    }
    @media only screen and (max-width: 995px) {
        position: initial;

    }
}
`
export default ThreeSteps;