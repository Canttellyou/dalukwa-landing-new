import React from "react";
import { useField } from "formik";
import { useState } from "react";
import { StyledTextInput, StyledIcon, ErrorMsg } from "./GlobalStyle";
export const TextInput = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);
    return (
        <div style={{ position: "relative" }}>
            {props.type !== "password" && <StyledTextInput
                invalid={meta.touched && meta.error}
                {...field}
                {...props}
            />}


            <StyledIcon>{icon}</StyledIcon>



            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ) : (
                <ErrorMsg style={{
                    visibility: "hidden"
                }}></ErrorMsg>
            )}
        </div>
    )
}