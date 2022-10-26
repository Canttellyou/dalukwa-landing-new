import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
//Importing Formik
import Gif from "../images/bouncingBall.gif";
import hightLight1 from "../images/highlight1.svg"


import boxPattern from "../images/boxPatterns.svg"
import { animationTime, BrandGreen, customInput, globalFormik, paddingMain, tertiaryWhite, paddingSmallMain } from './GlobalStyle';
function Header(props) {
    return (
        <HeaderStyle>

            <img src={boxPattern} alt="pattern" className='pattern-img' />
            <img src={hightLight1} alt="highlight" className='highLight-1' />
            <img src={hightLight1} alt="highlight" className='highLight-2' />

            <div className="main-content">
                <div className="content-1">

                    <h2>Duel with Dalukwa today!</h2>
                    <p>Compete directly with your friends, peers, colleagues, and even with strangers on the games you love.</p>
                    {globalFormik()}
                </div>

                <div className="content-2">

                </div>
            </div>

        </HeaderStyle>
    );
}



const HeaderStyle = styled(motion.div)`
   position: relative;
   width: 100%;
   overflow-x:hidden;
   padding: ${paddingMain};
   
   @media only screen and (max-width: 1040px) {
     padding:${paddingSmallMain};
    }
   .joinArrow{
        @keyframes scaleOut {
            from{
                transform: scale(.5);
            }
            to{
                transform: scale(1);
            }
        }
        position: absolute;
        top: 55%;
        left:49%;
        animation:scaleOut ${animationTime} ease-in-out ;
    }
   .pattern-img{
position: absolute;
top: -7rem;
left: 0;
z-index: 200;
transform: rotate(0.1deg);
   }
   .highLight-1{
    position: absolute;
    top: 25%;
    right: 28%;
     @media only screen and (max-width: 1040px) {
      right:32%;
    }
    @media only screen and (max-width:1040px) {
      right:35%;
      display:none;
    }
    z-index: 300;
    
   }
   .highLight-2{
    position: absolute;
    top: 20%;
    right: 12%;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 300;
      @media only screen and (max-width: 1040px) {
    display:none;
    }
   }
   .main-content{
    display: flex;
    width: 100%;
    margin-top: 4rem;
    justify-content: space-between;
    position: relative;
        @media only screen and (max-width: 1040px) {
    flex-direction:column;
    }
    .content-1{
        @keyframes fromLeft {
            from{
                transform: translateX(-100%);
            }
            to{
                transform: translateX(0);
            }
        }
        width: 50%;
        position: relative;
        z-index: 300;
        animation: fromLeft  ${animationTime} ease-in-out;
            @media only screen and (max-width: 1040px) {
    width: 100%;
    }
        h2{
            margin-top: 9rem;
            font-size: 3.3rem;
            font-weight: 700;
            color: ${BrandGreen};
             @media only screen and (max-width: 1070px) {
      font-size:3rem;
    }
    @media only screen and (max-width: 1040px) {
      font-size:2.5rem;
      
    }
     @media only screen and (max-width: 500px) {
             margin-top:3rem;
             font-size: 1.8rem;
             }
        }
        p{
            margin-top: 3rem;
            font-size: 1.5rem;
            color: ${tertiaryWhite};
             @media only screen and (max-width: 1070px) {
      margin-top:1rem;
    }
    @media only screen and (max-width: 1040px) {
      font-size:1.2rem;
    }
     @media only screen and (max-width: 500px) {
             margin-top:.5rem;
             font-size: 1rem;
             }
        }
    }
   }
  
   .formik-form{
  ${customInput}
  
   @media only screen and (max-width: 1273px) {
      flex-direction:column;
    }
     

   }
   .content-2{
    @keyframes scaleUp {
        from{
            transform: scale(.2) translateX(20rem);
            
        }
        to{
            transform: scale(1) translateX(0);
        }
    }
    
    width: 22rem;
    height: 100vh;
    background-image: url(${Gif});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
   position: relative;
   
   z-index: 100;
   animation: scaleUp ${animationTime} ease-in-out;
     @media only screen and (max-width: 1040px) {
    width:100%;
    height:50vh;
    background-size:contain;
    }
   }
`
export default Header;