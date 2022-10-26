import React from 'react';
import styled from 'styled-components';
import { BrandGreen, secondaryWhite } from './GlobalStyle';
import logo from "../images/logo.svg"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.svg"
import facebook from "../images/facebook.svg"
import linkedin from "../images/linkedin.svg"



function Footer(props) {
    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <FooterStyle>

                <div className="socials">
                    <img src={logo} alt="logo" />

                    <div className="socials-icons">
                        <div><a href="https://twitter.com/dalukwa"><img src={twitter} alt="twitter" /></a></div>

                        <div className="facebook"><a href="https://facebook.com/dalukwa"><img src={facebook} alt="facebook" /></a></div>

                        <div className="instagram"><a href="https://www.instagram.com/daalukwa/"><img src={instagram} alt="instagram" /></a></div>

                        <div className="linkedin"><a href="https://www.linkedin.com/company/dalukwa/"><img src={linkedin} alt="linkedin" /></a></div>
                    </div>

                </div>

                <div className="links quick-links">
                    <h2 className="link-header">Quick links</h2>
                    <a href="#"><p>Terms</p></a>
                    <a href="#"><p>Conditions</p></a>
                    <a href="#"><p>Policy</p></a>


                </div>

                <div className="links contact-us">
                    <h2 className="link-header">Contact Us</h2>
                    <a href="mailto: Contact@dalukwa.com"><p>Contact@dalukwa.com</p></a>


                </div>

                <div className="links more">
                    <h2 className="link-header">More</h2>
                    <a href="#"><p>Home</p></a>
                    <a href="#beforefooter"><p>Join the waitlist</p></a>
                    <a href="#"><p>Lobby</p></a>
                    <a href="#"><p>FAQs</p></a>

                </div>
            </FooterStyle>
            <Copyright className="copyright">Copyright @ 2022 Dalukwa.</Copyright>
        </div>

    );
}
const FooterStyle = styled.div`
    padding: 1rem 11.3%;

    width: 100%;
    display: flex;
    justify-content: space-between;
flex-wrap: wrap;
gap: 10px;
   margin-top: 5rem;
    .socials-icons{
        display: flex;
        &>*{
            display: flex;
            justify-content:center;
            align-items: center;
            margin-top: 2rem;
            padding:.5rem;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            border: 2px solid ${secondaryWhite};
            
        }
        .instagram,.facebook,.linkedin{
            margin-left:.5rem;
        }
    }
    .links{
         @media only screen and (max-width: 800px) {
   
            margin-top: 1.5rem;
    }
        .link-header{
            color: ${BrandGreen};
            font-size: 1.25rem;
        }
        a:link,a:visited,a:active{
            text-decoration: none;
            color: ${secondaryWhite};
        }
        p{
             margin-top: 1.2rem;
             @media only screen and (max-width: 700px) {
             margin-top: .5rem;
             }
        }
    }
`;
const Copyright = styled.div`
padding: 1rem 11.3%;
    width: 100%;
    color: ${secondaryWhite};
    font-size: 1.2rem;

`
export default Footer;