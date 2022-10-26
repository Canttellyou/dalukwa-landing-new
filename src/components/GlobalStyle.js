//Creating Global Styling//
import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Formik, Form } from 'formik';
import { TextInput } from './FormLib';
import * as Yup from "yup";
import "animate.css/animate.min.css";

export const BrandGreen = '#A8C956';
export const BrandMain = "#14213D";
export const primaryWhite = "#F2F2F2";
export const secondaryWhite = "#BDBDBD";
export const tertiaryWhite = "#E0E0E0";
export const paddingMain = "1rem 6%";
export const paddingSmallMain = "1rem 9%"
export const animation = `
  :root {
    --animate-duration: 1s;
    --animate-delay: 0.75s;
    --animate-repeat: 1;
}
`
///Custom button with hover effect
export const customButton = `
border:none;
font-family:inherit;
cursor:pointer;
border: 2.66667px solid ${BrandGreen};
border-radius: 2.66667px;
color: ${BrandMain};
font-weight: 500;
 transition: all .3s ease;
  padding: .72rem 2rem;
        background-color: ${BrandGreen};
       background-image: radial-gradient(at top,${BrandGreen} 100%,transparent 0%);
       background-size: 100%;
       background-position: center;
       background-repeat: no-repeat;
        &:hover{
            background-image: radial-gradient(at top,${BrandGreen} 5%,transparent 5%);
            background-size: 50%;
            background-color: transparent;
            color: ${BrandGreen};
        }
 @media only screen and (max-width: 1273px) {
      width:100%;
      margin-top:-0.5rem;
    }

`;

//default animation time
export const animationTime = '1s'
export const StyledTextInput = styled.input`
    padding: 13px 10px 13px 10px;
    border: none;
    outline: none;
    border: 1.32px solid ${BrandGreen};
    border-radius: 2.64px;
    color: ${BrandGreen};
    
    font-size: 1.2rem;
    background: transparent;
   
    &::placeholder{
        color:${BrandGreen} ;
        font-size: 1rem;
        font-family: Syne,sans-serif;
        font-weight: 500;
    }

`;


//Icons used in Login form
export const StyledIcon = styled.p`
  
  position: absolute;
  font-size: 21px;
  top: 15px;
  right: 14px;
  
`
///Displaying error message
export const ErrorMsg = styled.div`
  font-size:1rem;
  color:${BrandGreen} ;
 
  padding: .5rem;
  margin-top: 0;
  margin-bottom: 10px;
  border-radius:5px;
`;





export const Styledlabel = styled.p`
  text-align: center;
  font-size: 13px;
  font-weight: bold;
`
  ;


//Style for all inputs
export const customInput = ` 
     margin-top: 3.5rem;
    display: flex;
     @media only screen and (max-width: 1273px) {
      margin-top:2rem;
    }
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
    position:relative;
    
    gap: 10x;
    .email{
        width: 62%;
         @media only screen and (max-width: 1273px) {
      width:100%;
    }
        #email{
            width: 100%;
            transition:all .3s ease;
            &:hover{
                box-shadow: 0 0 15px #a8c956c8;
            }
        }
    }
    
    button{
        ${customButton}
        font-size: 1.2rem;
         height: fit-content;
    }`;




////Form across website
export const globalFormik = () => {
  return (
    <Formik
      className="form"
      initialValues={{
        email: "",

      }}
      // For validating the form data
      validationSchema={
        Yup.object({
          email: Yup.string().email("Invalid email address").required("Required field")
        })
      }
      //Handling the submit event
      //Look into userActions.js for better understanding
      onSubmit={(values, { setSubmitting, resetForm, setFieldError }) => {
        const data = {

          Email: values.email,
          Date: new Date(),
        }

        // Add one line to the sheet
        fetch("https://formsubmit.co/ajax/9c7590a0e2f705bc0153856c6aaa5993", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((r) => r.json())
          .then((data) => {
            // The response comes here
            console.log(data);
          })
          .catch((error) => {
            // Errors are reported there
            console.log(error);
          });
        // Add one line to the sheet
        fetch("https://sheet.best/api/sheets/70f29498-f23a-44d8-b919-9586fe525dc8", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((r) => r.json())
          .then((data) => {
            // The response comes here
            console.log(data);
          })
          .catch((error) => {
            // Errors are reported there
            console.log(error);
          });
        document.querySelector(".success").style.display = "flex"
        document.querySelector(".success").style.opacity = "1";
        document.querySelector(".overlay").addEventListener('click', () => {
          document.querySelector(".success").style.opacity = "0";
          setTimeout(() => {
            document.querySelector(".success").style.display = "none"
          }, 900);

        })
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (<Form className="formik-form">


        <div className="email"> <TextInput
          name="email"
          type="email"
          placeholder="Enter your email here"
          id="email"
          // Using react-icons

          required
        /></div>



        <button type="submit" >Join the waitlist</button>
      </Form>)}

    </Formik>
  )
}


////Global Styling
const Globalstyle = createGlobalStyle`

  *,*::before,*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
  ${animation}
  
}
a, a:link, a:visited{
  text-decoration: none;
}
body{
  position: relative;
  width: 100vw;
height: 100%;
  font-family: Syne,sans-serif;
  overflow-x: hidden;
  color: white;
 
  background: ${BrandMain};
}
 `;
export default Globalstyle;
