import React from 'react';
import styled from 'styled-components';
import { BrandGreen, BrandMain } from './GlobalStyle';
import gboza from "../images/success.gif"
function Success(props) {

    return (
        <SuccessStyle className='success'>
            <div className="overlay"></div>
            <div className="success-modal">
                <img src={gboza} alt="gboza" />
                <h2 className='youIn'>You’re In! 🙌🏽</h2>
                <p>You are early and we love that. When we launch, we are going to send you an email containing the next steps to take.</p>
            </div>
            <div className="success-twist"></div>
        </SuccessStyle>
    );
}
const SuccessStyle = styled.section`
@keyframes opaque {
    0%{
        opacity: 0;
        width: 50%;
    }
    100%{
        opacity: 1;
        width: 100%;
    }
}
    width: 100%;
    position: fixed;
    top: 0;
    height: 100vh;
    z-index: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
    animation: opaque .5s ease-in-out;
    transition: all .4s ease-in-out;
.overlay{
    position: absolute;
    top: 0;
    width: 100%;
    background: rgba(68, 79, 102, 0.75);
    height: 100%;
    opacity: 0.7;
    backdrop-filter: blur(10000px);

}
.success-modal{
    width: 50%;
    height: 75%;
     
    position: relative;
    z-index: 700;
    background: ${BrandMain};
border: 1.45236px solid ${BrandGreen};
box-shadow: 0px 11.6189px 124.28px rgba(37, 72, 153, 0.17);
border-radius: 23.2377px;
display: flex;
flex-direction: column;
padding: 0 1rem;
align-items: center;
@media only screen and (max-width: 700px) {
             width: 80%;
             height: 65%;
             justify-content: center;
             }
img{
    width: 58%;
}
.youIn{
    margin-top: -1rem;
    font-size: 2rem;
    color: ${BrandGreen};
}
p{
    margin-top: 1rem;
    text-align: center;
    font-size: 1.3rem;
}
}
.success-twist{
     width: 50%;
    height: 75%;
     @media only screen and (max-width: 700px) {
             width: 80%;
             height: 65%;
             }
    position:absolute;
    z-index: 550;
    background: transparent;
border: 1.45236px solid ${BrandGreen};
box-shadow: 0px 11.6189px 124.28px rgba(37, 72, 153, 0.17);
border-radius: 23.2377px;
transform: matrix(1, 0.05, -0.08, 1, 0, 0);
}
`
export default Success;