import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from "../images/logo.svg"
import { customButton, paddingMain, paddingSmallMain } from './GlobalStyle';
function Nav(props) {
    return (
        <NavStyle>
            <img src={logo} alt="logo" />

            {/* <div className="nav-links">
                <a href="#"><div>Instagram</div> </a>
                <a href="#"><div>Twitter</div> </a>
                <a href="#"><div>Facebook</div> </a>
                <a href="#"><div>LinkedIn</div> </a>
            </div> */}
            <a href="#beforefooter"><button className="nav-button">Join the waitlist</button></a>

        </NavStyle>
    );
}
const NavStyle = styled(motion.div)`
@keyframes fromTop {
from{
    top: -6rem;
}
to{
    top: 0;
}
}
    display: flex;
    width: 100%;
    padding: ${paddingMain};
    
    padding-top: 2.5rem;
    position: absolute;
    z-index: 300;
    top: 0;
    right: 0;
    justify-content: space-between;
    align-items: center;
    animation: fromTop .75s ease-in-out;
@media only screen and (max-width: 1040px) {
     padding:2rem 9%;
    }
.nav-links{
    display: flex;
    gap: 25px;
    font-size: 1.1rem;
    a, a:link, a:visited{
  color: #F2F2F2;
  cursor: pointer;
}

}
.nav-button{
    ${customButton}
@media only screen and (max-width: 500px) {
             display: none;
             }
font-size: 1.1rem;

}
`
export default Nav;